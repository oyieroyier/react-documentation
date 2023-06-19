import React from 'react';
import Clock from './challenges/FixABrokenClockChallenge';

export const Recipe = ({ drinkers }) => {
	return (
		<ol>
			<li>Boil {drinkers} cups of water.</li>
			<li>
				Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
			</li>
			<li>
				Add {0.5 * drinkers} cups of milk and to boil and sugar to taste.{' '}
			</li>
		</ol>
	);
};

let guest = 0;

export const Cup = () => {
	guest = guest + 1;
	// Bad practice: changing a preexisting variable!

	return <h2>Tea Cup for Guest number {guest}</h2>;
};

export default function App() {
	return (
		<main>
			<section className="pure-component">
				<h1>Spiced Chai Recipe</h1>
				<h2>For two</h2>
				<Recipe drinkers={2} />
				<h2>For a gathering</h2>
				<Recipe drinkers={4} />
			</section>

			<section className="impure-component">
				<Cup />
				<Cup />
				<Cup />
			</section>
		</main>
	);
}
