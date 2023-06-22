# useRef

> When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref. - [Referencing Values with Refs (React Documentation)](https://react.dev/learn/referencing-values-with-refs#differences-between-refs-and-state)

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

You can add a ref to your component by importing the useRef Hook from React:

```jsx
import { useRef } from 'react';
```

Inside your component, call the useRef Hook and pass the initial value that you want to reference as the only argument. For example, here is a ref to the value 0:

```jsx
const ref = useRef(0);
```

`useRef` returns an object like this:

```jsx
{
	current: 0; // The value you passed to useRef
}
```

You can access the current value of that ref through the `ref.current` property. This value is intentionally mutable, meaning you can both read and write to it.

> A ref is like a secret pocket of your component that React doesn’t track. For example, you can use refs to store timeout IDs, DOM elements, and other objects that don’t impact the component’s rendering output. - [React Documentation](https://react.dev/learn/escape-hatches#referencing-values-with-refs)

- When a piece of information is used for rendering, keep it in state.

- When a piece of information is only needed by event handlers behind the scenes and changing it doesn’t require a re-render, using a ref may be more efficient.

| refs                                                                                | state                                                                                                                     |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `useRef(initialValue)` returns `{ current: initialValue }`                          | `useState(initialValue)` returns the current value of a state variable and a state setter function ( `[value, setValue]`) |
| Doesn’t trigger re-render when you change it.                                       | Triggers re-render when you change it.                                                                                    |
| Mutable—you can modify and update current’s value outside of the rendering process. | “Immutable”—you must use the state setting function to modify state variables to queue a re-render.                       |
| You shouldn’t read (or write) the current value during rendering.                   | You can read state at any time. However, each render has its own snapshot of state which does not change.                 |

## Caveats:

1. You can mutate the `ref.current` property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.
   <br/>
2. When you change the `ref.current` property, **React does not re-render your component**. React is not aware of when you change it because a ref is a plain JavaScript object.
   <br/>
3. DO NOT write or read `ref.current` during rendering, **except for initialization**. This makes your component’s behavior unpredictable.
   <br/>
4. In Strict Mode, React will call your component function twice in order to help you find accidental impurities. Each ref object will be created twice, but one of the versions will be discarded. If your component function is pure (as it should be), this should not affect the behavior.

