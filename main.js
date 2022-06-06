// redux
let reduxStore = {
	things: [],
	result: 0,
};

const input = document.querySelector('#textInput');
const inputButton = document.querySelector('#inputButton');
const listButton = document.querySelector('#listButton');
const value = input.value;
const list = document.querySelector('#list');
const result = document.querySelector('#result');
const counterButtonIncrement = document.querySelector('#counterButtonIncrement');
const counterButtonDecrement = document.querySelector('#counterButtonDecrement');
const resetButton = document.querySelector('#resetButton');

const actions = {
	increment: () => {
		return {
			type: 'INCREMENT',
		};
	},
	decrement: () => {
		return {
			type: 'DECREMENT',
		};
	},
	reset: () => {
		return {
			type: 'RESET',
		};
	},
	addItem: payload => {
		return {
			type: 'ADD_ITEM',
			payload,
		};
	},
};
counterButtonIncrement.addEventListener('click', () => {
	reducer(actions.increment());
	showResult();
});
counterButtonDecrement.addEventListener('click', () => {
	reducer(actions.decrement());
	showResult();
});
resetButton.addEventListener('click', () => {
	reducer(actions.reset());
	showResult();
});
inputButton.addEventListener('click', () => getValueInput());

listButton.addEventListener('click', () => {
	printReduxValues();
});
const reducer = action => {
	switch (action.type) {
		case 'INCREMENT':
			return (reduxStore = { ...reduxStore, result: reduxStore.result + 1 });
		case 'DECREMENT':
			return (reduxStore = { ...reduxStore, result: reduxStore.result - 1 });
		case 'RESET':
			return (reduxStore = { ...reduxStore, result: 0 });
		case 'ADD_ITEM':
			return (reduxStore = { ...reduxStore, things: [...reduxStore.things, action.payload] });
		default:
			return (reduxStore = reduxStore);
	}
};

// helper functions

function getState() {
	return reduxStore;
}

function printReduxValues() {
	list.innerHTML = getState().things.map(item => `<li>${item}</li>`);
}
function showResult() {
	result.innerHTML = getState().result;
}

function getValueInput() {
	const inputValue = input.value;
	reducer(actions.addItem(inputValue));
	input.value = '';
}

showResult();
