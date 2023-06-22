import { useRef } from 'react';
import Stopwatch from './Stopwatch';

const App = () => {
	let counterRef = useRef(0);

	function handleClick() {
		counterRef.current = counterRef.current + 1;
		alert(`You clicked ${counterRef.current} times`);
	}
	return (
		<>
			<button onClick={handleClick}>Click Me</button>
			<Stopwatch />
		</>
	);
};

export default App;
