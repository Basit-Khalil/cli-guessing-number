#! usr/bin/env node

import inquirer from "inquirer";


// computer will generate a random number

//user input for guessing number

//compare user input with computer generate number and shows result

const randomNumber= Math.floor(Math.random() * 10 +1 );

const answer =await inquirer.prompt ([
 {
    name: "userGuessedNumber",
    type: "number" , 
    message: "Please Guess a Number Between 1-10",
 }
])

if (answer.userGuessedNumber === randomNumber){
    console.log ("Congratulations! You Guessed Right Number")
}
else {
    console.log ("You Guessed Wrong Number")
}