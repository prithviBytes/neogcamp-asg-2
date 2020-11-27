
const readlineSync = require("readline-sync");


var score = 0;

var username = readlineSync.question("Please enter your name \n");

console.log("Welcome "+username+" to DO YOU KNOW TANAY?"); 

var highScorers = [
  {
    name: "Tanay",
    points: 10
  },
  {
    name: "Akansha",
    points: 8
  }
]

console.log("Current LeaderBoard")
console.log("Name || Points")
console.log("---------------")
for(let i=0 ; i<highScorers.length; i++){
  console.log(highScorers[i].name+" "+highScorers[i].points)
}
console.log("---------------")

var questions = [
  {
    question: "Where does Tanay work? \n",
    answer: "Microsoft"
  },
  {
    question: "Where does Tanay live? \n",
    answer: "Bangalore"
  },
  {
    question: "What is Tanay's last name \n",
    answer: "Pratap"
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct!!!");
    score = score + 1;
  }else{
    console.log("Wrong")
  }

  console.log("Current Score "+score);
  console.log("=====================")
}


for( let i = 0 ; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}


highScorers.push({
  name: username,
  points: score
})

console.log("Current LeaderBoard")
console.log("Name || Points")
console.log("---------------")
for(let i=0 ; i<highScorers.length; i++){
  console.log(highScorers[i].name+" "+highScorers[i].points)
}
console.log("---------------")

