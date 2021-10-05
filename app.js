// import functions and grab DOM elements
import { answers } from './answers.js';

const resetButton = document.getElementById('reset-button');
const button = document.getElementById('button');
const answerSpan = document.getElementById('answer-span');
let userInput = document.getElementById('user-input');

// initialize global state

// set event listeners 
const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
};

button.addEventListener('click', () => {

    const randomIndex = getRandomNumber(answers.length);

    answerSpan.textContent = answers[randomIndex];

    button.disabled = true;

});

resetButton.addEventListener('click', () => {
  
    button.disabled = false;

    answerSpan.textContent = '';

    userInput.value = '';    
  
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
