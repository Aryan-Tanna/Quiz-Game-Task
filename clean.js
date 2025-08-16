// =================================================================================
// --- 1. GLOBAL QUIZ CONTENT ---
// =================================================================================

const quizQuestions = [
    "Which company developed the Android operating system?", "Which HTML tag is used to display the largest heading?", "Which is the largest planet in our solar system?", "Which HTML element is used for inserting a line break?", "Who wrote the play 'Romeo and Juliet'?", "What does HTML stand for?", "Which shortcut is used to copy selected text on most computers?", "In JavaScript, `===` means:", "What is the capital city of Japan?", "Which property changes the text color in CSS?", "Who is known as the father of the World Wide Web?", "What does the 'src' attribute in the <img> tag specify?", "How many continents are there in the world?", "Which company developed the Android operating system?", "In computing, 'www' stands for:", "Which animal is known as the 'Ship of the Desert'?", "Which is the most popular web browser in the world (as of 2025)?", "What does 'URL' stand for?", "Which symbol is used for comments in CSS?", "Which programming language is used for adding interactivity to a web page?"
];

const options = [
    ["Microsoft", "Apple", "Google", "Samsung"], ["<heading>", "<h6>", "<h1>", "<head>"], ["Earth", "Jupiter", "Saturn", "Neptune"], ["<break>", "<br>", "<lb>", "<line>"], ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"], ["Assignment", "Equal in value and type", "Equal in value only", "Not equal"], ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], ["color", "text-color", "font-color", "bgcolor"], ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Linus Torvalds"], ["Image size", "Image style", "Image source file path", "Image title"], ["5", "6", "7", "8"], ["World Wide Web", "Wide World Web", "Web Wide World", "World Web Wide"], ["Horse", "Camel", "Donkey", "Elephant"], ["Firefox", "Safari", "Chrome", "Edge"], ["Uniform Resource Locator", "Universal Resource List", "Unique Reference Link", "Uniform Reference Locator"], ["// comment //", "/* comment */", "<!-- comment -->", "# comment #"], ["HTML", "CSS", "JavaScript", "SQL"]
];

const answers = [
    "Google", "<h1>", "Jupiter", "<br>", "William Shakespeare", "Hyper Text Markup Language", "Ctrl + C", "Equal in value and type", "Tokyo", "color", "Tim Berners-Lee", "Image source file path", "7", "World Wide Web", "Camel", "Chrome", "Uniform Resource Locator", "/* comment */", "JavaScript"
];

// =================================================================================
// --- 2. GLOBAL STATE VARIABLES ---
// =================================================================================

// Player and Score Data
var Name = [];
var Email = [];
var nOq = [];
var Scores = [];
var candidates = [];
var individual = [];
var userAns = [];
var userScore = [];
var score = 0;
var q_no = 0;
var lastq;

// Timer Variables
var TIME_LIMIT = 45;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

// DOM Elements
const timeDisplay = document.getElementById("timer-a");
const progressLine = document.querySelector('.progress-line-fg');
let lineLength;

// =================================================================================
// --- 3. CORE QUIZ LOGIC ---
// =================================================================================

/**
 * Main function to display the current question or end the quiz.
 */
function sequence() {
    startTimer();
    lastq = nOq[nOq.length - 1];
    $("#score").text(score);

    if (q_no < lastq) {
        // Display the question and options
        $("#test").text(quizQuestions[q_no]);
        $("#option_A").text(options[q_no][0]);
        $("#option_B").text(options[q_no][1]);
        $("#option_C").text(options[q_no][2]);
        $("#option_D").text(options[q_no][3]);
        $("#quest").text((q_no + 1) + "/" + lastq);
    } else {
        // End the quiz
        clearInterval(timerInterval);
        saveScore(score);
        var i = Scores.length - 1;
        individual.push(Name[i]);
        individual.push(Scores[i]);
        saveCandidate(individual);
        individual = [];
        sort();
        remove();

        // Display final score
        $(".options-grid").hide();
        $("#test")
            .html("Your Score is <br>" + score)
            .css({
                'font-size': '6rem',
                'background': 'linear-gradient(90deg, #3b82f6, #7ea6ecff)',
                '-webkit-background-clip': 'text',
                'background-clip': 'text',
                'color': 'transparent'
            });
    }
}

/**
 * Checks if the user's answer is correct and updates the score.
 */
function checkanswer() {
    if (answers[q_no] === userAns[q_no]) {
        playsound("correct");
        score += 30;
        $(document.body).addClass("correct"); // Apply to body for visual feedback
        setTimeout(() => { $(document.body).removeClass("correct"); }, 200);
    } else {
        playsound("incorrect");
        score -= 10;
        $(document.body).addClass("incorrect");
        setTimeout(() => { $(document.body).removeClass("incorrect"); }, 200);
    }
    q_no++;
    sequence();
}

