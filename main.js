const quizQuestions = [
  "Which company developed the Android operating system?",
  "Which HTML tag is used to display the largest heading?",
  "Which is the largest planet in our solar system?",
  "Which HTML element is used for inserting a line break?",
  "Who wrote the play 'Romeo and Juliet'?",
  "What does HTML stand for?",
  "Which shortcut is used to copy selected text on most computers?",
  "In JavaScript, `===` means:",
  "What is the capital city of Japan?",
  "Which property changes the text color in CSS?",
  "Who is known as the father of the World Wide Web?",
  "What does the 'src' attribute in the <img> tag specify?",
  "How many continents are there in the world?",
  "Which company developed the Android operating system?",
  "In computing, 'www' stands for:",
  "Which animal is known as the 'Ship of the Desert'?",
  "Which is the most popular web browser in the world (as of 2025)?",
  "What does 'URL' stand for?",
  "Which symbol is used for comments in CSS?",
  "Which programming language is used for adding interactivity to a web page?"
];
const options = [
    
    ["Microsoft", "Apple", "Google", "Samsung"],
   
    ["<heading>", "<h6>", "<h1>", "<head>"],
    
    ["Earth", "Jupiter", "Saturn", "Neptune"],
    
    ["<break>", "<br>", "<lb>", "<line>"],
    
    ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    
    ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    
    ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    
    ["Assignment", "Equal in value and type", "Equal in value only", "Not equal"],

    ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    ["color", "text-color", "font-color", "bgcolor"],

    ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Linus Torvalds"],
    ["Image size", "Image style", "Image source file path", "Image title"],

    ["5", "6", "7", "8"],
    
    ["Microsoft", "Apple", "Google", "Samsung"],
    
    ["World Wide Web", "Wide World Web", "Web Wide World", "World Web Wide"],
    
    ["Horse", "Camel", "Donkey", "Elephant"],
   
    ["Firefox", "Safari", "Chrome", "Edge"],
    
    ["Uniform Resource Locator", "Universal Resource List", "Unique Reference Link", "Uniform Reference Locator"],
   
    ["// comment //", "/* comment */", "<!-- comment -->", "# comment #"],
 
    ["HTML", "CSS", "JavaScript", "SQL"]
];
const answers = [
  "Google",
  "<h1>",
  "Jupiter",
  "<br>",
  "William Shakespeare",
  "Hyper Text Markup Language",
  "Ctrl + C",
  "Equal in value and type",
  "Tokyo",
  "color",
  "Tim Berners-Lee",
  "Image source file path",
  "7",
  "Google",
  "World Wide Web",
  "Camel",
  "Chrome",
  "Uniform Resource Locator",
  "/* comment */",
  "JavaScript"
];
// 1. Find the animated element

const animatedText = document.querySelector(".animated-text")
const divrelay=document.getElementById("overlay")
var i=2

// 2. Listen for the 'animationend' event
setTimeout(()=>{divrelay.style.zIndex=-2000},3000);

animatedText.addEventListener('animationiteration', () => {
  // 3. When the animation is over, hide the element completely
 animatedText.innerHTML=i;
 i--;
});

 function playsound(num){
    var audio;
    switch(num){
        case "321": audio=new Audio("./sounds/countdown.mp3");audio.play();
        break;
        case "correct": audio=new Audio("sounds/correct.wav");audio.play();
        break;
        case "incorrect": audio=new Audio("sounds/incorrect.wav");audio.play();
        break;
      
    }
  }

