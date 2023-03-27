// Timer
var timerStart = 100;
var timerInterval;

// Buttons
var startButton = document.getElementById("start-button");
var highScoresButton = document.getElementById("high-scores-button");

// header stuff when you open the page
var introPage = document.getElementById("welcome");
var introText = document.getElementById("welcome-text");
var resultText = document.getElementById("result-text");

// display question
var question = document.getElementById("question");

// choice buttons for quiz
var btnA = document.getElementById('btnA');
var btnB = document.getElementById('btnB');
var btnC = document.getElementById('btnC');
var btnD = document.getElementById('btnD');

// hide/reveal the quiz part when you open the page
var quizAll = document.getElementById("quiz");


//event listener for start button
startButton.addEventListener("click", startQuiz);

//event listener for high score button
var highScoresList;
highScoresButton.addEventListener("click", highScores);

var id = 0;
//function to start the quiz
function startQuiz() {
    
quizAll.style.display = "block";
introPage.style.display = 'none';
introText.style.display = "none";
id = 0
console.log("Pressed Start Quiz"); 
askQuestion(id);
return
};

function finishQuiz() {
    
    introPage.style.display = 'block';
    quizAll.style.display = "none";
    resultText.style.display = "block";
    console.log("Pressed Finish Quiz"); 
    };

function highScores() {
console.log("Pressed High Scores"); 


};

// The questions 
var quizQuestions = [{
    id: 0,
    q: "Commonly used data types do NOT include:",
    a: [{ text: "strings", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "alerts", isCorrect: true },
        { text: "numbers", isCorrect: false }
    ]

},
{
    id: 1,
    q: "The condition of an if/else statement is enclosed within ______.",
    a: [{ text: "quotes", isCorrect: false },
        { text: "curly brackets", isCorrect: false },
        { text: "parentheses", isCorrect: true },
        { text: "square brackets", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Arrays in Javascript can be used to store ______.",
    a: [{ text: "numbers and strings", isCorrect: false },
        { text: "other arrays", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "all of the above", isCorrect: true }
    ]

},
{
    id: 3,
    q: "String values must be enclosed within ______ when being assigned to variables.",
    a: [{ text: "quotes", isCorrect: true },
        { text: "curly brackets", isCorrect: false },
        { text: "commas", isCorrect: false },
        { text: "parenthesis", isCorrect: false }
    ]

},
{
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [{ text: "Javascript", isCorrect: false },
        { text: "terminal/bash", isCorrect: false },
        { text: "for loops", isCorrect: false },
        { text: "console.log", isCorrect: true }
    ]

},
{
    id: 5,
    q: "",
    a: [{ text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
    ]

}
]

function askQuestion(id){
question.innerText = quizQuestions[id].q;
btnA.innerText = quizQuestions[id].a[0].text
btnB.innerText = quizQuestions[id].a[1].text
btnC.innerText = quizQuestions[id].a[2].text
btnD.innerText = quizQuestions[id].a[3].text

btnA.value = quizQuestions[id].a[0].isCorrect;
btnB.value = quizQuestions[id].a[1].isCorrect;
btnC.value = quizQuestions[id].a[2].isCorrect;
btnD.value = quizQuestions[id].a[3].isCorrect;
}
//The value the user chooses
var myAnswer = ""

// event listeners for answers
btnA.addEventListener("click", () => {
    myAnswer = btnA.value
   
   
    if (myAnswer == "true" && id < 5) {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("true")
    }
    
    if (myAnswer == "false" && id < 5) {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("false")
    }
    if (id == 5){
        console.log("end result");
        finishQuiz();
    }
})
btnB.addEventListener("click", () => {
    myAnswer = btnB.value
    if (myAnswer == "true") {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("true")
    }
    
if (myAnswer == "false") {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("false")
    }
    if (id == 5){
        console.log("end result");
        finishQuiz();
    }

})
btnC.addEventListener("click", () => {
    myAnswer = btnC.value
    if (myAnswer == "true") {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("true")
    }
    
if (myAnswer == "false") {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("false")
    }
    if (id == 5){
        console.log("end result");
        finishQuiz();
    }

})
btnD.addEventListener("click", () => {
    myAnswer = btnD.value

    if (myAnswer == "true") {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("true")
    }
    
if (myAnswer == "false") {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("false")
    }
    if (id == 5){
        console.log("end result");
        finishQuiz();
    }
})


