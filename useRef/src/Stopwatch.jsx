import { useRef } from 'react';
import { useState } from 'react';

const Stopwatch = () => {
	/*
		You can combine refs and state in a single component.
		
		For example, let’s make a stopwatch that the user can start or stop by pressing a button.
		
		In order to display how much time has passed since the user pressed “Start”, you will need to keep track of when the Start button was pressed and what the current time is.
		
		This information is used for rendering, so you’ll keep it in state
	
	*/

	const [startTime, setStartTime] = useState(null);
	const [now, setNow] = useState(null);
	const intervalRef = useRef(null);

	// When the user presses “Start”, you’ll use setInterval in order to update the time every 10 milliseconds:

	function handleStart() {
		// Start Counting:
		setStartTime(Date.now());
		setNow(Date.now());

		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			// Update current time every 10 milliseconds
			setNow(Date.now());
		}, 10);
	}

	/*
		 When the “Stop” button is pressed, you need to cancel the existing interval so that it stops updating the now state variable.

		 You can do this by calling `clearInterval`, but you need to give it the interval ID that was previously returned by the setInterval call when the user pressed Start.

		You need to keep the interval ID somewhere.
		Since the interval ID is not used for rendering, you can keep it in a ref
	*/
	function handleStop() {
		clearInterval(intervalRef.current);
	}

	let secondsPassed = 0;

	if (startTime != null && now != null) {
		secondsPassed = (now - startTime) / 1000;
	}

	return (
		<>
			<h1>Time Passed {secondsPassed.toFixed(3)}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</>
	);
};

export default Stopwatch;
