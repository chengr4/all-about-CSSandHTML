# All About CSS
# CSS

## Contents

+ [Position](#position)
+ [Display](#display)
+ [Pseudo Elements](#pseudo-elements)
+ [Media Queries](#media-queries)
+ [Overflow-y](#overflow-y)
+ [CSS Units](#css-units)
+ [Pseudo-classes](#pseudo-classes)
+ [References](#references)

## Position 

[^7] [^8]

### Values

`static`: The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties **have no effect**. This is the **default** value.

`relative`: The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements (因為不會影響其他 elements 所以會 overlapping).
> + 所以 relative = static + 能控制他的上下左右
> + 因為會脫離 document flow 所以其實不建議使用上下左右
> + 通常 relative 用於為 element 的 child 提供基準定位

`absolute`: The element is **removed from** the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its **closest positioned ancestor**, if any; otherwise, it is placed relative to the initial containing block. **Its final position is determined by the values of top, right, bottom, and left.**
> + 所以 absolute 常跟上下左右配合使用
> + 想將 element 固定在特定位置時非常實用
> + 當 ancestor 的 position 是 static == 沒有 position 給 child 的 absolute 定位

`fixed`: The element is **removed from** the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial containing block established by the **viewport**, except when one of its ancestors has a `transform`, `perspective`, or `filter` property set to something other than `none`. **Its final position is determined by the values of top, right, bottom, and left.**
> + 當螢幕 scroll up/down ， element 會跟著螢幕走
> + 所以常用於在固定螢幕的特定位置

`sticky`: `relative` + `fixed`

## Display

[^display-1]

### `<display-outside>` values

These keywords specify the element's outer display type, which is essentially its role in flow layout

`block`: It is going to take up the entire width given to it (佔據整行)

`inline` (initial value): take up the minimum amount of space possible

### `<display-inside>` values

`flex`: See [Flex](#flex)

`grid`: See [Grid](#grid)

### `<display-box>` values

`none`: Turns off the display of an element so that it has no effect on layout (the document is rendered as though the element did not exist). All descendant elements also have their display turned off. To have an element take up the space that it would normally take, but without actually rendering anything, use the visibility property instead.

### `<display-legacy>` values

CSS 2 used a single-keyword syntax for the display property, requiring separate keywords for block-level and inline-level variants of the same layout mode.

`inline-block`: 可以加長、高的 `inline`。It is equivalent to `inline flow-root`

### Global values

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

`inherit`: The `inherit` keyword represents the computed value of the property on the element’s parent.

`initial`: The `initial` keyword represents the value specified as the property’s initial value. So basically, `display: initial; == display: inline;`

>  IE does not support `display: initial;`

`unset`: The `unset` keyword acts as either `inherit` or `initial`, depending on whether the property is inherited or not.

### Flex

> We got Main Axis and Cross Axis and Main Axis will always go the same direction as the layout

**For Container:**

```css
/* style main axis: justify */
justify-content: center;

/* style cross axis: align */
align-items: center;

/* align-content is only for using on multi-line flexline containers */
align-content: center;
```

> `justify-content` and `align-items` are used the most

**For Each Item:**

`flex-shrink`: 有關 item 內的縮排
`flex-grow`:
`flex-basis`: Tell flexbox where to start growing from
`order`: 決定順序 (not recommand)

```css
flex: 1 0 0; /* grow shrink basis */
```


#### flex-wrap

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap /* The flex items break into multiple lines */
```

### Grid

[^grid-1]

> Two Dimensions

```css
.grid-container {
  display: grid; /* first delcare */
  grid-template-columns: 2fr 1fr;
  grid-template-columns: repeat(4, 100px);
  gird-auto-rows: minmax(150px, auto);
  grid-template-rows: 200px, 150px;
  grid-row-gap: 20px;
}
```

```css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "sidebar content"
}

.grid-item-1 {
  grid-area: header;
}

.grid-item-2 {
  grid-area: sidebar;
}

.grid-item-3 {
  grid-area: content;
}
```

## Pseudo Elements

In CSS, `::before` creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content to an element with the **content** property. It is inline by default.

E.g.

```html
<q>Some quotes</q>, he said, <q>are better than none.</q>
```

```css
q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}

/* Result see [4] */
```

## Media Queries

Allow us to create CSS rules based on various parameters (viewport size, device type etc.)

Syntax:

```css
/* E.g. */
@media screen and (max-width: 800px) {}
```

## Overflow-y

[^6]

### Values

`visible`: Content is not clipped and may be rendered outside the padding box's top and bottom edges.

`auto`: Depends on the user agent. If content fits inside the padding box, it looks the same as `visible`, but still establishes a new block-formatting context. Desktop browsers provide scrollbars if content overflows.

## CSS Units

References: [12]

+ Pixel unit (px): (absolute)
+ percentage unit (%): (relative) based off of its parent size
+ rem: (relative) relative to "root" front size
+ em: (relative) relative to "parent" front size

## Pseudo-classes

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

### :root

https://developer.mozilla.org/en-US/docs/Web/CSS/:root

`:root` == selector `html`

`:root` can be useful for declaring global CSS variables

```css
/* Selects the root element of the document:
   <html> in the case of HTML */
:root {
  background: yellow;
}
```

## References

1. [CSS-Tricks](https://css-tricks.com/guides/)
2. [Academind; Bootstrap 4 Theme Customization (with Sass) | BOOTSTRAP 4 TUTORIAL (2018.3)](https://youtu.be/6Ovw43Dkp44)
3. [The Net Ninja; Responsive Web Design Tutorial #5 - Media Queries (2015.12)](https://youtu.be/5xzaGSYd7jM)
4. [Web Dev Simplified; Learn CSS Pseudo Elements In 8 Minutes (2019.12)](https://youtu.be/OtBpgtqrjyo)
5. https://developer.mozilla.org/en-US/docs/Web/CSS/::before
6. [Web Dev Simplified; Learn CSS Display Property In 4 Minutes (2019.12)](https://youtu.be/Qf-wVa9y9V4)
7. [CSS-wide keywords: initial, inherit and unset](https://www.w3.org/TR/css3-values/#common-keywords)
8. [What is use of 'initial' value in CSS?](https://stackoverflow.com/questions/18534561/what-is-use-of-initial-value-in-css)
10. [Web Dev Simplified; Learn CSS Units In 8 Minutes (2019.10)](https://youtu.be/-GR52czEd-0)
11. [Web Dev Simplified; Learn Flexbox in 15 Minutes
 (2018.9)](https://www.youtube.com/watch?v=fYq5PXgSsbE&t=0s)

[^6]: https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
[^7]: [Web Dev Simplified; Learn CSS Position In 9 Minutes (2019.4)](https://youtu.be/jx5jmI0UlXU)
[^8]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
[^display-1]: https://developer.mozilla.org/en-US/docs/Web/CSS/display
[^grid-1]: [Web Dev Simplufied; Learn CSS Grid in 20 Minutes (2018.10)](https://youtu.be/9zBsdzdE4sM)
