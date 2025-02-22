---
title: Reconstructing Ruby, Part 1: Our First Lexer
permalink: /reconstructing-ruby/1-our-first-lexer
---

# Reconstructing Ruby, Part 1: Our First Lexer
#### *August 06, 2014*

Please read my [introduction](./0-introduction.md) to this series to find out more about it.

The first step in writing our implementation of Ruby is to create a *lexer*. What is a lexer? The job of a lexer is to read your code and identify what we call *tokens*. Tokens are simply named pieces of text. An example of this would be to take the program:

```ruby
class Wombat
  def run
    puts "The wombat is running"
  end
end
```

and breaking it down into the following:

```
keyword("class")
constant("Wombat")
newline
keyword("def")
identifier("run")
newline
identifier("puts")
string("The wombat is running")
newline
keyword("end")
newline
keyword("end")
newline
```

We’ll be using a program called [Flex](https://github.com/westes/flex) to tokenize our code. Flex is a lexical analyzer designed to create a lexer. The lexer we will create will be relatively simple at first and will only identify numbers.

Typically, a Flex file will have this structure:

```
definitions and directives
%%
rules
%%
user code
```

The `%%` are part of Flex's syntax and separate the sections that we'll define.

Since we're writing a very simple lexer, we’ll ignore adding any definitions for now. However, we’ll be adding a couple of *directives*. Directives are specific instructions we'll give the Flex compiler. The first directive allows us to execute code before the lexer. This will allow us to load up some necessary C includes like `stdio.h`. This code is copied to the beginning of our generated lexer. It looks like:

```lex
%{
  #include <stdlib.h>
  #include <stdio.h>
%}
```

The second directive we’ll add tells Flex that we will not be implementing a `yywrap` method. When the lexer gets to the end of its input, it runs `yywrap` in order to check if there is an additional input file to continue reading tokens from. If `yywrap` returns `0`, that indicates that `yyin` has been setup to point to a new set of input. If `yywrap` returns `1` then we're telling flex that there is no additional input. Because we're only reading from a single input source, we can use the `noyywrap` option to have flex generate a version of that method that will always return `1`:

```
%option noyywrap
```

After specifying the directives, we’ll follow up with some *rules*. Rules are essentially a pattern and an associated action. When Flex is parsing text, it will try to match that text against each of the patterns. When it finds a match, it will execute the corresponding action. You can find out more about what patterns Flex supports by visiting the [patterns page](https://web.archive.org/web/20221205190527/http://flex.sourceforge.net/manual/Patterns.html)<sup>arc.</sup>.

The format for a single rule would look like:

```lex
PATTERN { ACTION }
```

Since we're only going recognize numbers with our lexer we’ll want to ignore any characters that aren’t numbers. To do this, we’ll need two rules:

```lex
[0-9]+ { printf("NUMBER: %s\n", yytext); }
. {}
```

The first rule references `yytext`. `yytext` is a character array that contains the text that Flex has matched. In our case it will be a character array containing some number. Each rule uses regular-expression-like syntax for describing what it will match. For instance, our first rule matches any number between 0 and 9 one or more times. The second rule matches any single character and executes no code on a match. It's important to note here that the patterns will be matched in order which is why our second rule won't capture any numbers.

The last part of a Flex file is the user code. We’ll add a simple C main function to our file. This main function will call `yylex` which triggers the initial Flex process based on what it reads from STDIN.

You may have noticed the extensive use of `yy`-something in Flex. The reason behind this is that Flex was designed to be an open source alternative to Lex (which at the time was proprietary software). Lex interfaced with a program called Yacc which had namespaced everything with `yy`.

Let’s create a file called `ruby.l` and add the following content:

```lex
%{
  #include <stdlib.h>
  #include <stdio.h>
%}

%option noyywrap

%%
[0-9]+ { printf("NUMBER: %s\n", yytext); }
. {}
%%

int main(int argc, char *argv[]) {
  yylex();
  return EXIT_SUCCESS;
}
```

Now to compile and run this do the following:

```sh
$ flex ruby.l
```

This will generate a single C source file called `lex.yy.c`. Flex took our lexer definition and compiled it into C code, which we can then compile into an executable program:

```sh
$ cc -o ruby lex.yy.c
```

Now we have an executable name `ruby`. Let's run it:

```sh
$ ./ruby
```

Then try the following, type `1` and press enter, then press `42` and press enter. You should see the following:

```
1
NUMBER: 1
42
NUMBER: 42
```

If you type things that aren't numbers, they'll just be ignored. You can exit our program by pressing `ctrl-d`. `ctrl-d` flushes input on STDIN causing our program to acknowledge that there is no more content to read and thus it terminates.

Huzzah! Our initial lexer is complete! While it doesn't do too much yet, it does provide us with the foundation for our next steps. In the future, we'll add more rules that will match all of the tokens Ruby has to offer.

Before we go any further, let’s automate the compilation process of our *Ruby* by using the `make` program. `make` allows us to define tasks, which we can use to compile our code, in a file named `Makefile`. Create a file named `Makefile`, with a capital `M`, and add the following:

```makefile
all: ruby

ruby: lex.yy.c
    cc -o ruby lex.yy.c

lex.yy.c: ruby.l
    flex ruby.l

clean:
    rm ruby lex.yy.c
```

All indentation in the `Makefile` is supposed to be a tab. Make sure you've typed a tab or the `make` program won't work. You'll most likely see `*** missing separator. Stop.``` if you've used spaces instead of a tab.

Now we can just run `make` when we want to compile our version of ruby. To verify this, run `make clean` followed by `make`. We’ll modify this file as our implementation of ruby grows.

If you're having any troubles with the code you can check out the reference implementation on [GitHub](https://github.com/halogenandtoast/reconstructing-ruby/tree/fe93e9bf5cd9c7b02d2e0a81b7101708aae45ce1). Additionally, if you have any comments or feedback I'd greatly appreciate if you left a comment!

Of course, in Ruby we can evaluate files as well as reading from STDIN. In the next post we'll modify our lexer to also take files as input.

Prev: [Introduction](./0-introduction.md)
[Home](./index.md)
