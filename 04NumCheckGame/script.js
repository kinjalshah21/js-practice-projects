let randomValue = parseInt(Math.random() * 100 + 1);

const userInputField = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const remChance = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const restart = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numOfGuess = 1;

let playGame = true;

//if user is available to play the game.
if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInputField.value);
    validateGuessValue(guess);
  });
}

//validate if value lies between our range or it is true value or not.
function validateGuessValue(guessVal) {
  if (isNaN(guessVal)) {
    alert("Please enter a valid number.");
  } else if (guessVal < 1 || guessVal > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    if (numOfGuess >= 10) {
      displayGuessVal(guessVal);
      displayResultMessage(`Game over. The number was ${randomValue}`);
      endGame();
    } else {
      numOfGuess++;
      previousGuess.push(guessVal);
      displayGuessVal(guessVal);
      checkGuessValue(guessVal);
    }
  }
}

//check if guess matches the value

function checkGuessValue(guessVal) {
  if (guessVal == randomValue) {
    displayResultMessage(`Congratulations! You matched the number.`);
    endGame();
  } else if (guessVal < randomValue) {
    displayResultMessage(`Your guessed number is too low. Try Again!`);
  } else if (guessVal > randomValue) {
    displayResultMessage(`Your guessed number is too high. Try Again!`);
  }
}

//display guess, i.e. update in array of guess, remaining chances, empty guess field.

function displayGuessVal(guessVal) {
  userInputField.value = "";
  prevGuess.innerHTML += ` ${guessVal}`;
  remChance.innerHTML = 10 - numOfGuess;
}

//display result Message
function displayResultMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  playGame = false;
  userInputField.value = "";
  userInputField.setAttribute("disabled", "");
  p.classList.add("btn");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  restart.appendChild(p);
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function () {
    restart.removeChild(p);
    lowOrHi.innerHTML = "";
    randomValue = parseInt(Math.random() * 100 + 1);
    userInputField.removeAttribute("disabled");
    previousGuess = [];
    numOfGuess = 1;
    prevGuess.innerHTML = "";
    remChance.innerHTML = 10;
    playGame = true;
  });
}