// =================================================================================
// --- 4. TIMER LOGIC ---
// =================================================================================

/**
 * Resets the timer and progress bar for a new question.
 */
function reset() {
    clearInterval(timerInterval);
    timeLeft = TIME_LIMIT;
    timePassed = 0;
    timeDisplay.innerHTML = TIME_LIMIT;

    if (progressLine) {
        if (!lineLength) { // Calculate length only once
            lineLength = progressLine.getTotalLength();
        }
        progressLine.style.strokeDashoffset = 0;
    }
}

/**
 * Starts the countdown timer for the current question.
 */
function startTimer() {
    reset(); // Always reset before starting
    timerInterval = setInterval(() => {
        timePassed++;
        timeLeft = TIME_LIMIT - timePassed;
        timeDisplay.innerHTML = timeLeft;

        if (progressLine) {
            const offset = (timePassed / TIME_LIMIT) * lineLength;
            progressLine.style.strokeDashoffset = offset;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            userAns.push(""); // Log an empty answer for timeout
            q_no++;
            sequence();
            playsound("incorrect");
        }
    }, 1000);
}

// =================================================================================
// --- 5. DATA HANDLING & LOCAL STORAGE ---
// =================================================================================

function saveScore(newScore) {
    const existingScores = JSON.parse(localStorage.getItem('quizScores')) || [];
    existingScores.push(newScore);
    localStorage.setItem('quizScores', JSON.stringify(existingScores));
    Scores = existingScores; // Update global variable
    console.log("Scores have been saved:", Scores);
}

function saveCandidate(individual) {
    const existingCandi = JSON.parse(localStorage.getItem('quizCandidates')) || [];
    existingCandi.push(individual);
    localStorage.setItem('quizCandidates', JSON.stringify(existingCandi));
    candidates = existingCandi; // Update global variable
    console.log("Candidates have been saved:", candidates);
}

function sort() {
    // A more efficient way to sort the candidates array by score (descending)
    candidates.sort((a, b) => b[1] - a[1]);
    console.log("SORTED", candidates);
}

function remove(){
    for(i=0;i<Scores.length;i++){
      for(j=i+1;j<Scores.length;j++){
        if(candidates[i][0]===candidates[j][0]){
         candidates[j]=['----','0']
        }
      }
      
    }sort();}

// =================================================================================
// --- 6. UTILITY FUNCTIONS ---
// =================================================================================

function playsound(num) {
    var audio;
    switch (num) {
        case "321": audio = new Audio("./sounds/countdown.mp3"); break;
        case "correct": audio = new Audio("./sounds/correct.wav"); break;
        case "incorrect": audio = new Audio("./sounds/incorrect.wav"); break;
    }
    if (audio) {
        audio.play().catch(e => console.error("Audio play failed:", e));
    }
}

// =================================================================================
// --- 7. INITIALIZATION & EVENT LISTENERS ---
// =================================================================================
window.onload = function() {
  playsound("321");
  
};
/**
 * Main function to set up the quiz when the page loads.
 */
function main() {
    
    const userName = localStorage.getItem('quizUserNames');
    const userEmail = localStorage.getItem('quizUserEmails');
    const questionCount = localStorage.getItem('quizQuestionCounts');

    if (userName) {
        Name = JSON.parse(userName);
        Email = JSON.parse(userEmail);
        nOq = JSON.parse(questionCount);
    }
    console.log("Welcome:", Name);
    console.log("Number of Questions:", nOq);
    q_no = 0;
    sequence();
}

// Run this code when the document is fully loaded
$(document).ready(function() {

    // --- Countdown Animation ---
    const animatedText = $(".animated-text");
    const divrelay = $("#overlay");
    let i = 2;
    setTimeout(() => { divrelay.hide(); }, 3000);
    animatedText.on('animationiteration', () => {
        animatedText.text(i);
        i--;
    });

    // --- Quiz Start ---
    setTimeout(() => {
        $("#m").show();
        main(); // Start the main quiz logic after the countdown
    }, 3000);

    // --- Event Listeners ---
    $(".a").click(function() {
        reset();
        userAns.push($(this).text());
        checkanswer();
    });

    $("#skip").click(function() {
        reset();
        userAns.push("");
        playsound("incorrect");
        q_no++;
        sequence();
    });

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'x') {
            event.preventDefault();
            console.log('Local Storage cleared!');
            localStorage.clear();
        }
    });
});
