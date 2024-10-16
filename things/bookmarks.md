---
title: tc's bookmarks
permalink: /bookmarks
layout: default
---

# bookmarks

this page hosts the various links to tools/games/resources/anything I find fun, interesting and/or useful.

I describe just enough to explain each link, not going into too much detail unless I feel like commenting on it or if it would otherwise be hard to navigate/understand.

they're not sorted in any order, but the category links are sorted alphabetically. here are they:

- [code repositories](#repos)
- [computer graphics](#graphics)
- [game development](#gamedev)
- [immediate gui](#imgui)
- [interesting videos](#vids)
- [music resources](#musicres)
- [other nice websites](#interwebs)
- [other resouce compilations](#infocomps)
- [programming languages](#proglangs)
- [programming language development](#pldev)
- [small programs](#tinybins)
- [some tunez](#music)
- [systems programming stuff](#lowlevel)

and [here's the button to go back](https://thacuber2a03.github.io/).

> **noteworthy update:** I'm trying out a new and consistent link format, where the title of each resource is its name, followed by 2 dashes (or a long dash- depends on how Jekyll wants to render any of this) and the author(s) of the project.
> tell me what you think about it in [the issues page](https://github.com/thacuber2a03/thacuber2a03.github.io/issues) of this website's repository!
> I might've also possibly messed up something while changing the links, so if you find any errors on the links please tell me over there too.

<h2 id="repos">code repositories</h2>

- **[jonesforth](https://github.com/nornagon/jonesforth) -- [Richard WM. Jones](https://rwmj.wordpress.com)** \
  a public domain FORTH system implemented in one x86 file and one FORTH file that also doubles as a tutorial.

- **[rxi](https://github.com/rxi)** \
  makes really useful and varied libraries, mostly in C and Lua. developer of lite, json.lua, microui, fe and many, many others. \
  (I am aware that this is a user, not a code repository.)

- **[stb](https://github.com/nothings/stb) -- [nothings](https://github.com/nothings)** \
  *the* header-only library repository. contains libraries that range from decoding/encoding images and OGG Vorbis audio files to voxel geometry rendering, all in the public domain.

<h2 id="vids">interesting videos</h2>

these are either video essays, experiments or playlists of videos

- **[one hit wonders (and their other songs)](https://youtu.be/bLjLnQl2GHg) -- [boogiehead](https://www.youtube.com/@boogieheadmusic)** \
  a listing of some [one-hit wonders](https://en.wikipedia.org/wiki/One-hit_wonder), normally in the US, with a second song they recorded that's popular in other countries.

<h2 id="gamedev">game development</h2>

- **[Coding Math](https://www.youtube.com/@codingmath)** \
  a series of videos on various math topics related to and useful for game development, ranging from physics, to tweening, to a bit of UI. says "ongoing", but the last video released 7 years ago.

- **[Game Physics Cookbook](https://gamephysicscookbook.com/) -- [Gabor Szauer](https://gaborszauer.com)** \
  a guide on the algebra and math behind physics engines. I don't like it a lot because it's written like if it was a highschool class, but it's nice regardless.

- **[2D Parametric Collision Detection](https://fotino.me/2d-parametric-collision-detection/) and [2D Rigid Body Collision Response](https://fotino.me/2d-rigid-body-collision-response/) -- [Robert Fotino](https://fotino.me)** \
  two articles that go on detail about a collision detection algorithm based on parametric equations,
  and an impulse-based constraint solver, respectively.

- **[Game Programming Patterns](https://gameprogrammingpatterns.com/) -- [Robert Nystrom](https://stuffwithstuff.com)** \
  this book goes over various programming patterns that are useful for game or game engine design. \
  from the writer of Crafting Interpreters (this book came before it)

<h2 id="imgui">immediate gui</h2>

> ...there aren't as many resources about it as I'd like there to be

- **[Sol on Immediate Mode GUIs](http://iki.fi/sol/imgui/) -- [Sol_HSA](https://solhsa.com/)** \
  a tutorial on a simple IMGUI system in C that also has keyboard focus. it's written in SDL1, so you might want to translate most calls to SDL 2 or 3.

- **[Immediate-Mode Graphical User Interfaces](https://youtu.be/Z1qyvQsjK5Y) -- [Casey Muratori](https://mollyrocket.com)** \
*the* video about IMGUIs. recorded in 2005, this state-of-the-art 360p video (haha) is an essay explaining the idea of IMGUIs and why they rock. however, it also mentions some important cons to keep in mind, which I respect.

- **[microui](https://github.com/rxi/microui) -- [rxi](https://github.com/rxi)**\
  can't mention simple IMGUIs without mentioning this one. it is a tiny IMGUI system written in ANSI C with zero allocations, and it does not depend on a graphics API either, so it can render on anything that is able to draw rectangles and text.

- **[nuklear](https://github.com/Immediate-Mode-UI/Nuklear) -- [the Immediate-Mode-UI community](https://github.com/Immediate-Mode-UI)** \
  originally written by [Micha Mettke](https://github.com/vurtun), it is a public-domain, header-only GUI library written in ANSI C, that mantains little state and does not handle OS inputs or windows. it also contains radio buttons, combo boxes, and progress bars, as well as complex graphics functions and basic image handling.

- **[suit](https://github.com/vrld/suit) -- [Matthias Richter](https://github.com/vrld)** \
an IMGUI specifically designed for the [LÖVE](https://love2d.org) game framework. it contains a flexible styling system that allows for drawing just about anything, as well as a layouting system decoupled from the UI itself.

<h2 id="graphics">computer graphics</h2>

- **[Raytracing in One Weekend](https://raytracing.github.io/) --
    [Peter Shirley](https://github.com/petershirley),
    [Trevor David Black](https://github.com/trevordblack),
    [Steve Hollasch](https://github.com/hollasch)** \
  a public domain (CC0) series of books that teaches the reader how to write a tiny raytracer with more than just circles.

- **[An Introduction to Shader Art Coding](https://www.youtube.com/watch?v=f4s1h2YETNY) -- [kishimisu](https://www.youtube.com/@kishimisu)** \
  what it says on the tin. does a small overview on the math needed to make shader art while making a small shader.

- **[Building Collision Simulations: An Introduction to Computer Graphics](https://www.youtube.com/watch?v=eED4bSkYCB8) -- [Reducible](https://www.youtube.com/@Reducible)** \
  I really like this video. this video builds a particle collision simulation, and goes over various topics to speed it up with a higher amount of particles.

- **[Performance optimizations for voxel graphics](https://www.youtube.com/watch?v=40JzyaOYJeY) -- [Vercidium](https://www.youtube.com/@Vercidium)** \
  this video goes over various space and performance optimizations you can apply to voxel rendering engines.

> you may notice the link's name above doesn't match with the video's title. that's because I used the title assigned to it by [Dearrow](https://dearrow.ajay.app/) because it's not as clickbait or as sensationalist as the video's title.
> I might do the same with some other YouTube links; if the title doesn't match, it's likely using Dearrow's version of it.

<h2 id="music">some tunez</h2>

this is, straight up, just links to music I like to listen to, with links to the artist and the album the song is from, if applicable. if no official playlist exists, I might make one and put links to that instead.

> note: the categories they are in don't imply they're only reachable there. it's just that that was the first place I found the song at.

### SoundCloud

- [Desolo Zantas](https://soundcloud.com/desolozantas)
  - [Lost In The Jungle Mist](https://soundcloud.com/desolozantas/lost-in-the-jungle-mist)
- [TOKYOPILL](https://soundcloud.com/tokyopill)
  - [Ethereal](https://soundcloud.com/tokyopill/ethereal) - previously Metadata. I like that name. an [unofficial mv](https://www.youtube.com/watch?v=3XFXPIMdj2Y) in YouTube.
- [Keestak](https://soundcloud.com/keestak)
  - [Windowkill OST](https://soundcloud.com/keestak/sets/windowkill-ost)
    - [Windowchill](https://soundcloud.com/keestak/windowchill)
    - [Windowkiller](https://soundcloud.com/keestak/windowkiller)
- [Frums](https://soundcloud.com/frums/)
  - [A Dance of Fire and Ice Neo Cosmos DLC OST](https://www.youtube.com/playlist?list=PLoV0Pc5bQC6LhGsbNaCGvHzuUP1TFeI1S) - link to YT
    - [sing sing red indigo](https://soundcloud.com/frums/sing-sing-red-indigo)
  - [Aegleseeker](https://soundcloud.com/frums/aegleseeker) - collab with [Silentroom](https://soundcloud.com/silentrm-net), credited to "Silentroom vs. Frums"
  - [of Ambrosia](https://soundcloud.com/frums/of-ambrosia)
  - [Q.E.](https://soundcloud.com/frums/q-dot-e-dot)
  - [μ](https://soundcloud.com/frums/mju)
  - [HALL](https://soundcloud.com/frums/hall)
- [Deffy](https://soundcloud.com/deffynite) - f.k.a. Deathro
  - [Attemption](https://soundcloud.com/deffynite/attemption)
- [commandycan](https://soundcloud.com/commandycan)
  - [Song of Psychosis](https://soundcloud.com/commandycan/song-of-psychosis)
- [Fearofdark](https://soundcloud.com/fod-steve)
  - [Exit Plan](https://soundcloud.com/fod-steve/sets/exit-plan)
    - [Staying Afloat (ft. Danimal Cannon)](https://soundcloud.com/fod-steve/staying-afloat-feat-danimal)
  - [The Coffee Zone](https://soundcloud.com/fod-steve/sets/the-coffee-zone)
    - [Dopefish Lives](https://soundcloud.com/fod-steve/dopefish-lives-mmc5)
  - [Windflower](https://soundcloud.com/fod-steve/windflower)
  - actually, just open their page and click a random song, I will probably like it ;\)

### YouTube

- [Creo](https://www.youtube.com/@CreoMusic)
  - [Nautilus](https://www.youtube.com/watch?v=6xEKE8jXyBs)
  - [Aura](https://www.youtube.com/watch?v=LXTrXaYMgYs)
  - [Never Make It](https://www.youtube.com/watch?v=11Z5_cej2dk)
  - [Exosphere](https://www.youtube.com/watch?v=MN8xH1J-Jyg)
  - [Dark Tides](https://www.youtube.com/watch?v=XSjN9c5zilY)
  - [Lightmare](https://www.youtube.com/watch?v=U0hibvFfRdg)
  - [Shine](https://www.youtube.com/watch?v=KUrePkNVp0s)
  - [Rock Thing](https://www.youtube.com/watch?v=-W52cDdeAuI)
  - [Aurora](https://www.youtube.com/watch?v=M170iMt3C8A)
  - [In Synergy](https://www.youtube.com/watch?v=syCQNuITDHw)
  - [Deep Dive](https://www.youtube.com/watch?v=a4wlxegc-mA) - :bubbles:
  - [Without You](https://www.youtube.com/watch?v=57AfgdNkvI8) - :sunset:
  - [Dimension](https://www.youtube.com/watch?v=MrD05HVGVIQ)
  - [Panacea](https://youtube.com/playlist?list=PL143F4F0390FB3DB6)
    - [Make it Look Like an Accident](https://www.youtube.com/watch?v=qbi_FHlt7pU)
    - it's the only song from Panacea that's posted on YouTube...
  - [Octane EP](https://youtube.com/playlist?list=PLJrjuJXeaiCsYGrMc1lNg54Ap9lutLf-a)
    - [Crazy](https://www.youtube.com/watch?v=IDaP8LeYsrk)
    - [Ballistic Funk](https://www.youtube.com/watch?v=JWFnrx2NYSU)
    - I'm this close to putting Octane too for completion, but I just don't enjoy it
- [JVKE](https://www.youtube.com/@JVKE)
  - [this is what ____ feels like (vol. 1-4)](https://www.youtube.com/playlist?list=OLAK5uy_liYl68JFE-tg2ZKLYHcCUdA0bTknb1_dU) - epic album name
    - [golden hour](https://www.youtube.com/watch?v=PEM0Vs8jf1w)
  - [this is what space feels like](https://www.youtube.com/watch?v=g-FXA0nSn8U)
  - [this is what autumn feels like](https://www.youtube.com/watch?v=QegcGsE9tYE)
  - [her](https://www.youtube.com/watch?v=f5-IY_Ja1RM)
  - honestly, I'm never sure which songs belong to TIW_FL and which don't, they all have basically the same cover<br>
  I had to rewrite this section like 1 or 2 times<br>
  ...I think the album is already finished...
- [Coyote Theory](https://www.youtube.com/@CoyoteTheory)
  - [Color](https://www.youtube.com/playlist?list=OLAK5uy_nCk9_GEwqQfYiN-Wn4ATPSKhBseJjwRCU)
    - [This Side of Paradise](https://www.youtube.com/watch?v=FHT3xNYZU8o) - with an official [slowed version](https://www.youtube.com/watch?v=0ueoezHCGy0)
- [Georg Vogel](https://youtube.com/@vogelgeorg)
  - [You're Everything](https://youtube.com/watch?v=upbwQPeGm0Q) - it's microtonal jazz, holy shit!
- [Madeon](https://youtube.com/@itsmadeon)
  - [Pop Culture](https://youtube.com/watch?v=lTx3G6h2xyA) - [music video](https://youtube.com/watch?v=B496Qv0CuOQ), unsure whether it's official
  - [Adventure](https://www.youtube.com/playlist?list=OLAK5uy_lEX2ZWJ-FoqZ3jcWIGciMFASauDCOAiEA)
    - [OK](https://youtu.be/PgDMeLEqvYY)
- [KORAII](https://www.youtube.com/@KORAII)
  - [LOVE](https://www.youtube.com/watch?v=Y4-U3X4TyWI)
    - [CONNECT](https://www.youtube.com/watch?v=sXrtd5d6w5E) - **_BASS_**
- Hoffman & Daytripper - no idea if they have an active online appearance, nor where their accounts are
  - [Professional Tracker](https://www.youtube.com/watch?v=9N9P52RqoEA) - oscview by [acrouzet](https://youtube.com/@acrouzet)
- [Aphex Twin](https://youtube.com/@aphextwin9341) - afx
  - [Come to Daddy](https://www.youtube.com/playlist?list=OLAK5uy_kZb_rG2RQfOcyfRPpp3ZTThnCRHDzHQO0)
    - [Flim](https://www.youtube.com/watch?v=-yNHlKAzyVA)
    - [IZ-US](https://www.youtube.com/watch?v=OkqOmWyb2Ac)
  - [Selected Ambient Works 85-92](https://www.youtube.com/playlist?list=OLAK5uy_luEur9V6VWGm0oMYWJlNgRHlsvEOaAHww)
    - [Xtal](https://www.youtube.com/watch?v=uXpKC8TIAxE)
- [Skyper](https://youtube.com/@SkyperMusic)
  - [Hero](https://www.youtube.com/watch?v=wHQusvIR0UI)
  - [The Flight](https://www.youtube.com/watch?v=x0F7xfeRKtY)
- music published by [Proximity](https://www.youtube.com/@Proximity)
  - [ONEDUO](https://soundcloud.com/oneduo)
    - [The Chainsmokers - Sick Boy (ONEDUO remix)](https://www.youtube.com/watch?v=GnNi_LuMnN4)
- music published by [No Copyright Sounds](https://youtube.com/@NoCopyrightSounds)
  - [Chime](https://youtube.com/@ChimeTunes) and [Adam Tell](https://www.youtube.com/@adamshmadam)
    - [Whole](https://www.youtube.com/watch?v=mDulNkJC1CE)
    - [Rob Gasser remix](https://www.youtube.com/watch?v=AHBnM1Jin9A)
- [Paper Skies](https://youtube.com/@PaperSkies) and [Exyl](https://www.youtube.com/@exyl_sounds)
  - [HOW](https://www.youtube.com/watch?v=EEnzDZFy5oY) - goofiest name
- [Cafuné](https://youtube.com/@wearecafune)
  - [Running](https://youtube.com/playlist?list=PLyNeYLc-m3DcF_l-RtoT6Vb5j66-Cd2Rf)
    - [Tek It](https://www.youtube.com/watch?v=7RWbq-lbBlk) - official music video
- [Frou Frou](https://youtube.com/@frou-frou-frou)
  - [A New Kind Of Love](https://www.youtube.com/watch?v=vWwIBemUwOI)
- [Vierre Cloud](https://www.youtube.com/@vierrecloudvevo9141)
  - [moment](https://www.youtube.com/watch?v=1QMG2QjsjdA) - nowhere in the lyrics
    is the word "moment" where did that name come from
    > "We're approximating 1+1 with this one 🗣️ 🔥 ‼️" - @pedrooou7699

<h2 id="musicres">music resources</h2>

- **[Notes on Music Theory](https://badd10de.dev/notes/music-theory.html) -- [Bad Diode](https://badd10de.dev/)** \
  an incredibly extensive and comprehensive set of writings on music theory.
  **warning**: this page has a pretty noisy orange background.

- **[muted.io](https://muted.io) -- [Sébastien](https://muted.io/about)** \
  interactive tools for practicing an instrument, studying specific music concepts informally or just for jamming and kidding around.

<h2 id="lowlevel">systems programming stuff</h2>

- **[Threaded code explained in C](https://dram.page/p/threaded-code) -- [dramforever](https://dram.page)** \
  note, this link doesn't talk about multi-threaded programming, it talks about [threaded code](https://en.wikipedia.org/wiki/Threaded_code) which is a whole nother thing.

- **[6502 Instruction Set](http://www.6502.org/users/obelisk/6502/instructions.html) -- [Andrew Jacobs (BitWise)](http://www.6502.org/users/obelisk/) (RIP)** \
A detailed listing of all instructions and their actions/side effects in the MOS 6502 microprocessor.

<h2 id="proglangs">programming languages</h2>

- **[Wren](https://wren.io/) -- [Robert Nystrom](https://stuffwithstuff.com), [ruby0x1](https://mastodon.gamedev.place/@ruby0x1) et al.** \
  an elegant, object oriented programming language implemented in "around 4000 semicolons".

- **[funk](https://github.com/egordorichev/funk) -- [Egor Dorichev](https://egordorichev.github.io/)** \
  a programming language that only has functions.

- **[Uxn](https://100r.co/site/uxn.html)/[Varvara](https://wiki.xxiivv.com/site/varvara.html) -- [Hundred Rabbits](https://100r.co)** \
  a really small computing stack, designed to be really resilient, under the idea of permacomputing. Varvara embeds Uxn and extends it with a variable-sized screen, file and console I/O, controller, mouse and keyboard input, audio capabilities, etc.

- **[OCaml](https://ocaml.org/) -- Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez et al.** \
  OCaml is "an industrial-strength functional programming language with an emphasis on expressiveness and safety". I just like the language.

- **[Uiua](https://uiua.org) -- [Kai Schmidt](https://github.com/kaikalii)** \
  a point-free array-based programming language that reads from right to left and has capabilities for image, gif, audio and files processing, multithreading, sockets and FFI.

- **[Zig](https://ziglang.org) -- [the Zig Software Foundation](https://ziglang.org/zsf/)** \
  an incredibly-explicit programming language with a hyper-comptime approach to metaprogramming. so explicit, you usually have to specify the allocator you want to use in some of its type functions. I'm not sure *why* I like it, but I do XD

<h2 id="pldev">programming language development</h2>

- **[Crafting Interpreters](https://craftinginterpreters.com) -- [Robert Nystrom](https://stuffwithstuff.com)** \
  a book that teaches the reader how to make two interpreters, a treewalk one written in Java and a bytecode one in C for an ad-hoc programming language called Lox. made by the creator of the Wren programming language and the Game Programming Patterns book.

- **[Let's Build a Compiler](https://compilers.iecc.com/crenshaw/) -- Jack W. Crenshaw** \
  a fifteen-part series written from 1988 to 1995 about writing a compiler from a custom-made language to Motorola 68k assembly language, in Pascal.

- **[Make a Lisp](https://github.com/kanaka/mal) -- [Joel Martin](https://github.com/kanaka)** \
  a language-agnostic tutorial for making a Lisp-like with tail-call optimization, macros, file I/O and exception handling.

- **[Borrow checking, RC, GC, and the Eleven (!) Other Memory Safety Approaches](https://verdagon.dev/grimoire/grimoire) -- [Evan Ovadia](https://verdagon.dev/home)** \
  an amazing overview on various different memory management strategies, some of them I didn't know existed lol

- **[Languages ∩ Architecture (Languages [intersect] Architecture)](https://verdagon.dev/home) -- Evan Ovadia** \
  a blog about low-level pldev topics.
  > **note**: this link is the same as the author link in the resource just above.

- **[Writing and Compiling a Lisp](https://bernsteinbear.com/blog/lisp/) -- [Max Bernstein](https://bernsteinbear.com)** \
two really nice series about writing an interpreter for a full-featured Lisp in OCaml, and a compiler for it in C.

- **[Writing a compiler in Ruby, bottom up](http://hokstad.com/compiler) -- [Vidar Hokstad](https://hokstad.com)** \
  writing a self-hosting Ruby compiler that starts from code generation instead of parsing.

- **[Zig's compiler internals](https://mitchellh.com/zig) -- [Mitchell Hashimoto](https://mitchellh.com/) (nice name!)** \
  an awesome collection of writings about the internals of the Zig compiler. goes over how the tokenizer, parser, IR generator and semantic analysis work, along with some other Zig-specific topics.

<h2 id="tinybins">small programs</h2>

- **[kilo](https://github.com/antirez/kilo) -- [Salvatore Sanfilippo](https://github.com/antirez)** \
  a text editor with syntax highlighting and incremental search, implemented in 1000 lines of C code (as counted by `cloc`)

- **[Blit](https://quiltro.org/blit.html) -- [Lobo Torres](https://quiltro.org)** \
  a stack-based virtual machine for making "bit art"

<h2 id="interwebz">other nice websites</h2>

- **[Just for Fun. No, Really](https://justforfunnoreally.dev/) -- [Tim Morgan](https://timmorgan.dev/) (epic website design right here)** \
  coding, just for fun, is fun. a listing of various projects done for fun :\)

- **[tixy.land](https://tixy.land) -- [Martin Kleppe](https://x.com/@aemkei)** \
  an artcoding tool to make small demo-ish graphics in a 16x16 dot matrix with 2 colors, with just 4 variables in a JavaScript function, and max 32 characters (soft limit).

- **[From Nand to Tetris](https://www.nand2tetris.org/) -- Shimon Schocken and Noam Nisan** \
  the website that hosts the courses based on the book: [The Elements of Computing Systems: Building a Modern Computer from First Principles](https://www.amazon.com/Elements-Computing-Systems-Building-Principles/dp/0262640686/ref=ed_oe_p)

- **[The Nand Game](https://nandgame.com) -- [Olav Junker Kjær](https://nandgame.com/about)** \
  a webgame about building a 16-bit computer out of ICs, all made out of nand gates. touches on assembly language and language compilation. based on the book listed above.

<h2 id="infocomps">other resource compilations</h2>

- **[EuclideanSpace](https://www.euclideanspace.com/) -- Martin John Baker** \
  a website that looks at the mathematics behind various sciences and how they can be written as code. it looks like a 90's or 2000's page, which I'm not sure if it's intended or not, but is a plus from me regardless.

- **[XXIIVV](https://wiki.xxiivv.com/site/) -- [Devine Lu Linvega](https://merveilles.town/@neauoire)** \
  a personal wiki made by one half of [Hundred Rabbits](https://100r.co). (50 rabbits?)

- **[Build Your Own X](https://github.com/codecrafters-io/build-your-own-x) -- [Sarup Banskota](https://github.com/sarupbanskota) and [Paul Kuruvilla](https://github.com/rohitpaulk)** \
  contains many tutorials to recreate various technologies from scratch.

- **[snaptoken](https://viewsourcecode.org/snaptoken) -- [Paige Ruten](https://viewsourcecode.org)** \
  at the moment it only contains a tutorial to recreate kilo, but it will have two other tutorials: one to write a small Lua interpreter from scratch, and another to make a garbage collector for C.

- **[rxi.github.io](https://rxi.github.io) -- [rxi](https://github.com/rxi)** \
  contains some write-ups for how their tools work, as well as some other interesting algorithms.

- **[Choose a License](https://choosealicense.com/) -- [GitHub, Inc.](https://github.com/github)** \
  a listing of licenses, their permissions, conditions and limitations, and a full template copy of each. it also explains what might happen if your repository doesn't have a license.

- **[How to Make a Rhythm Game](https://fizzd.notion.site/How-To-Make-A-Rhythm-Game-43d88e177da746e683afee494fdca3dc) -- [fizzd](https://x.com/7thbeat) from [7th Beat Games](https://7thbe.at)** \
  amazing set of resources to make a rhythm game that isn't just a Stepmania clone, but rather something more general. done in Unity, but it's language agnostic.

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
  - reorder cats once again
  - add category: "some tunez"
  - added so much music I'm not even going to bother listing it up
  - added "Choose a License", "Blit"
  
- 15/04/24
  - added "Make a Lisp"
  - added "nandgame"
  - added "stb"

- 16/04/24
  - added "6502 Instruction Set"

- 19/04/24
  - added "Lost In The Jungle Mist" by "Desolo Zantas"

- 21/04/24
  - added "Pop Culture" by Madeon and "You're Everything" by Georg Vogel
  - fixed a single spelling mistake in "This Side of Paradise" by Coyote Theory
  - added "OK" by Madeon
  - modified note for "You're Everything"
  - added "How to Make a Rhythm Game" by 7th Beat Games
  - added new category, "interesting videos", bound to split into different categories
  - added "one hit wonders (and their other songs)" by [@boogiehead](https://www.youtube.com/@boogieheadmusic)

- 22/04/24
  - correct description for "one hit wonders (and their other songs)" (it actually describes one-hit wonders with songs that are popular in other countries as well)

- 25/04/24
  - added "Borrow checking, RC, GC, and the Eleven (!) Other Memory Safety Approaches" and "Languages ∩ Architecture (Languages [intersect] Architecture)", both by Evan Ovadia.

- 27/04/24
  - added "CONNECT" by "KORAII"
  - added album links for some songs

- 01/05/24
  - added "Just for Fun. No, Really"
  - added "Max Bernstein", "Writing and Compiling a Lisp"
  - added "OCaml". yeah.
  - missed a single dot in jonesforth's author

- 14/05/24
  - added "EuclideanSpace"
  - move "Blit" from [infocomps](#infocomps) to [tinybins](#tinybins) // should I make a new category?
  - extend "EuclideanSpace" description

- 15/05/24
  - I am once again asking myself to alphabetically sort the catlinks
  - new category: "computer graphics"
  - added "Raytracing In One Weekend Series"
  - added "Flim", "IZ-US" and "Xtal" by Aphex Twin to [some tunez](#music)
  - added "Writing a compiler in Ruby, bottom up"
  - added "An Introduction to Shader Art Coding" and "Building Collision Simulations: An Introduction to Computer Graphics"

- 16/05/24
  - added "Performance optimizations for voxel graphics"
  - mistakenly merged changelog for 16/05/24 with that of 15/05/14; fixed
  - change "voxel engines" to "voxel rendering engines" in desc for "Performance optimizations for voxel graphics"
  - missed indentation for contents of log 16/05/24
  - added "Game Programming Patterns"

- 16/06/24
  - added Uiua
  - a single uppercase letter that isn't "I" in 16/05/24
  - added The Chainsmokers - Sick Boy (ONEDUO remix) by, well, ONEDUO, Whole by Chime and Adam Tell and a *lot* of music from Creo - turns out I do like Creo's discography, huh
  - none of the links in "some tunes" are ordered alphabetically and at this point I'm not going to bother so I just removed the alphabetical part
  - changed newline by dash in the change two changes above this one

- 17/06/24
  - added Tek It by Cafuné

- 26/06/24
  - removed rxi's name from the link to microui and changed the desc a bit
  - added nuklear and suit

- 17/09/24

  it has been a while

  - change link to Sol on Immediate Mode GUIs to the permanent one
  - added the video essay on IMGUIs by Casey Muratori
  - added "her", "this is what autumn feels like", "this is what space feels like" and "golden hour" by JVKE
  - added "Deep Dive" and "Without You" by Creo

- 18/09/24
  - fixed line break in changelog list above (markdown can be annoying sometimes)
  - added 2D Parametric Collision Detection and 2D Rigid Body Collision Response by Robert Fotino

- 14/10/24
  - added Zig's compiler internals by Mitchell Hashimoto, and the Zig language's page itself
  - extend Dearrow notice
  - added "A New Kind Of Love" by Frou Frou and "moment" by Vierre Cloud
  - fixed description for "Writing a compiler in Ruby, bottom up" (I didn't know it was self-hosted until like 10 chapters in)
  - ***absolute website redesign*** (jk, it's the links) ((which is the main part of the page so uhhh))
  - added From Nand to Tetris by Shimon Schocken and Noam Nisan 

- 16/10/24
  - I ate two categories in the index at the top of the page; they're back now
  - new category: [music resources](#musicres)
  - added Notes on Music Theory by Bad Diode and muted.io