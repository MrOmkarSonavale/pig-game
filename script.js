'use strict';

const player = document.querySelector('.player');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const currentScore = document.querySelector('.current-score');
// const currentLabel = document.querySelector('.current-label');
const btnClick = document.querySelector('.btn');
const namePlayerZero = document.querySelector('#name--0');
const nameScoreZero = document.querySelector('#score--0');
const nameScoreOne = document.querySelector('#score--1');
const namePlayerOne = document.querySelector('#name--1');
const currentPlayerZero = document.querySelector('#current--0');
const currentPlayerOne = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');


let playing = true;
const scores = [0, 0];
let activePlayer = 0;
let currentScorePlayerZero = 0;
let currentScorePlayerOne = 0;
nameScoreZero.textContent = 0;
nameScoreOne.textContent = 0;
dice.classList.add('hidden');



const swithPlayer = function () {

	activePlayer = activePlayer === 0 ? 1 : 0;
	activePlayer === 1 ? currentPlayerZero.textContent = currentScorePlayerZero = 0 : currentPlayerOne.textContent = currentScorePlayerOne = 0;
	playerZero.classList.toggle('player--active');
	playerOne.classList.toggle('player--active');
	// console.log(currentScorePlayer);
	// currentPlayerOne.textContent = currentScorePlayer;

};

const playerGame = function () {
	if (playing) {
		dice.classList.remove('hidden');
		const randomRoll = Math.trunc(Math.random() * 6 + 1);
		// console.log(randomRoll);
		dice.src = `images/dice-${randomRoll}.png`;

		if (randomRoll === 1) {
			swithPlayer();

		} else {
			activePlayer === 1 ? currentScorePlayerOne += randomRoll : currentScorePlayerZero += randomRoll;
			// currentScorePlayer += randomRoll;
			// console.log(activePlayer);
			// console.log(currentScorePlayer);
			document.getElementById(`current--${activePlayer}`).textContent = `${activePlayer == 1 ? currentScorePlayerOne : currentScorePlayerZero} `;
		}
	};
}

btnRoll.addEventListener('click', playerGame)

const holdFunction = function () {
	if (playing) {
		scores[0] += currentScorePlayerZero;
		scores[1] += currentScorePlayerOne;
		document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
		// console.log(activePlayer);
		if (scores[activePlayer] >= 15) {
			playing = false
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			dice.classList.add('hidden');
			btn.classList.add('hidden');
			// btn--hold.classList.add('hidden');
			currentPlayerOne.textContent = currentPlayerZero.textContent = 0;

		} else {
			swithPlayer();
		}
	};
}
btnHold.addEventListener('click', holdFunction)



btnNew.addEventListener('click', function () {
	playing = true;
	if (playing) {
		document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
		currentPlayerOne.textContent = currentPlayerZero.textContent = 0;
		nameScoreZero.textContent = 0;
		nameScoreOne.textContent = 0;
		currentScorePlayerOne = 0;
		currentScorePlayerZero = 0;
		activePlayer = 0;
	}
});