/* For Circle:-
HTML=
<div class="timer-container a main-content">
        <!-- The number display for the countdown -->
        <span id="time-display">60</span>

        <!-- SVG element for the circular progress bar -->
        <svg class="timer-svg" viewBox="0 0 100 100">
            <!-- Define the gradient for the progress bar -->
            <defs>
                <linearGradient id="timer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#2196f3" />
                    <stop offset="100%" style="stop-color:#6a5acd" />
                </linearGradient>
            </defs>
            <!-- Background circle -->
            <circle class="timer-circle timer-circle-bg" cx="50" cy="50" r="45"></circle>
            <!-- Progress circle that will be animated -->
            <circle class="timer-circle timer-circle-progress" cx="50" cy="50" r="45"></circle>
        </svg>
    </div>
   
const TIME_LIMIT = 60; // Total time for the quiz in seconds
        let timePassed = 0;
        let timeLeft = TIME_LIMIT;
        let timerInterval = null;

        const timeDisplay = document.getElementById('a');
        const progressCircle = document.querySelector('.timer-circle-progress');

        // Calculate the circumference of the circle
        const circle = document.querySelector('.timer-circle-progress');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Set initial state for the progress circle
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
        startTimer();

        function startTimer() {
            timerInterval = setInterval(() => {
                // Increment the time passed
                timePassed++;
                timeLeft = TIME_LIMIT - timePassed;

                // Update the time display
                timeDisplay.textContent = timeLeft;

                // Update the progress circle
                const offset = circumference - (timeLeft / TIME_LIMIT) * circumference;
                progressCircle.style.strokeDashoffset = offset;

                // Check if time is up
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    timeDisplay.textContent = "0";
                    // Optional: Add a function to run when time is up
                    // onTimesUp(); 
                }
            }, 1000); // Run every second
        }*/
       
// --- Global Timer Variables ---
var TIME_LIMIT = 45; // Total time for the quiz in seconds
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

const timeDisplay = document.getElementById("timer-a");
const progressLine = document.querySelector('.progress-line-fg'); // Select the SVG line
let lineLength; // We will calculate this once

// --- Functions ---

function reset() {
    // Stop any existing timer
    clearInterval(timerInterval);

    // Reset time variables
    timeLeft = TIME_LIMIT;
    timePassed = 0;
    timeDisplay.innerHTML = TIME_LIMIT;

    // Reset the progress bar to be full
    if (progressLine) {
        lineLength = progressLine.getTotalLength();
        progressLine.style.strokeDashoffset = 0;
    }
}

function startTimer() {
    // Ensure everything is reset before starting
    reset();

    timerInterval = setInterval(() => {
        timePassed++;
        timeLeft = TIME_LIMIT - timePassed;
        timeDisplay.innerHTML = timeLeft;

        // Update the progress line animation
        if (progressLine) {
            const offset = (timePassed / TIME_LIMIT) * lineLength;
            progressLine.style.strokeDashoffset = offset;
        }

        // Check if time is up
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            userAns.push(""); // Assuming userAns is a global array
            q_no++; // Assuming q_no is a global variable
            sequence(); // Assuming sequence() is your function to show the next question
            playsound("incorrect");
        }
    }, 1000); // Run every second
}

// --- Initial Setup ---
// Call reset once when the page loads to set up the initial state
reset();
// Then, when your quiz is ready to begin (e.g., after the countdown), call:
// startTimer();
        // Start the timer automatically when the page loads
        

setTimeout(() => {
        $("#m").show();
        main(); // Start the main quiz logic after the countdown
    }, 3000);


var Name=[];
var email=[];
var no_q=[];

window.onload = function() {
  playsound("321");
  
};
  var Name=[]
  var Email=[]
  var nOq=[]
  var Scores=[]
  var lastq;
// No need for global arrays unless you plan to store multiple players' info
function main() {


  // Retrieve the saved data from localStorage
  const userName = localStorage.getItem('quizUserNames');
  const userEmail = localStorage.getItem('quizUserEmails');
  const questionCount = localStorage.getItem('quizQuestionCounts');
  
  if(userName){
    Name=JSON.parse(userName)
    Email=JSON.parse(userEmail)
    nOq=JSON.parse(questionCount)
    
  }
 console.log("Welcome:", Name);
  console.log("Email:", Email);
  console.log("Number of Questions:", nOq);
  console.log(Scores)
  q_no=0
 sequence();
}
document.addEventListener('keydown', function(event) {
  // Check if Ctrl and Shift are pressed along with a specific key (e.g., 'S')
  if (event.ctrlKey && event.shiftKey  && event.key.toLowerCase() === 'x') {
    event.preventDefault(); // Prevent default browser action (e.g., saving)
    console.log('Local Storage cleared!');
    localStorage.clear();
    // Add your custom logic here
  }
});
  
  
  var userAns=[]
  
  var q_no=0;
  var score=0;
  var userScore=[]
  var candidates=[]
  var individual=[]
