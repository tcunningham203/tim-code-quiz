# Javascript Quiz

## Description

This Javascript Quiz is a 5 question quiz that asks questions about the programming language Javascript. It was made using HTML, CSS, and Javascript. After the 5 questions have been answered, you can save a high score in local storage. You can find more specifics in the "Usage" section. 

## Table of Contents
- [Link](#link)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Development](#development)
- [Credits](#credits)

## Link

This is a link to the application.

https://tcunningham203.github.io/tim-code-quiz/

## Screenshot

This is what the application looks like when you open it.

![AppScreenshot1](/assets/screenshots/website-screenshot.png?raw=true "Screenshot of Deployed Application- Instruction Screen")

## Usage
When you load up the site, the instructions for the user are available in the description box.

As the instructions say, you have 70 seconds to answer the questions. You will recieve a 10 second penalty for each incorrect answer. At the end, your remaining time is your score. Because of these instructions, the "timer" in the top right is displayed as "score".

When you press the start button, the quiz timer begins counting down from 70. This timer is always displayed in the top right. 

If you answer a question correctly, it proceeds to the next question, and displays "That's right!" briefly in green text. The green text quickly fades away.

If you answer a question incorrectly, it still proceeds to the the next question, but 10 seconds are deducted from the time (your score) and "That's wrong!" is displayed briefly in red text. The red text quickly fades away.

If you have a score of 1 or higher, the quiz goes to the normal game over screen, which praises you and asks you to submit your initials. You are restricted to 3 characters when submitting. Press the "Enter" button to add the score to the high scores page. After pressing enter, you are automatically sent to the high scores page, which will display the top 5 scores. If a 6th score is submitted, the lowest of the 6 scores is removed. 

If you run out of time, the quiz goes to a special game over screen where you are told you have run out of time. You can press the button to try again, but you are not able to submit a score of 0.

At the top, there is a "High Scores" button. You can access this any time to view locally stored high scores. If you view them in the middle of a quiz, the quiz will be cancelled and you must start from the beginning. On the high scores page, you can "go back" to the first page, and you can "clear scores", erasing all scores in local storage.

The site utilizes media queries to change the size of text and buttons depending on the screen size. The "choice" buttons also change positions as well.

## Development
In this section, I'll briefly discuss some of the challenges and successes with the project, as well as goals for the future. 

This project took way longer than I expected it too. Each step was like pulling teeth. The only easy part was the CSS, which I enjoy doing. By far the most difficult part was the local storage. I had a lot of trouble getting the high scores to display, and even after that was done, I had trouble with the refreshing and erasing without refreshing the page. But in the end, I was able to figure it out. 

Going forward, if I could redo this project, I would have had each "page" be a seperate function or page, so that I could more easily keep track of which elements were hidden and shown. I would also consider implementing a way to randomize the questions, and adding more questions. 


## Credits
I used the mini project from "04-Web-Apis" to help understand the timer.

I used help from this website to figure out how to do the quiz. However, their quiz was pretty different from what the challenge called for, so I had to change a lot. I basically just kept the way they had all the questions as 1 variable but a lot of other stuff was changed.
https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/

I used this youtube video for help with the local storage. 
https://youtu.be/jfOv18lCMmw

