// Buttons
var startButton = document.getElementById("start-button");
var highScoresButton = document.getElementById("high-scores-button");
var introPage = document.getElementById("welcome");

//event listener for start button
startButton.addEventListener("click", startGame);

//event listener for high score button
highScoresButton.addEventListener("click", highScores);

//function to start the game
function startGame() {
startButton.remove();
highScoresButton.remove();
introPage.remove();
console.log("hello"); 
};


function highScores() {
console.log("hello2"); 


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
