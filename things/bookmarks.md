---
title: bookmarks
permalink: /bookmarks
layout: default
---

# bookmarks

this page hosts the various links to tools/games/resources/anything I find fun, interesting and/or useful.

I describe just enough to explain each link, not going into too much detail unless I feel like commenting on it or if it would otherwise be hard to navigate/understand.

they're not sorted in any order, but the category links are sorted alphabetically. here are they:

- [code repositories](#repos)
- [game development](#gamedev)
- [immediate gui](#imgui)
- [programming languages](#proglangs)
- [programing language development](#pldev)
- [systems programming stuff](#lowlevel)
- [small programs](#tinybins)
- [other nice websites](#interwebz)
- [other resource compilations](#infocomps)

and [here's the button to go back](/).

<h2 id="repos">code repositories</h2>

- [jonesforth, by Richard WM Jones](https://github.com/nornagon/jonesforth): a public domain FORTH system implemented in one x86 file and one FORTH file that also doubles as a tutorial.

- [rxi](https://github.com/rxi): makes really useful and varied libraries, mostly in C and Lua. developer of lite, json.lua, microui, fe and many, many others. I am aware that this is a user, not a code repository.

<h2 id="imgui">immediate gui</h2>

there aren't as many resources about it as I'd like there to be

- [Sol on Immediate Mode GUIs](https://solhsa.com/imgui): a tutorial on a simple IMGUI system in C that also has keyboard focus. written with SDL1 so you might want to translate most calls to SDL 2 or 3.

- [microui, by rxi](https://github.com/rxi/microui): can't mention IMGUIs without mentioning this one. a tiny IMGUI system written in C with zero allocations that can render on anything that is able to draw rectangles and text.

<h2 id="gamedev">game development</h2>

- [Coding Math](https://www.youtube.com/@codingmath): a series of videos on various math topics related to and useful for game development, ranging from physics, to tweening, to a bit of UI. says "ongoing", but the last video released 7 years ago.

- [Game Physics Cookbook](https://gamephysicscookbook.com/): a guide on the algebra and math behind physics engines. I don't like it a lot because it's written like if it was a highschool class, but it's nice regardless.

<h2 id="lowlevel">systems programming stuff</h2>

- [Threaded code explained in C, by dramforever](https://dram.page/p/threaded-code). note, this link doesn't talk about multi-threaded programming, it talks about [threaded code](https://en.wikipedia.org/wiki/Threaded_code) which is a whole nother thing.

<h2 id="proglangs">programming languages</h2>

- [Wren](https://wren.io/): an elegant, object oriented programming language implemented in "around 4000 semicolons".

- [funk](https://github.com/egordorichev/funk): a programming language that only has functions.

- [Uxn](https://100r.co/site/uxn.html), and consequently, [Varvara](https://wiki.xxiivv.com/site/varvara.html): a really small computing stack, designed to be really resilient, under the idea of permacomputing. Varvara embeds Uxn and extends it with a variable-sized screen, file and console I/O, controller, mouse and keyboard input, audio capabilities, etc.

<h2 id="pldev">programming language development</h2>

- [Crafting Interpreters](https://craftinginterpreters.com): a book that teaches the reader how to make two interpreters, a treewalk one written in Java and a bytecode one in C for an ad-hoc programming language called Lox. made by the creator of the Wren programming language.

- [Let's Build a Compiler, by Jack W. Crenshaw](https://compilers.iecc.com/crenshaw/): a fifteen-part series written from 1988 to 1995 about writing a compiler from a custom-made language to Motorola 68k assembly language, in Pascal.

<h2 id="tinybins">small programs</h2>

- [kilo, by antirez](https://github.com/antirez/kilo): a text editor with syntax highlighting and incremental search, implemented in 1000 lines of C code (as counted by `cloc`).

<h2 id="interwebz">other nice websites</h2>

- [tixy.land](https://tixy.land): an artcoding tool to make small demo-ish graphics in a 16x16 dot matrix with 2 colors, with just 4 variables in a JavaScript function, and max 32 characters (soft limit). made by Martin Kleppe ([https://www.twitter.com/@aemkei](https://www.twitter.com/@aemkei))

<h2 id="infocomps">other resource compilations</h2>

- [XXIIVV](https://wiki.xxiivv.com/site/), written by the designer and developer of the Uxn computing stack, Devine Lu Linvega ([@neauoire@merveilles.town](https://merveilles.town/@neauoire)).

- [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x): contains many tutorials to recreate various technologies.

- [snaptoken](https://viewsourcecode.org/snaptoken): at the moment it only contains a tutorial to recreate kilo, but it will have two other tutorials: one to write a small Lua interpreter from scratch, and another to make a garbage collector for C.

- [rxi.github.io](https://rxi.github.io): by the aforementioned rxi, contains some explanations for how their tools work, as well as some other interesting algorithms.

### changelog

all dates are in dd/mm/yy format

- 11/04/24:
  - this page was made
  - changelog added
  - added "Threaded code explained in C", new category "systems programming stuff", reordered categories

- 12/04/24:
  - switch all headers to h2s
  - changed changelog format, added a note about dates
  - the link for Wren had a name that was unnecesarily long
  - wrong link to XXIIVV, it shouldn't go to the index, it should go to the homepage

- 13/04/24:
  - added two new categories: "other nice websites" and "small programs"
  - some new links: tixy.land, rxi.github.io, jonesforth and kilo
  - credited dramforever in the Threaded code link
  - reorganized category links
  - extended descriptions for snaptoken and Build Your Own X
  - fixed jonesforth link (the issue was a single slash, jeez)
  - added category: "immediate gui"
  - added link: "Sol on Immediate GUIs", "microui by rxi"
  - move "code repositories" back to align with its position on the category links section
  - remove redundancy on text above category links
  - extend jonesforth description
  - missed a single m in "programming language development"