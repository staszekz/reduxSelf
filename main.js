const input = document.querySelector('#textInput');
const inputButton = document.querySelector('#inputButton');
const listButton = document.querySelector('#listButton');
const value = input.value;
const list = document.querySelector('#list');

const getValueInput = () => {
	let inputValue = input.value;
	// reduxStore.things.push(inputValue);
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

// redux
let reduxStore = {
	things: [],
};

const getState = element => reduxStore[element];

const addItem = (item, element) => {
	console.log('addItem', item, element);
	return (reduxStore = { ...reduxStore, [element]: [...reduxStore[element], item] });
};
