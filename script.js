'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
const highestScore = 20;
let score = highestScore;
let message = document.querySelector('.message').textContent;

const decreaseScore = () => {
	score--;
	document.querySelector('.score').textContent = score;
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

const changeScore = (score) => {
	document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (score <= 0) {
		return;
	}

	if (!guess) {
		messageText('No Number!');
	} else if (guess === secretNumber) {
		messageText('Correct!');
		changeNumberText(secretNumber);
		changeBackgroundColor('#60b347');
		changeNumberWidth('30rem');
	} else if (guess > secretNumber) {
		messageText('Too High!');
		decreaseScore();
	} else if (guess < secretNumber) {
		messageText('Too Low!');
		decreaseScore();
	}

	if (score <= 0) {
		document.querySelector('.message').textContent = 'You Lose';
	}
});

document.querySelector('.again').addEventListener('click', function () {
	messageText('Start guessing....');
});
