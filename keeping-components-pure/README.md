# Keeping Components Pure

> Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.
> [React Docs](https://react.dev/learn/keeping-components-pure)

## What purity is and how it helps you avoid bugs

A pure function is a function with the following characteristics:

- It minds its own business. It does not change any objects or variables that existed before it was called.
- Same inputs, same output. Given the same inputs, a pure function should always return the same result.

```js
function double(number) {
	return 2 * number;
}
double(1); // returns `2`
double(4); // returns `8`
// In the above example, double is a pure function. If you pass it 3, it will return 6. Always.
```

- React is designed around this concept.
- React assumes that every component you write is a pure function.
- This means that React components you write must always return the same JSX given the same inputs.

> Think of your components as recipes: if you follow them and don’t introduce new ingredients during the cooking process, you will get the same dish every time. That “dish” is the JSX that the component serves to React to render.
> [React Docs](https://react.dev/learn/keeping-components-pure)

## Side Effects: (un)intended consequences

- React’s rendering process must always be pure.
- Components should only return their JSX, and not change any objects or variables that existed before rendering as that would make them impure!

```jsx
let guest = 0;

export const Cup = () => {
	guest = guest + 1;
	// Bad practice: changing a preexisting variable!

	return <h2>Tea Cup for Guest number {guest}</h2>;
};

export default function App() {
	return (
		<section className="impure-component">
			<Cup />
			<Cup />
			<Cup />
		</section>
	);
}

/* BROWSER OUTPUT:
		=> Tea Cup for Guest number 2
		=> Tea Cup for Guest number 4
		=> Tea Cup for Guest number 6
*/
```

- This component is reading and writing a guest variable declared outside of it.
- Calling this component multiple times will produce different JSX!
- That is unpredictable behavior and would lead to bugs.
- We can fix this component by passing guest as a prop instead:

```jsx
export const Cup = ({ guest }) => {
	return <h2>Tea Cup for Guest number {guest}</h2>;
};

export default function App() {
	return (
		<section className="impure-component">
			<Cup guest={1} />
			<Cup guest={2} />
			<Cup guest={3} />
		</section>
	);
}

/* BROWSER OUTPUT:
		=> Tea Cup for Guest number 1
		=> Tea Cup for Guest number 2
		=> Tea Cup for Guest number 3
*/
```

## Detecting impure calculations with StrictMode

- React offers a “Strict Mode” in which it calls each component’s function twice during development.
- By calling the component functions twice, Strict Mode helps find components that break the purity rules.
- That is why the first impure component rendered `Guest number 2`, `Guest number 4` and `Guest number 6` instead of `Guest number 1`, `Guest number 2` and `Guest number 3`.

## Recap

A component must be pure, meaning:

1. It minds its own business. It should not change any objects or variables that existed before rendering.
2. Same inputs, same output. Given the same inputs, a component should always return the same JSX.
3. Rendering can happen at any time, so components should not depend on each others’ rendering sequence.
4. You should not mutate any of the inputs that your components use for rendering. That includes **`props`**, **`state`**, and **`context`**. To update the screen, “set” state instead of mutating preexisting objects.
5. Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.
6. Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.
