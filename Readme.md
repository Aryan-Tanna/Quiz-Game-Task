# 🧠 Exétasi.QUIZO - A Dynamic Web-Based Quiz Game

![Exétasi.QUIZO Showcase](https://placehold.co/800x400/0f172a/90b7f9?text=Exétasi.QUIZO)

Welcome to **Exétasi.QUIZO**, a sleek and interactive quiz application designed to test your knowledge with a modern, engaging user experience. Built with core web technologies, this project showcases dynamic animations, persistent leaderboards, and a polished, futuristic design.

---

## ✨ Features

* **Animated UI:** A fully animated interface, from a "3, 2, 1" countdown to glowing, responsive buttons and a cinematic final score display.
* **Dynamic Timer & Progress Bar:** Each question is accompanied by a 45-second timer with a smooth SVG progress bar, adding a sense of urgency.
* **Persistent Leaderboard:** Player names and scores are saved to the browser's `localStorage`, creating a high-score list that persists between sessions.
* **Interactive Feedback:** Instant visual and audio feedback for correct and incorrect answers, including a subtle "shake" animation for wrong choices.
* **Glassmorphism Design:** A modern "glass" effect on UI elements, making them float over a beautiful, animated gradient background.
* **Responsive Layout:** The interface is fully responsive, providing a seamless experience on desktops, tablets, and mobile devices.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You just need a modern web browser that supports HTML5, CSS3, and JavaScript.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Aryan-Tanna/Quiz-Game-Task.git](https://github.com/Aryan-Tanna/Quiz-Game-Task.git)
    ```
2.  **Next, jump into the project folder!**
    ```sh
    cd brainiac-quiz
    ```
3.  **Set up the sounds (Optional):**
    Create a `sounds` folder in the root directory and add the following files for the audio feedback to work:
    * `countdown.mp3`
    * `correct.wav`
    * `incorrect.wav`
4.  **Open the application:**
    Simply open the `index.html` file in your web browser to start the quiz.

---

## 🎮 How to Play

1.  **Enter Your Details:** Start by entering your name and email, and select the number of questions you'd like to answer.
2.  **Answer the Questions:** After a brief countdown, the quiz will begin. Select the best answer for each question before the timer runs out.
3.  **Score Points:**
    * **Correct Answer:** +30 points
    * **Incorrect Answer / Timeout:** -10 points
4.  **View Your Score:** Once you've completed all the questions, your final score will be displayed and saved to the leaderboard.

> **Pro Tip:** You can clear the local storage and reset the leaderboard by pressing `Ctrl + Shift + X`.

---

## 🛠️ Technical Details

This project was built using:

* **HTML5:** For the core structure and content.
* **CSS3:** For all styling, including advanced features like `keyframes` animations, `background-clip: text` for gradient text, and a responsive layout with Flexbox.
* **JavaScript (with jQuery):** For all game logic, including:
    * DOM manipulation to display questions and update stats.
    * Event handling for user interactions.
    * Managing the countdown timer with `setInterval`.
    * Saving and retrieving data from `localStorage` to manage the leaderboard.

---
