---
title: ui math
permalink: /uimath
layout: default
---

# ui math

due to the lack of resources I found about this _very specific_ topic, I decided to make one by and for myself.

please note that this site is just documenting what I have figured out so far about the topic. if you'd like to correct something, or help with some section of this page, please go to [the website's repo](https://github.com/thacuber2a03/thacuber2a03.github.io) and submit an issue or a pull request.

## layout and positioning

### box layout

box layout is the most common kind of layout. in it, UI widgets are placed within boxes that have the same size as space occupied by the widget.

in addition to the widget itself, boxes typically consist of three other parts, but you can omit any of them if needed:

- **margin**: the space between the border and the outer edge.
- **border**: the space between the margin and the padding.
- **padding**: the space between the border and the actual content.

...having an image will probably make it clearer:

![(pixel art image of the components of a box)](/assets/uimath/layoutparts.png)

> is it hypocritical of me to talk about UI when I drew this in less than 5 minutes while caring as little as possible about the placement of anything in it?
>
> my site's design doesn't help me either, but honestly, I don't really care. I'm a game programmer, not an UI designer.
>
> until I have some free time to use a proper UI editor, or even better, to _program_ an example, all other images will also follow this pattern.

because of this, the total size of a box, for both the x and y extents, can be calculated as such:

```c
int boxW = (xPadding + xBorder + xMargin)*2 + contentW;
```

the x-coordinate can then be increased by this amount to get the x-coordinate of the next box's top-left corner.

> for the people who use xy-pairs drawing functions, sorry

if you want to simulate simple and stupid spacing for your widgets without this complicated system, it's enough to just add the amount you want to pad by to the x-coordinate, and subtract _twice_ as much from the width. if you subtracted the padding from the width only once, the rectangle's right border would be _juuuuust_ touching the right border of the enclosing container.

boxes can also be placed relative to their parent, such as next to the left border, at the middle, or just before the right border of the parent.

- **left border:** this case kind of solves itself. if your environment uses x and y positions to refer to one of the shape's corners, you already have this working; just drawing the box in-place will suffice.

    > ![(pixel art image about locating a box in the left border of its parent)](/assets/uimath/leftborder.png)

- **right border:** to calculate this, subtract the size of the box from the size of the parent. this amount is how many pixels to offset the box.

    > ![(pixel art image about locating a box in the right border of its parent)](/assets/uimath/rightborder.png)

    ```c
    int rightX = boxX + (parentW - boxW);
    ```

- **total center:** this case is slightly more complicated but not by much. it’s similar to the right border case, but you subtract half of the box's size from half of the parent's size:

    > ![(pixel art image about locating a box in the center of its parent)](/assets/uimath/centerbox.png)

    ```c
    int centerX = boxX + (parentW / 2 - boxW / 2);
    // or, alternatively,
    int centerX = boxX + (parentW - boxW) / 2;
    ```

for the case where you have multiple boxes you want to fit within a container, the easiest solution I can think of is to sum up the widths of all the boxes and divide that by the width of the parent container. then, when drawing, adjust each child's width by this ratio.

this is essentially adjusting the widths by the mean of all the children's widths with respect to the parent.

```c
int childrenWidthSum = 0;

for (int i = 0; i < numChildren; i++)
    childrenWidthSum += childrenWidths[i];

float widthRatio = (float)childrenWidthSum / parentWidth;

int currentX = 0;
for (i = 0; i < numChildren; i++)
{
    int scaledWidth = (float)childrenWidths[i] / widthRatio;

    int res = button(currentX, y, scaledWidth, h);
    currentX += scaledWidth;
    // do something with button()'s result
}
```

> I would show an example image for this but it'd be really complicated to show in a way that makes sense, assuming the other images did make sense in the first place.
>
> I do however have a [p5.js example](https://editor.p5js.org/thacuber2a03/sketches/1zbVh-XWn).
>
> also, [I really like IMGUIs](/things/bookmarks.md#imgui).

this entire section has mostly talked about the placement of widgets in the X axis, but the nice thing about this is that all the math is exactly the same for both axes. so, yeah, you can go "Find and Replace" your way through these snippets and switch all `x`s to `y`s, or even better (worse), all `x`s to `z`s! :)

## TODO

- grid layout
- proportional scrollbars and proportional scrolling

## changelog

```
date format: dd/mm/yyyy
```

- 17/09/2024:
    - initial release