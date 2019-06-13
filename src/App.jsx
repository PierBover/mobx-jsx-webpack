import {observable} from 'mobx';

export default function App () {
	const state = observable({
		randomNumber: 0
	});

	setInterval(() => {
		state.randomNumber = Math.random();
		console.log('interval!', state.randomNumber);
	}, 1000);

	return (
		<div>{String(state.randomNumber)}</div>
	);
}