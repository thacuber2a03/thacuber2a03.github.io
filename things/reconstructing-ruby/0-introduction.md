---
title: "Reconstructing Ruby: An Introduction"
permalink: /reconstructing-ruby/introduction
layout: default
---

# Reconstructing Ruby: An Introduction
#### *August 06, 2014*

Over the past few years, I've been interested in the design of programming languages. I paired up with [Caleb Thompson](https://web.archive.org/web/20220522231834/http://calebthompson.io/)<sup>arc.</sup> on a very opinionated programming language not too long ago. We wrote the whole language in Ruby and it was mostly an excercise in design and understanding how languages are constructed. We called the language "The Esoteric Order of Dagon", or "Dagon" for short, and you can see our work on [GitHub](https://github.com/halogenandtoast/dagon).

The culmination of that project and reading [Ruby Under a Microscope](https://patshaughnessy.net/ruby-under-a-microscope) paved the way for me wanting to try to implement Ruby, from scratch, using C. This presented some unique challenges as I don't have an extensive background in C, but what better way to learn it than to challenge myself with something exceedingly harder than my usual toy applications.

I initially started this process by trying to write a book, but I had never done that either. So on top of trying to learn C and the art of writing a programming language, I was also trying to learn [LaTeX](https://www.latex-project.org) and how to structure a technical book. This was a huge mistake, nothing slows your progress more than having a ton of things you have to learn all at once.

I've decided to slow my ambitions and focus on the important part of my adventure. Instead of writing a book, I've decided to break down the chapters I've already written into a series of blog posts describing the steps I've taken, but at the same time opening my work up to the community to get feedback and ideas. Afterwards I'll continue my work until I have a bare-bones implementation of Ruby's core (probably sans Threads, but who knows).

My plan is to release the first post today and follow up with a new post every few weeks for as long as I and the community remains interested.

**Fair warning:** I'm not an artist so it's likely I won't have many images to clarify things.

---

Next: [Our First Lexer](/reconstructing-ruby/our-first-lexer)

[Index](/reconstructing-ruby)
