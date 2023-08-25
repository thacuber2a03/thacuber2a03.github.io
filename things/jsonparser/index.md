---
name: a Rust noob writes a JSON lexer
permalink: /jsonparser/
---

# a Rust noob writes a JSON lexer

so you want to write a JSON lexer in Rust? ...yeah, me too. I'm just documenting how I'm doing it.
[I've already written one or two compilers before](https://github.com/thacuber2a03/fe2lua), so I know what I'm doing. sorta.

I'll be following the specifcation listed in [the format's official page](https://json.org). funny how it's literally the main thing you see when you open the page.

I'll just make a simple frontend for now.

```rust
use std::env;
use std::process;
use std::fs;
use std::io;

fn main() -> io::Result<()> {
    let argv: Vec<String> = env::args().collect();
    if argv.len() <= 1 {
        println!("usage: {} <filename>", argv[0]);
        process::exit(-1);
    }

    let s = fs::read_to_string(&argv[1]);
    if let Err(e) = s {
        println!("couldn't open file {}: {e}", argv[1]);
        return Err(e);
    }
    let s = s.unwrap();
    println!("{s}");

    Ok(())
}
```

now, onto the actual thing:

```rust
use std::io::Read;

#[derive(Debug)]
pub struct Lexer<R> {
    input: R,
}

impl<R: Read> Lexer<R> {
    pub fn new(input: R) -> Self {
        Lexer {
            input
        }
    }
}
```

not much going on over here right now. I added a loop in `main.rs` that goes through each token and prints it, just to test it.
I also switched to using a `BufReader`, as the lexer accepts anything that implements `Read`:

```rust
mod lexer;

use std::env;
use std::fs::File;
use std::io::{self, BufReader};
use std::process;

use lexer::Lexer;

fn main() -> io::Result<()> {
    // ...

    let f = File::open(&argv[1])?;
    let r = BufReader::new(f);
    let lexer = Lexer::new(r);
    
    while let Some(token) = lexer.next() {
        println!("{token:?}");
    }

    Ok(())
}
```

I'm going to use an on-demand style lexer as that is much faster.
not exactly sure if in performance, but rather in usage: it works _and_ reads like an iterator.
I should probably also implement `Iterator` for `Lexer`...

anyways, gotta make a `Token` enum:

```rust
#[derive(Debug)]
pub enum Token {
    True,
    False,
    Null,

    Comma,
    Colon,
    LBrace,
    RBrace,
    LBracket,
    RBracket,

    Number(f32),
    String(String),
}
```

that wasn't hard, just a bit tedious.

and it's over here where I realized I _can_ implement `Iterator` for `Lexer`;
I basically already have the exact same structure as the trait, it's just adding the type alias and implementing `next`:

```rust
impl<R: Read> Iterator for Lexer<R> {
    type Item = R;
    fn next(&mut self) -> Option<Self::Item> {
        todo!();
    }
}
```

```rust
fn main() -> std::io::Result<()> {
    // ...

    for token in lexer {
        println!("{token:?}");
    }

    // ...
}
```

now I'll focus on implementing `Lexer::next`.
first, the single character tokens.

```rust
fn next(&mut self) -> Option<Self::Item> {
    match self.read_char() {
        Some(c) => Some(match c {
            '{' => Token::LBrace,
            '}' => Token::RBrace,
            '[' => Token::LBracket,
            ']' => Token::RBracket,
            ',' => Token::Comma,
            ':' => Token::Colon,
            c => panic!("unexpected character {c}"),
        }),
        None => None,
    }
}
```

they use this `read_char` function:
```rust
impl<R: Read> Lexer<R> {
    // ...

    fn read_char(&mut self) -> Option<char> {
        let mut buf = [0];
        if self.input.read(&mut buf).is_ok() {
            Some(buf[0] as char)
        } else {
            None
        }
    }
}
```

next, `true`, `false` and `null`:
```rust
impl<R> Iterator for Lexer<R> {
    // ...

    fn next(&mut self) -> Option<Self::Item> {
        match self.read_char() {
            Some(c) => Some(match c {
                // ...
                't' | 'f' | 'n' => self.check_id(c),
                // ...
            }),
            // ...
        }
    }
}
```

another helper method:
```rust
fn check_id(&mut self, c: char) -> Token {
    let mut s = String::from(c);
    loop {
        match self.peek_char() {
            Some(c) if !c.is_alphabetic() => break,
            Some(_) => s.push(self.read_char().unwrap()),
            None => panic!("expected true, false or null, got end of file"),
        }
    }

    match s.as_str() {
        "true" => Token::True,
        "false" => Token::False,
        "null" => Token::Null,
        _ => panic!("expected true, false or null, got {s}"),
    }
}
```

and now that we're dealing with errors more frequently,
I should probably implement an error method instead of just panicking...

first, I'd need to store the current position of the lexer:
```rust
#[derive(Debug)]
pub struct Lexer<R> {
    input: R,
    line: usize,
    col: usize,
}

impl<R: Read> Lexer<R> {
    pub fn new(input: R) -> Self {
        Lexer {
            input,
            line: 1,
            col: 1,
        }
    }

    // ...
}
```

then, a simple method for reporting them and exiting gracefully (not exactly):
```rust
impl<R: Read> Lexer<R> {
    // ...

    fn error(&mut self, msg: String) -> ! {
        println!("error: {msg} at ({}, {})", self.line, self.col);
        std::process::exit(-1);
    }

    // ...
}
```

I recently learned about `!`... it's apparently a type you return when your function or block or whatever isn't ever going to return.

it's different from `()` in that that is a valid type to be returned, but `!` just straight up says "you're never getting a value from me".

anyways, the `line` and `col` offsets are going to be changed in `Lexer::next`, while skipping whitespace.

I also conveniently forgot to skip whitespace, so there's that.

```rust
impl<R: Read> Iterator for Lexer<R> {
    // ...

    fn next(&mut self) -> Option<Self::Item> {
        let start: Option<char>;
        loop {
            match self.read_char() {
                Some(c) => {
                    match c {
                        ' ' | '\r' | '\t' => {
                            self.col += 1;
                        }
                        '\n' => {
                            self.line += 1;
                            self.col = 1;
                        }
                        c => {
                            start = Some(c);
                            break
                        }
                    }
                }
                None => return None,
            }
        }

        match start {
            // ...
        }
    }
}
```

now, replace all `panic!` calls with `self.error` calls.

```rust
fn check_id(&mut self, c: char) -> Token {
    // ...
    loop {
        match self.next_char() {
            // ...
            None => self.error("expected true, false or null, got end of file".to_string()),
        }
    }

    match s.as_str() {
        // ...
        _ => self.error(format!("expected true, false or null, got {s}")),
    }
}
```

```rust
impl<R: Read> Iterator for Lexer<R> {
    // ...

    fn next(&mut self) -> Option<Token> {
        // ...

        match start {
            // ...
            c => self.error(format!("unexpected character {c} (code {})", c as u8))
        }
    }
}
```

at this point, I realize I need a `Lexer::peek_char` method, as using `Lexer::read_char` over at `Lexer::check_id` is bound to break down if, well, *anything* is scanned, as it can potentially skip another important character, such as `"` or `{`/`[`. no sane encoder outputs JSON without some whitespace, but there *are* such encoders, and people happen to also write JSON files manually, soooo...

```rust
impl<R: Read> Lexer<R> {
    //...

    fn read_char(&mut self) -> Option<char> {
        if self.stored_char.is_some() {
            mem::replace(&mut self.stored_char, None)
        } else {
            let mut buf = [0];
            if self.input.read(&mut buf).is_ok() {
                Some(buf[0] as char)
            } else {
                None
            }
        }
    }

    fn peek_char(&mut self) -> &Option<char> {
        if self.stored_char.is_none() {
            self.stored_char = self.read_char()
        }
        &self.stored_char
    }

    // ...
}
```

now, it's just fixing `Lexer::check_id`...

```rust
impl<R: Read> Lexer<R> {
    // ...

    fn check_id(&mut self, c: char) -> Token {
        // ...
        loop {
            match self.peek_char() {
                // ...
            }
        }
        // ...
    }

    // ...
}
```

and now that we're at it, rewrite the whitespace skip loop:

```rust
impl<R: Read> Iterator for Lexer<R> {
    // ...
    fn next(&mut self) -> Option<Self::Item> {
        loop {
            match self.peek_char() {
                Some(c) => match c {
                    ' ' | '\r' | '\t' => {
                        self.col += 1;
                        self.read_char();
                    }
                    '\n' => {
                        self.line += 1;
                        self.col = 1;
                        self.read_char();
                    }
                    _ => break,
                }
                None => return None,
            }
        }

        match self.read_char() {
            // ...
        }
    }
}
```

and now, the stars of the show: numbers and strings.

```rust
impl<R: Read> Iterator for Lexer<R> {
    // ...

    fn next(&mut self) -> Option<Self::Item> {
        match start {
            // ...
            '"' => self.scan_string(),
        }
    }
}
```

this method doesn't recieve any arguments because, well, how else do you start strings in JSON

```rust
impl<R: Read> Lexer<R> {
    // ...

    fn scan_string(&mut self) -> Token {
        let mut s = String::new();
        loop {
            match self.peek_char() {
                Some('"') => break Token::String(s),
                Some('\\') => s.push(self.read_escape()),
                Some(_) => s.push(self.read_char().unwrap()),
                None => self.error("expected a closing quote, got end of file").to_string()),
            }
        }
    }

    // ...
}
```

aaaand another helper method for reading escape sequences.

```rust
impl<R: Read> Lexer<R> {
    fn read_escape(&mut self) -> char {
        match self.read_char() {
            None => self.error("expected an escapable character, got end of file".to_string()),
            Some(c) => match c {
                '"' => '"',
                '\\' => '\\',
                '/' => '/', // why is this in the spec
                'b' => '\x08',
                'f' => '\x0c',
                'n' => '\n',
                'r' => '\r',
                't' => '\t',
                'u' => { // I've no idea if this works yet
                    let mut s = String::new();
                    for _ in 0..4 {
                        match self.peek_char() {
                            None => self.error("expected a hex digits, got end of file".to_string()),
                            Some(c) if c.is_ascii_hexdigit() => s.push(self.read_char().unwrap()),
                            Some(c) => {
                                let c = *c;
                                self.error(format!("expected a hex digit, got {c}"));
                            }
                        }
                    }

                    match s.parse::<char>() {
                        Ok(c) => c,
                        Err(e) => self.error(format!("{e}")), // should probably change this one
                    }
                }
                _ => self.error(format!("invalid escape character {c}"))
            }
        }
    }
}
```

...and it's over here I discover `Option::map`. oh well.

```rust
impl<R: Read> Iterator for Lexer<R> {
    // ...
    
    fn next(&mut self) -> Option<Self::Item> {
        // ...

        self.read_char().map(|c| match c {
            // ...
        })
    }
}
```

and finally, numbers:

```rust
impl<R: Read> Lexer<R> {
    // ...

    fn scan_number(&mut self, n: char) -> Token {
        let mut s = String::from(n);
        while let Some(c) = self.read_char() {
            match c {
                c if c.is_ascii_digit() => s.push(c),
                '-' | '+' | 'E' | 'e' | '.' => s.push(c),
                _ => break,
            }
        }

        if s.is_empty() {
            panic!("what");
        } else {
            match s.parse() {
                Ok(n) => Token::Number(n),
                Err(e) => self.error(e.to_string()),
            }
        }
    }

    // ...
}
```

I'm going to let Rust's number parser do the parsing for now, but I should definitely parse it manually later.

and it's at this moment I realize I could modify `line` and `col` in `Lexer::read_char`. yeah.

```rust
impl<R: Read> Iterator for Lexer<R> {
    // ...

    fn next(&mut self) -> Option<Token> {
        loop {
            match self.peek_char() {
                Some(c) => match c {
                    c if c.is_ascii_whitespace() => self.read_char(),
                    _ => break,
                },
                None => return None,
            };
        }

        // ...
    }
}
```

```rust
impl<R: Read> Lexer<R> {
    fn read_char(&mut self) -> Option<char> {
        let c = if self.stored_char.is_some() {
            self.stored_char.take().unwrap()
        } else {
            let mut buf = [0];
            if self.input.read(&mut buf).is_ok() {
                buf[0] as char
            } else {
                return None
            }
        };

        match c {
            '\n' => {
                self.line += 1;
                self.col = 1;
            }
            _ => self.col += 1
        }

        Some(c)
    }
}
```

and yeah, that would be everything for this lexer! let's try it...

test file:
```json
{
	"number": 1,
	"boolean": true,
	"array_with_stuff": [ 1, false, null, {} ]
}
```

output:

```
$ cargo run assets/test.json
   Compiling jsonparser v0.1.0 (/home/thacuber2a03/Documentos/code/rust/jsonparser)
    Finished dev [unoptimized + debuginfo] target(s) in 1.33s
     Running `target/debug/jsonparser assets/test.json`
LBrace
String("number")
Colon
Number(1.0)
String("boolean")
Colon
True
Comma
String("array_with_stuff")
Colon
LBracket
Number(1.0)
False
Comma
Null
Comma
LBrace
RBrace
RBracket
RBrace
error: unexpected character (NUL) (code 0), at (11, 3)
```

...

I'll just hardcode a special case for NUL.

```
impl<R: Read> Iterator for Lexer<R> {
    // ...
    
    fn next(&mut self) -> Option<Token> {
        // ...

        if self.peek_char().is_some_and(|c| c == '\0') {
            return None
        }

        // ...
    }
}
```

again...

```
$ cargo run assets/test.json
    Finished dev [unoptimized + debuginfo] target(s) in 0.03s
     Running `target/debug/jsonparser assets/test.json`
LBrace
String("number")
Colon
Number(1.0)
String("boolean")
Colon
True
Comma
String("array_with_stuff")
Colon
LBracket
Number(1.0)
False
Comma
Null
Comma
LBrace
RBrace
RBracket
RBrace
```

and this time, it works!

well, that's all for this article. the code will be [hosted in my GitHub](https://github.com/thacuber2a03/jsonparser). next time I'll make the parser. cya.