function sequence(){
  
  startTimer()
   lastq=nOq[nOq.length-1];
$("#score").text(score)
  if(q_no<lastq){
    
  $("#test").text(quizQuestions[q_no])
  $("#option_A").text(options[q_no][0])
  $("#option_B").text(options[q_no][1])
  $("#option_C").text(options[q_no][2])
  $("#option_D").text(options[q_no][3])
  
$("#quest").text(q_no+1+"/"+lastq)
  }
  else{
  saveScore(score)
  var i=Scores.length-1
    individual.push(Name[i])
    individual.push(Scores[i])
    clearInterval(timerInterval);
    saveCandidate(individual)
    individual=[]
    sort();
    remove();
  $(".options-grid").hide();
 $("#test")
    .html("Your Score is <br>" + score)
    .css({
        'font-size': '6rem',
        'background': 'linear-gradient(90deg, #3b82f6, #7ea6ecff)', // Your blue gradient
        '-webkit-background-clip': 'text', // For Safari/Chrome
        'background-clip': 'text',
        'color': 'transparent'
    });
  
  }
}
$("#skip").click(function (){
  reset();
userAns.push("")
playsound("incorrect");
q_no++;
sequence();
})
  $(".a").click(function (){
    reset();
   userAns.push(this.textContent)
   console.log(userAns)
   checkanswer();
   
  })
function checkanswer(){

if(answers[q_no]===userAns[q_no]){
  playsound("correct");
  score+=30;
  $(document).addClass("correct")
  setTimeout(()=>{
 $(document).removeClass("correct")
   },200)
}
else{
  playsound("incorrect");
  score-=10;
   $(document).addClass("incorrect")
   setTimeout(()=>{
 $(document).removeClass("incorrect")
   },200)
  
}
q_no++;
sequence();
}
function saveScore(newScore) {
    // 1. Get the existing scores from storage, or start with an empty array
    const existingScores = JSON.parse(localStorage.getItem('quizScores')) || [];

    // 2. Add the new score to the array
    existingScores.push(newScore);

    // 3. Save the updated array back to storage
    localStorage.setItem('quizScores', JSON.stringify(existingScores));
    const userScores=localStorage.getItem('quizScores')
    if(userScores){
    Scores=JSON.parse(userScores)}
    console.log(Scores)
    console.log("Scores have been saved!");
}
   function saveCandidate(individual) {
    // 1. Get the existing scores from storage, or start with an empty array
    const existingCandi = JSON.parse(localStorage.getItem('quizCandidates')) || [];

    // 2. Add the new score to the array
    existingCandi.push(individual);

    // 3. Save the updated array back to storage
    localStorage.setItem('quizCandidates', JSON.stringify(existingCandi));
    const Candis=localStorage.getItem('quizCandidates')
    if(Candis){
    candidates=JSON.parse(Candis)
  
  }
    console.log(candidates)
    console.log("Candis have been saved!");
}
  function sort(){
    for(i=0;i<Scores.length;i++){
      for(j=i+1;j<Scores.length;j++){
        if(candidates[i][1]<candidates[j][1]){
          var temp=candidates[i]
          candidates[i]=candidates[j]
          candidates[j]=temp
        }
      }
    }
    console.log("SORTED",candidates)
  }
   function remove(){
    for(i=0;i<Scores.length;i++){
      for(j=i+1;j<Scores.length;j++){
        if(candidates[i][0]===candidates[j][0]){
         candidates[j]=['----','0']
        }
      }
      
    }sort();}
