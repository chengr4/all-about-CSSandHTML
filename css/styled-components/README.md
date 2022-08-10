# Styled Components

https://styled-components.com/

Allow us to write `CSS` in JS in a very elegant and reuseable way

> bubble is a tutorial repo [^tutor]

```javascript
import styled from "styled-components";

// inside styled.div are just pure CSS
export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`
```

- 自動產生 `className`
- 自動產生`<style />` 並插入 `<head />`
- Do at runtime

## When to use?

Want to encapsulate components and have everything in one place

## Cons

1. SSR Hydration issue (no experience yet) => server side and client side may have different `className`
2. Performance issue
    ```javascript
    const AnimateDiv = styled.div`
      transform: translateY(${props => props.y});
    `;
    ```
    頻繁的更新 `props.y` 會讓 `styled-components` 頻繁的解析 css => 效能變差
3. Bad support ESM (at 2022.08)

## References

1. 

[^tutor]: [Travery Media; Styled Components Crash Course & Project (2021.09)](https://youtu.be/02zO0hZmwnw)
