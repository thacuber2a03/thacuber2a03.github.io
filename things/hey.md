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
BRK

@hey "hey 20 ":) $1

( snippet taken from https://wiki.xxiivv.com/site/uxntal_library.html )
@pstr ( str* -- )
	&w ( -- )
		LDAk #18 DEO
		INC2 & LDAk ?&w
	POP2 JMP2r
```

### GameBoy (assemble with [RGBDS](https://rgbds.gbdev.io))
```asm
; if this code is barely readable blame minerobber
INCLUDE "hardware.inc" ; get hardware.inc from https://github.com/gbdev/hardware.inc

SECTION "Interrupts", ROM0[$0040]
REPT 8
	reti
	REPT 7
		nop
	ENDR
ENDR

SECTION "Init", ROM0[$0100]
	nop
	jp Start

SECTION "Start", ROM0[$0150]
Start:
	di ; no interrupts
	ld sp, $dfff ; set up stack pointer
	ld a, %11100100 ; set up palette
	ld [rBGP], a
	xor a ; set screen coordinates to 0,0
	ld [rSCX], a
	ld [rSCY], a
	; turn off LCD using inlined LCD turner-offer function
	ld a, [rLCDC]
	rlca ; LCD on/off flag in carry
	jr nc, .skip ; LCD already off
.wait	ld a, [rLY] ; get screen render Y
	cp 145 ; line 145 is start of VBlank
	jr nz, .wait ; loop until we're at start of VBlank
	ld a, [rLCDC]
	res 7, a ; reset on/off flag
	ld [rLCDC], a
	; copy monochrome "hey :)" tiles to tile memory
.skip	ld hl, TilesStart
	ld de, _VRAM+16
	ld bc, (TilesEnd-TilesStart)
	; inlined memcpy with each source byte copying twice
	; monochrome sprites have the same value in both bytes
	inc b
.loop	ld a, [hli]
	ld [de], a
	inc de
	ld [de], a
	inc de
	dec c
	jr nz, .loop
	dec b
	jr nz, .loop
	; now clear screen
	xor a ; a=00
	ld hl, _SCRN0
	ld bc, SCRN_VX_B * SCRN_VY_B
	inc b
.loop2	ld [hli], a
	dec c
	jr nz, .loop2
	dec b
	jr nz, .loop2
	; now store "hey :)" in the first couple bytes
	ld c, (TilesEnd-TilesStart)/8
	ld hl, _SCRN0
.loop3	inc a
	ld [hli], a
	dec c
	jr nz, .loop3
	; now turn the LCD back on and wait
	ld a, LCDCF_ON|LCDCF_BG8000|LCDCF_BG9800|LCDCF_BGON|LCDCF_OBJOFF
	ld [rLCDC], a
	ei ; not that we're using interrupts but we did give them all something to run so nyeh
.done	halt
	nop
	jr .done

TilesStart:
	opt b.X

	db %XXX.....
	db %.XX.....
	db %.XX.XX..
	db %.XXX.XX.
	db %.XX..XX.
	db %.XX..XX.
	db %XXX..XX.
	db %........

	db %........
	db %........
	db %.XXXX...
	db %XX..XX..
	db %XXXXXX..
	db %XX......
	db %.XXXX...
	db %........

	db %........
	db %........
	db %XX..XX..
	db %XX..XX..
	db %XX..XX..
	db %.XXXXX..
	db %....XX..
	db %XXXXX...

	db %........
	db %........
	db %........
	db %........
	db %........
	db %........
	db %........
	db %........

DEF PURIST EQU 2

IF PURIST == 2 ; must be ":)" exactly

	db %........
	db %........
	db %..XX....
	db %..XX....
	db %........
	db %..XX....
	db %..XX....
	db %........

	db %.XX.....
	db %..XX....
	db %...XX...
	db %...XX...
	db %...XX...
	db %..XX....
	db %.XX.....
	db %........

ELIF PURIST == 1 ; must look like ":)" but can be different internally

	db %....XX..
	db %.XX..XX.
	db %.XX...XX
	db %......XX
	db %.XX...XX
	db %.XX..XX.
	db %....XX..
	db %........

ELSE ; smiley is smiley

	db %.XXXXXX.
	db %X......X
	db %X.X..X.X
	db %X......X
	db %X.XXXX.X
	db %X..XX..X
	db %X......X
	db %.XXXXXX.

ENDC
TilesEnd:
```

### Go
```go
package main

import "fmt"

func main() {
    fmt.Println("hey :)")
}
```

### [Uiua](https://www.uiua.org)
if you want to cheat it with the repl:
```uiua
"hey :)"
```
otherwise:
```uiua
&p "hey :)"
```

### APL
I have no idea how are you supposed to do this one without modifying the language itself, but by using Dyalog you can do:
```apl
]Display 'hey :)'
```

### [Nim](https://nim-lang.org)
```
echo "hey"
#or, using UFCS
"hey".echo
```