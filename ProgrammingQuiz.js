const readlineSync = require('readline-sync');
const chalk = require('chalk');

var ProgQuestions = [
  {
    "question": "Inside which HTML element do we put the JavaScript?",
    "answer": "<script>",
    "options":["<script>","<js>","<javascript>","<scripting>"]
  },
    {
    "question": "How do you declare a JavaScript variable?",
    "answer": "var carName;",
    "options":["v carName;","variable carName;","declare carName;","var carName;"]
  },
   {
    "question": "How do you create a function in JavaScript?",
    "answer": "function myFunction()",
    "options":[" function:myFunction()"," function = myFunction()","function myFunction()","myFunction()"]
  },
  {
    "question": "How do you call a function named myFunction?",
    "answer": "myFunction()",
    "options":["call function myFunction()","myFunction()","call myFunction()","myFunction() call"]
  },
  {
    "question": "What is the correct way to write a JavaScript array?",
    "answer": 'var colors = ["red", "green", "blue"]',
    "options":[
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      'var colors = "red", "green", "blue"',
      'var colors = ["red", "green", "blue"]',
      'var colors = (1:"red", 2:"green", 3:"blue")']
  }
];


var userName = readlineSync.question("what's your name? ");
console.log("welcome " + chalk.red(userName) + "!");

score=0;

var userDes = readlineSync.keyInYN('Think you know the programming basics better than anyone?')

if(userDes==true){
  console.log("\nAwesome! lets play a game.\n\nThe rules are simple\n"+chalk.yellow("For every right answer you gain a point & for every wrong answer you lose a point\n"))
  GameOn();

}else{
  console.log('Tough luck!')
}

function GameOn() {
  for(var i=0;i<ProgQuestions.length;i++)
  {
     var currentQues=ProgQuestions[i];
     play(currentQues.question,currentQues.answer,currentQues.options);
  }
}


function play(question,answer,options){
  console.log(question);
  console.log('Options:');
 let answer1 = readlineSync.keyInSelect(options, "What's your answer?");
 if(options[answer1]===answer){
    console.log(chalk.green("That is correct!\n"))
    score+=1;
    console.log("your score is: " + score);
 }else{
   console.log(chalk.red("oops! Incorrect answer!"));
   score-=1;
   console.log("your score is: " + score);
 }
}

