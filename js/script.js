// Timer
var timer;
var timerCount;
var timerInterval;
var timerElement = document.getElementById("timer");


// As mentioned in the readme, I used the miniproject for this module as a reference for how to create the timer.
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (id == 5 && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
            timerCount = 0;
            timerElement.textContent = timerCount;
        }
        // If the time goes into the negatives
        if (timerCount < 0) {

            // Clears interval
            clearInterval(timer);
            loseGame();
            timerCount = 0;
            timerElement.textContent = timerCount;
        }

    }, 1000);
}




// Buttons
var startButton = document.getElementById("start-button");
var highScoresButton = document.getElementById("high-scores-button");

// header stuff when you open the page
var introPage = document.getElementById("welcome");
var introText = document.getElementById("welcome-text");

//lose result
var loseText = document.getElementById("lose-text");

//result between questions
var yesText = document.getElementById("yes-text");
var noText = document.getElementById("no-text");

// display question
var question = document.getElementById("question");

// choice buttons for quiz
var btnA = document.getElementById('btnA');
var btnB = document.getElementById('btnB');
var btnC = document.getElementById('btnC');
var btnD = document.getElementById('btnD');



// hide/reveal the quiz part when you open the page
var quizAll = document.getElementById("quiz");

//high scores page
var highScoresTitle = document.getElementById('high-scores-page');
var btnBack = document.getElementById('btnBack');
btnBack.addEventListener("click", homePage);

//event listener for start button
startButton.addEventListener("click", startQuiz);

// clear high score button
var btnClear = document.getElementById("btnClear")
btnClear.addEventListener("click", clearScore);
function clearScore() {

    localStorage.clear();
    erase();
    highScoresPage()
    
}

//event listener for high score button
highScoresButton.addEventListener("click", highScoresPage);

function highScoresPage() {
    console.log("Pressed High Scores");
    introPage.style.display = 'none';
    highScoreField.style.display = "none";
    noText.style.display = "none"
    yesText.style.display = "none"
    quizAll.style.display = "none";
    loseText.style.display = "none";
    highScoresTitle.style.display = "block";
    clearInterval(timer);
    timerCount = 70;
    timerElement.textContent = timerCount;
    render();
};



function finishQuiz() {

    quizAll.style.display = "none";
    loseText.style.display = "none";
    highScoreField.style.display = "block";
    console.log("Pressed Finish Quiz");
};

//high score box stuff
var highScoreField = document.getElementById('input-box');




var textBox = document.getElementById('text-box');
textBox.addEventListener("keyup", () => {

    console.log(textBox.value);
    btnEnter.disabled = !textBox.value;


});

var highScores = JSON.parse(localStorage.getItem("high-scores-list")) || [];
var maxListSize = 5;

// var btnEnter = document.getElementById('btnEnter');
// btnEnter.addEventListener("click", saveScore);

saveScore = e => {
    console.log("pressed enter")
    e.preventDefault();
    console.log(timerElement.innerText)

    var score = {
        score: timerElement.innerText,
        name: textBox.value

    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5);
    localStorage.setItem("high-scores-list", JSON.stringify(highScores));
    console.log(score);
    highScoresPage()
}
var highScoresList = document.getElementById('high-scores-list');



highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} : ${score.score}</li>`;
    })
    .join("");


function render() {
    document.getElementById('high-scores-list').innerHTML = highScores
        .map(score => {
            return `<li class="high-score">${score.name} : ${score.score}</li>`;
        })
        .join("");
    localStorage.setItem("high-scores-list", JSON.stringify(highScores));
}
function erase() {
    highScores = [];
    localStorage.setItem("high-scores-list", JSON.stringify(highScores));
}


var id = 0;

//function to go back to the homepage
function homePage() {
    quizAll.style.display = "none";
    introPage.style.display = 'block';
    introText.style.display = "block";
    highScoreField.style.display = "none";
    loseText.style.display = "none";
    highScoresTitle.style.display = "none";
    console.log("Pressed Go Back");
}


//function to start the quiz
function startQuiz() {
    timerCount = 70;
    quizAll.style.display = "block";
    introPage.style.display = 'none';
    introText.style.display = "none";
    highScoreField.style.display = "none";
    loseText.style.display = "none";
    id = 0
    console.log("Pressed Start Quiz");
    askQuestion(id);
    startTimer()
};







function loseGame() {
    introPage.style.display = 'block';
    loseText.style.display = "block";
    quizAll.style.display = "none";
    console.log("You Ran Out Of Time!");
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

function askQuestion(id) {
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



// correct and wrong answer message fade

function yesTextFade() {
    yesText.style.display = "block"
    yesText.style.transition = 'none';
    yesText.style.opacity = '1';
    void yesText.offsetWidth;
    yesText.style.transition = 'opacity 1.5s';
    yesText.style.opacity = '0';

}

function noTextFade() {
    noText.style.display = "block"
    noText.style.transition = 'none';
    noText.style.opacity = '1';
    void noText.offsetWidth;
    noText.style.transition = 'opacity 1.5s';
    noText.style.opacity = '0';
}

// event listeners for answers
btnA.addEventListener("click", () => {
    myAnswer = btnA.value


    if (myAnswer == "true" && id < 5) {
        noText.style.display = "none"
        yesText.style.display = "none"
        id++;
        askQuestion(id);
        console.log(id);
        console.log("true")
        yesTextFade()
    }

    if (myAnswer == "false" && id < 5) {
        noText.style.display = "none"
        yesText.style.display = "none"
        timerCount = timerCount - 10
        id++;
        askQuestion(id);
        console.log(id);
        console.log("false")
        noTextFade()
    }
    if (id == 5) {
        console.log("end result");
        finishQuiz();
    }
})
btnB.addEventListener("click", () => {
    myAnswer = btnB.value
    if (myAnswer == "true" && id < 5) {
        noText.style.display = "none"
        yesText.style.display = "none"
        id++;
        askQuestion(id);
        console.log(id);
        console.log("true")
        yesTextFade()
    }

    if (myAnswer == "false" && id < 5) {
        noText.style.display = "none"
        yesText.style.display = "none"
        timerCount = timerCount - 10
        id++;
        askQuestion(id);
        console.log(id);
        console.log("false")
        noTextFade()
    }
    if (id == 5) {
        console.log("end result");
        finishQuiz();
    }

})
btnC.addEventListener("click", () => {
    myAnswer = btnC.value
    if (myAnswer == "true" && id < 5) {
        noText.style.display = "none"
        yesText.style.display = "none"
        id++;
        askQuestion(id);
        console.log(id);
        console.log("true")
        yesTextFade()
    }

    if (myAnswer == "false" && id < 5) {
        noText.style.display = "none"
        yesText.style.display = "none"
        timerCount = timerCount - 10
        id++;
        askQuestion(id);
        console.log(id);
        console.log("false")
        noTextFade()
    }
    if (id == 5) {
        console.log("end result");
        finishQuiz();
    }

})
btnD.addEventListener("click", () => {
    myAnswer = btnD.value

    if (myAnswer == "true" && id < 5) {
        noText.style.display = "none"
        yesText.style.display = "none"
        id++;
        askQuestion(id);
        console.log(id);
        console.log("true")
        yesTextFade()
    }

    if (myAnswer == "false" && id < 5) {
        noText.style.display = "none"
        yesText.style.display = "none"
        timerCount = timerCount - 10
        id++;
        askQuestion(id);
        console.log(id);
        console.log("false")
        noTextFade()
    }
    if (id == 5) {
        console.log("end result");
        finishQuiz();
    }
})


