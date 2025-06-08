// Simple Math Quiz
function startMathQuiz() {
    const questions = [
        { q: "5 + 3 =", a: 8 },
        { q: "2 + 6 =", a: 8 },
        { q: "9 - 4 =", a: 5 }
    ];
    let quizHTML = '';
    questions.forEach((item, idx) => {
        quizHTML += `<label>${item.q} <input type="number" id="answer${idx}"></label><br>`;
    });
    quizHTML += `<button onclick="checkMathQuiz()">Check Answers</button>`;
    document.getElementById('math-quiz').innerHTML = quizHTML;
    window.mathQuestions = questions; // Store for checking
}

function checkMathQuiz() {
    let correct = 0;
    window.mathQuestions.forEach((item, idx) => {
        const userAns = parseInt(document.getElementById(`answer${idx}`).value);
        if (userAns === item.a) correct++;
    });
    document.getElementById('math-quiz').innerHTML += `<p>You got ${correct} out of ${window.mathQuestions.length} correct!</p>`;
}

// Simple Story
function showStory() {
    const story = `
    <b>The Clever Rabbit</b><br>
    Once there was a clever rabbit who saved his friends from a hungry lion by using his wits.<br>
    <i>Moral: Think before you act!</i>
    `;
    document.getElementById('story').innerHTML = story;
}

// Drawing Board
const canvas = document.getElementById('drawCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.onmousedown = () => drawing = true;
    canvas.onmouseup = () => drawing = false;
    canvas.onmouseleave = () => drawing = false;
    canvas.onmousemove = (e) => {
        if (!drawing) return;
        const rect = canvas.getBoundingClientRect();
        ctx.fillStyle = "#ff6f61";
        ctx.beginPath();
        ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 3, 0, 2 * Math.PI);
        ctx.fill();
    };
}

function clearCanvas() {
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// Simple Memory Game placeholder
function playGame() {
    document.getElementById('game-area').innerHTML = "Game coming soon! (You can add a simple memory card game here.)";
}
