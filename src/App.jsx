import {observable, action} from 'mobx';

export default function App () {
	const state = observable({
		randomNumber: 0
	});

	const updateNumber = action(() => {
		state.randomNumber = Math.random();
		console.log(state.randomNumber);
	});

	setInterval(() => {
		console.log('interval!');
		updateNumber();
	}, 1000);

	return (
		<div>{state.randomNumber}</div>
	);
}