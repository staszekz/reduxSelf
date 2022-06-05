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

const getValueInput = () => {
	let inputValue = input.value;
	addItem(inputValue, 'things');
	input.value = '';
};

const printReduxValues = () => {
	list.innerHTML = reduxStore.things.map(item => `<li>${item}</li>`);
};
inputButton.addEventListener('click', () => getValueInput());
listButton.addEventListener('click', () => {
	console.log(getState('things'));
	printReduxValues();
});

const getState = element => reduxStore[element];

const addItem = (item, element) => {
	return (reduxStore = { ...reduxStore, [element]: [...reduxStore[element], item] });
};

// counter
const result = document.querySelector('#result');
const counterButtonIncrement = document.querySelector('#counterButtonIncrement');
const counterButtonDecrement = document.querySelector('#counterButtonDecrement');
const resetButton = document.querySelector('#resetButton');
counterButtonIncrement.addEventListener('click', () => increment());
counterButtonDecrement.addEventListener('click', () => decrement());
resetButton.addEventListener('click', () => reset());

const increment = () => {
	reduxStore.result++;
	result.innerHTML = reduxStore.result;
};
const decrement = () => {
	reduxStore.result--;
	result.innerHTML = reduxStore.result;
};
const reset = () => {
	reduxStore.result = 0;
	result.innerHTML = reduxStore.result;
};

result.innerText = reduxStore.result;

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
	addItem: (item, element) => {
		return {
			type: 'ADD_ITEM',
			item,
			element,
		};
	},
};
