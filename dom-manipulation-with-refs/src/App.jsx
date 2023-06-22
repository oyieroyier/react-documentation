import { useRef, useEffect } from 'react';

const App = () => {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<>
			<div className="form__group field">
				<input
					type="input"
					className="form__field"
					placeholder="Name"
					ref={inputRef}
				/>
				<label for="name" className="form__label">
					Name
				</label>
			</div>
		</>
	);
};

export default App;
