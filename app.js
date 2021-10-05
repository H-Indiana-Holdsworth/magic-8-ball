// import functions and grab DOM elements
import { answers } from './answers.js';

const button = document.getElementById('button');
const answerSpan = document.getElementById('answer-span');
// initialize global state

// set event listeners 
const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
};

button.addEventListener('click', () => {

    const randomIndex = getRandomNumber(answers.length);

    answerSpan.textContent = answers[randomIndex];

});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
