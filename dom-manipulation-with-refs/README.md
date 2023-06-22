# Manipulating the DOM with Refs

> React automatically updates the DOM to match your render output, so your components won’t often need to manipulate it.
> However, sometimes you might need access to the DOM elements managed by React — for example, **to focus a node**, **scroll to it**, or **measure its size and position**.
> _**There is no built-in way to do those things in React**_, so you will need **a ref to the DOM node**.
> [React Documentation](https://react.dev/learn/manipulating-the-dom-with-refs)

- To access a DOM node managed by React, first, import the useRef Hook:

```jsx
import { useRef } from 'react';
```

- Then, use it to declare a ref inside your component:

```jsx
const myRef = useRef(null);
```

- Finally, pass your ref as the `ref` attribute to the JSX tag for which you want to get the DOM node:

```jsx
<div ref={myRef}>
```

The `useRef` Hook returns an object with a single property called `current`.

- Initially, `myRef.current` will be null.
- When React creates a DOM node for this `<div>`, React will put a reference to this node into `myRef.current`.
- You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.

## Best practices for DOM manipulation with refs

- Refs are an escape hatch. You should only use them when you have to “step outside React”.
- Common examples of this include **managing focus**, **scroll position**, or **calling browser APIs that React does not expose**.
- If you stick to non-destructive actions like focusing and scrolling, you shouldn’t encounter any problems. However, if you try to modify the DOM manually, you can risk conflicting with the changes React is making.

- **Avoid changing DOM nodes managed by React. Modifying, adding children to, or removing children from elements that are managed by React can lead to inconsistent visual results** or crashes.

- However, this doesn’t mean that you can’t do it at all. **It requires caution**. You can safely modify parts of the DOM that React has no reason to update. For example, if some `<div>` is always empty in the JSX, React won’t have a reason to touch its children list. Therefore, it is safe to manually add or remove elements there.
