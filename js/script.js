// Buttons
var startButton = document.getElementById("start-button");
var highScoresButton = document.getElementById("high-scores-button");

// instructions when you open the page
var introPage = document.getElementById("welcome");

// display question
var question = document.getElementById("question");

// choice buttons for quiz
var btnA = document.getElementById('btnA')
var btnB = document.getElementById('btnB')
var btnC = document.getElementById('btnC')
var btnD = document.getElementById('btnD')

// hide/reveal the quiz part when you open the page
var quizAll = document.getElementById("quiz");

//event listener for start button
startButton.addEventListener("click", startQuiz);

//event listener for high score button
highScoresButton.addEventListener("click", highScores);

//function to start the quiz
function startQuiz() {
startButton.remove();
highScoresButton.remove();
quizAll.style.display = "block";
introPage.remove();
console.log("Pressed Start Quiz"); 
var id = 0
askQuestion(id);
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

//The value the user chooses
var myAnswer = ""

// event listeners for answers
btnA.addEventListener("click", () => {
    myAnswer = btnA.value
    if (myAnswer == true) {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("test")
    }
    

})
btnB.addEventListener("click", () => {
    myAnswer = btnB.value
    if (myAnswer == true) {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("test")
    }


})
btnC.addEventListener("click", () => {
    myAnswer = btnC.value
    if (myAnswer == true) {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("test")
    }


})
btnD.addEventListener("click", () => {
    myAnswer = btnD.value

    if (myAnswer == true) {
        id++;
        askQuestion(id);
        console.log(id);
        console.log("test")
    }

})


}