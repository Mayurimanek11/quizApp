//hide and show buttonx

const createQuiz = document.querySelector(".createQuiz");
const quizBox = document.querySelector(".quizBox");
const playQuiz = document.querySelector(".playQuiz");

createQuiz.onclick = () => {
  quizBox.classList.remove("inactive");
  createQuiz.classList.add("inactive");
  playQuiz.classList.add("inactive");
};

let quizForm = document.querySelector(".quiz-form");
let quizTitle = document.querySelector("#quizTitle");
let question = document.querySelector("#question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let options = document.querySelector(".options");

let answer = document.querySelector("#answer");


function addButton() {
  var dataEntered = retrieveData();
  console.log( dataEntered)

//   var readData = readingDatafromLocalStorage(dataEntered);
//   console.log("enter data type", typeof dataEntered);
}

function submitQuiz() 
{
  var dataEntered = retrieveData;
  var readData = readingDatafromLocalStorage(dataEntered);
  console.log("enter data type", typeof readData);
  

  

}

let quizObj = {};

function retrieveData() {
  var quizTitle = document.getElementById("quizTitle").value;
  var question = document.getElementById("question").value;
  var option1 = document.getElementById("option1").value;
  var option2 = document.getElementById("option2").value;
  var option3 = document.getElementById("option3").value;
  var option4 = document.getElementById("option4").value;
  var answer = document.getElementById("answer").value;
  console.log("option1 :: ", option1);
  let optionsArray = [];
  if (!quizObj["questions"]) {
    quizObj["questions"] = [];
  }
  if (!quizObj["quizTitle"]) {
    quizObj["quizTitle"] = quizTitle;
  }
  
  optionsArray = [question, option1, option2, option3, option4, answer];
  quizObj["questions"].push(optionsArray);
  console.log("quizObj : ", quizObj);

  document.getElementById("question").value = "";
  document.getElementById("option1").value = "";
  document.getElementById("option2").value = "";
  document.getElementById("option3").value = "";
  document.getElementById("option4").value = "";
  document.getElementById("answer").value = "";
  // var obj ={
  //     quiz:{
  //         [quizTitle]:[{
  //             'question' : question,
  //             'answer': answer,
  //             'options':[option1,option2,option3,option4]
  //         }]
  // }
  // var obj = JSON.stringify(quizObj);
  // console.log( obj,'test');
  // return obj
}



//add local Storeg

function readingDatafromLocalStorage(dataEntered)
 {
   const quizObjString = JSON.stringify(quizObj)
   var quizData = localStorage.setItem("quizData",quizObjString);
 }


//display question






  // localStorage.setItem("questions",quizObjString)
  // var quizTitle = localStorage.setItem("quizTitle", dataEntered);
  // var que = localStorage.setItem("question", dataEntered);
  // var op1 = localStorage.setItem("option1", dataEntered);
  // var op2 = localStorage.setItem("option2", dataEntered);
  // var op3 = localStorage.setItem("option3", dataEntered);
  // var op4 = localStorage.setItem("option4", dataEntered);
  // var ans = localStorage.setItem("answer", dataEntered);
  

