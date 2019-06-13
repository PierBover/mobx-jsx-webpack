import {observable} from 'mobx';

export default function App () {
	const state = observable({
		randomNumber: 0
	});

	const updateNumber = () => {
		state.randomNumber = Math.random();
	};

	setInterval(() => {
		console.log('interval!');
		updateNumber();
	}, 1000);

	return (
		<div>{(state.randomNumber)}</div>
	);
}