# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-qcezpoxy?file=index.html)

# Solution code(JavaScript)

## Project 1

```javascript
console.log("Navneet")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    switch(e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;

      case 'maroon':
        body.style.backgroundColor = 'maroon';
        break;

      case 'blue':
        body.style.backgroundColor = 'blue';
        break;

      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;

      default:
        console.log("Unknown color button clicked");
    }
  });
});
// using if 

//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'maroon') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });

```
## Project 2 

```javascript
const form = document.querySelector('form');
 /* this usecase will give you empty
 const height = parseInt(document.querySelector('#height').value)
 upper likhne se page load hote hi run ho jayega empty(NaN value ke sath)
 output hamesaha NaN hi ayega user input de ya nahi
 */
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
     bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  // CATEGORY
  if(bmi < 18.6){
    results.innerHTML =results.innerHTML + "-Underweight";
  }else if(bmi >= 18.6 && bmi <= 24.9){
    results.innerHTML =results.innerHTML + "-Normal weight";
  }else{
    results.innerHTML =results.innerHTML + "-Overweight";
  }
  results.innerHTML=`Your cataogry is ${category}`
});

```
## Project 3

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## Project 4

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```
## Project 5

```javascript

let input = document.getElementById("input-field");
let output = document.getElementById("output-field");

// UPPERCASE
document.querySelector(".uppercase").onclick = function () {
  output.innerText = input.value.toUpperCase();
};

// lowercase
document.querySelector(".lowercase").onclick = function () {
  output.innerText = input.value.toLowerCase();
};

// Capitalize (sirf pehle letter bada)
document.querySelector(".capitalize").onclick = function () {
  let text = input.value;
  output.innerText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Bold
document.querySelector(".bold").onclick = function () {
  output.innerHTML = "<b>" + input.value + "</b>";
};

// Italic
document.querySelector(".italic").onclick = function () {
  output.innerHTML = "<i>" + input.value + "</i>";
};

// Underline
document.querySelector(".underline").onclick = function () {
  output.innerHTML = "<u>" + input.value + "</u>";
};

```
