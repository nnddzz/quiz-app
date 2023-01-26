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
];

// global variable
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerConatiner = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let questionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer = true;

// show questions function
const showQuestion = (questionNumber) => {
  question.textContent = data[questionNumber].question;
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

const selectAnswer = () => {
  answerConatiner.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

showQuestion(questionIndex);
