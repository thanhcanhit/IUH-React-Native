/* Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess! */
const score = document.querySelector('.score');
const input = document.querySelector('.guess-value');
const hint = document.querySelector('.hint');
const guess = document.querySelector('.guess');
const again = document.querySelector('.again');
let secretNumber = 0;
let scoreValue = 1000;

const initial = () => {
  secretNumber = Math.round(Math.random() * 100 )+ 1;
  score.innerHTML = `Score: ${scoreValue}`
  console.log(secretNumber)
}

const handleResult = (guessValue) => {
  if (guessValue == secretNumber) {
    alert(`Correct, your score is ${scoreValue}`)
    return
  } else if (guessValue < secretNumber) {
    hint.innerHTML = `Bigger than ${guessValue}`
  } else {
    hint.innerHTML = `Smaller than ${guessValue}`
  }
  scoreValue -= 50;
  score.innerHTML = `Score: ${scoreValue}`
}

guess.addEventListener("click", (e) => {
  const guessValue = input.value;
  handleResult(guessValue)
})

again.addEventListener("click", initial)