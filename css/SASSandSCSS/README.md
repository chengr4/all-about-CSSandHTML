# SASS and SCSS

## `&`

> References: [1]

It’s used when nesting.

When wanting to create a more specific selector, like an element that has **both** of two classes:

```css
<!-- css -->
.some-class.another-class { }
```

its SASS:

```sass
// sass
.some-class {
  &.another-class {}
}
```

## References

1. [Richard Finelli; The Sass Ampersand (2017.2)](https://css-tricks.com/the-sass-ampersand/)
