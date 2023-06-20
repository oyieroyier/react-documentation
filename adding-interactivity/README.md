# Adding Interactivity

In React, data that changes over time is called state. You can add state to any component, and update it as needed.

## Responding to Events

Functions passed to event handlers must be referenced, not called. For example:

| passing a function (correct)     | calling a function (incorrect)     |
| -------------------------------- | ---------------------------------- |
| `<button onClick={handleClick}>	` | `<button onClick={handleClick()}>` |

- In the second example, the `()` at the end of `handleClick()` fires the function immediately during rendering, without any clicks.
- This is because JavaScript inside the JSX { and } executes right away.

When you write code inline, the same pitfall presents itself in a different way:

| passing a function (correct)            | calling a function (incorrect)    |
| --------------------------------------- | --------------------------------- |
| `<button onClick={() => alert('...')}>` | `<button onClick={alert('...')}>` |

Passing inline code like this won’t fire on click; it fires every time the component renders:

```jsx
// This alert fires when the component renders, not when clicked!
<button onClick={alert('You clicked me!')}>
```

If you want to define your event handler inline, wrap it in an anonymous function like so:

```jsx
<button onClick={() => alert('You clicked me!')}>
```
## Passing event handlers as props 