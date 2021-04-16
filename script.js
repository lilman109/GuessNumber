'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
const score = 20;
let actualScore = score;
let message = document.querySelector('.message').textContent;

const decreaseActualScore = () => {
	console.log('before', actualScore);
	actualScore--;
	console.log('after', actualScore);
	document.querySelector('.score').textContent = actualScore;
};

const messageText = (text) => {
	document.querySelector('.message').textContent = text;
};

const changeBackgroundColor = (rgb) => {
	document.querySelector('body').style.backgroundColor = rgb;
};

const changeNumberText = (text) => {
	document.querySelector('.number').textContent = text;
};

const changeNumberWidth = (width) => {
	document.querySelector('.number').style.width = width;
};

const initializeActualScore = () => {
	actualScore = score;
	document.querySelector('.score').textContent = actualScore;
};

const disableCheckButton = (disable) => {
	const checkButton = document.querySelector('.check');
	checkButton.disabled = disable;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		messageText('No Number!');
	} else if (guess === secretNumber) {
		messageText('Correct!');
		changeNumberText(secretNumber);
		changeBackgroundColor('#60b347');
		changeNumberWidth('30rem');
	} else if (guess > secretNumber) {
		messageText('Too High!');
		decreaseActualScore();
	} else if (guess < secretNumber) {
		messageText('Too Low!');
		decreaseActualScore();
	}

	if (actualScore <= 0) {
		disableCheckButton(true);
		document.querySelector('.message').textContent = 'You Lose';
	}
});

document.querySelector('.again').addEventListener('click', function () {
	messageText('Start guessing....');
	changeBackgroundColor('#222');
	changeNumberText('?');
	changeNumberWidth('15rem');
	initializeActualScore();
	disableCheckButton(false);
	document.querySelector('.guess').value = '';
});
