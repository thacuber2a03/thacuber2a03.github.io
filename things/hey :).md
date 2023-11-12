---
title: hey :)
permalink: /hey
layout: default
---

# "hey :)" written in a bunch of languages

note: these are not ordered in any particular way, and I try to highlight them with the best matching syntax highlighter if there doesn't exist any for it.

### C
```c
#include <stdio.h>

int main(void)
{
	printf("hey :)");
	return 0;
}
```

### C++ (ew)
```cpp
#include <iostream>

int main(void)
{
	std::cout << "hey :)" << std::endl;
	return 0;
}
```

### Rust
```rust
fn main()
{
	println!("hey :)");
}
```

### Ruby
```ruby
puts "hey :)"
```

### Python
```py
print("hey :)")
```

### Lua
```lua
print "hey :)"
```

### Java
```java
public class Program
{
	public static void main(String[] args)
	{
		System.out.println("hey :)");
	}
}
```

### C\#
the classic way:
```cs
namespace Program
{
	public class Main
	{
		public static void main(string[] args)
		{
			Console.WriteLine("hey :)");
		}
	}
}
```
using the implicit `main` feature in C#:
```cs
Console.WriteLine("hey :)");
```

### [Wren](https://wren.io)
```java
System.print("hey :)")
```

### [Odin](https://odin-lang.org/)
```go
package main

import "core:fmt"

main :: proc()
{
  fmt.printf("hey :)")
}
```

### [Umka](https://github.com/vtereshkov/umka-lang)
```rust
fn main() {
  printf("hey :)")
}
```

### [fe](https://github.com/rxi/fe)
```clojure
(print "hey :)")
```

### Brainfuck
this code is only slightly optimized. cells 0 and 1 are used, 0 is acc
```brainfuck
+++++++++++++++++++[->+++++++++++++++++++<]>-. 'h'
---.                                           'e'
<+++++[->++++<]>.                              'y'
[-]<++++++++[->++++<]>.                        ' '
<+++++++++++++[->++<]>.                        ':'
-----------------.                             ')'
```

### Batch
```bat
echo hey :)
```

### Bash
```bash
echo "hey :)"
```

### [Uxntal](https://wiki.xxiivv.com/site/uxntal.html)
```tal
|0100
  ;hey pstr

@hey "hey 20 ":)

( snippet taken from https://wiki.xxiivv.com/site/uxntal_library.html )
@pstr ( str* -- )
	&w ( -- )
		LDAk #18 DEO
		INC2 & LDAk ?&w
	POP2 JMP2r
```
