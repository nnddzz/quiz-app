// data variable contain quesion and answer
const data = [
  {
    id: 1,
    question: "Berikut ini adalah tag HTML kecuali...",
    answers: [
      { answer: "p", isCorrect: false },
      { answer: "img", isCorrect: false },
      { answer: "h1", isCorrect: false },
      { answer: "m", isCorrect: true },
    ],
  },
  {
    id: 2,
    question: "HTML merupakan singkatan dari?",
    answers: [
      { answer: "Hyper Text Markup Language", isCorrect: true },
      { answer: "Hyper Transpile Markup Language", isCorrect: false },
      { answer: "Hyper Test Markup Language", isCorrect: false },
      { answer: "Hyper Trust Markup Language", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Berikut ini adalah selector CSS kecuali...",
    answers: [
      { answer: "Id selsector", isCorrect: false },
      { answer: "Meta selector", isCorrect: true },
      { answer: "Class selector", isCorrect: false },
      { answer: "Element selector", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Tag HTML untuk menampilkan gambar adalah?",
    answers: [
      { answer: "h1", isCorrect: false },
      { answer: "code", isCorrect: false },
      { answer: "img", isCorrect: true },
      { answer: "canvas", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Berikut ini adalah tipe data dalam javascript, kecuali...",
    answers: [
      { answer: "array", isCorrect: false },
      { answer: "char", isCorrect: true },
      { answer: "object", isCorrect: false },
      { answer: "string", isCorrect: false },
    ],
  },
];

// global variable
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const questions = document.querySelector(".question");
const answerConatiner = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let questionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer = true;

// play again function
const playAgain = () => {
  questionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(questionIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

// show result function
const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Jawaban Benar: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Jawaban Salah: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Skor: ${
    (correctCount - wrongCount) * 10
  }`;
};

// show questions function
const showQuestion = (questionNumber) => {
  if (questionIndex === data.length) return showResult();

  selectedAnswer = null;
  questions.textContent = data[questionNumber].question;
  answerConatiner.innerHTML = data[questionNumber].answers
    .map(
      (item, index) =>
        `
      <div class="answer">
        <input type="radio" name="answer" id=${index} value=${item.isCorrect} />
        <label for="answer">${item.answer}</label>
      </div>
      `
    )
    .join("");

  selectAnswer();
};

// select answer function
const selectAnswer = () => {
  answerConatiner.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

// submit answer functions
const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      questionIndex++;
      showQuestion(questionIndex);
    } else {
      alert("Tolong isi jawaban terlebih dahulu.");
    }
  });
};

showQuestion(questionIndex);
submitAnswer();
