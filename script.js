'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let message = document.querySelector('.message').textContent;

const decreaseScore = () => {
	score--;
	document.querySelector('.score').textContent = score;
};

const messageText = (text) => {
	document.querySelector('.message').textContent = text;
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
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
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
