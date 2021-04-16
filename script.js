'use strict';

const score = document.querySelector('.score').innerHTML;
const secretNumber = Math.trunc(Math.random() * score + 1);
let actualScore = score;
let message = document.querySelector('.message').textContent;

const decreaseActualScore = () => {
	actualScore--;
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

const saveScore = (score) => {
	let highScore = document.querySelector('.highscore').innerHTML;
	if (score > highScore) {
		highScore = score;
		document.querySelector('.highscore').textContent = highScore;
	}
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
		saveScore(actualScore);
	} else if (guess !== secretNumber) {
		const message = guess > secretNumber ? 'Too High!' : 'Too Low!';
		messageText(message);
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
