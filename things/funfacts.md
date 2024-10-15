---
title: cs fun facts
permalink: /csfunfacts
layout: default
---

# fun facts I found about anything compsci

this is just a listing of some facts I find fun about some of my favourite CS projects.

all of what's listed here should be taken with a grain of salt, as most things written here were based off of my own research, but you can always tell me at [this page's Github repository's issues](https://github.com/thacuber2a03/thacuber2a03.github.io), and I will gladly fix any errors.

[click here to go back home](https://thacuber2a03.github.io/).

currently there's only one fact:

## Lua's automatic types conversion

ok, so this one is a bit funny:

basically, Lua was originally made as a [replacement](https://www.lua.org/doc/hopl.pdf#section.4) for [Tcl](https://en.wikipedia.org/wiki/Tcl), LISP, Scheme and Python (which was in it's infancy at the time), with it's first version ([1.0](https://www.lua.org/versions.html#1.0)) internally available at PUC in 1993, and its version [1.1](https://www.lua.org/versions.html#1.1) made public and used for showcase as a programming language for extending applications in a seminar on software and hardware in the same place in 1994.

in [the paper written for that seminar](https://www.lua.org/semish94.html), the following snippet can be found:

> Lua provides some automatic type conversions. A string taking part in an arithmetic operation is converted to a number, if possible. Conversely, whenever a number is used when a string is expected, that number is converted to a string. This coercion is useful because it simplifies programs and avoids the need for explicit conversion functions.

Javascript was [originally released in 1995](https://en.wikipedia.org/wiki/JavaScript#Creation_at_Netscape) for the [Netscape web browser](https://en.wikipedia.org/wiki/Netscape_(web_browser)).
so, canonically, Lua had automatic type conversions before Javascript even _released_, and still has them _to this day!_
of course, [much more sanely](https://jsfuck.com/) than JavaScript.
