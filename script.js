//declaracao de variaveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

//perguntas
const questions = [


  {
    "question": "Quais técnicos deram as últimas duas libertadores pro FLAMENGO?",
    "answers": [
      {
        "answer": "Jorge jesus e Ceni",
        "correct": false
      },
      {
        "answer": "Vitor Pereira e Dorival",
        "correct": false
      },
      {
        "answer": "Dorival e Ceni",
        "correct": false
      },
      {
        "answer": "Jorge Jesus e Dorival",
        "correct": true
      },
    ]
  },

  {
    "question": "O FLAMENGO era um clube de que antes de ser clube de futebol?",
    "answers": [
      {
        "answer": "Basquete",
        "correct": false
      },
      {
        "answer": "Natação",
        "correct": false
      },
      {
        "answer": "Remo",
        "correct": true
      },
      {
        "answer": "Voleibol",
        "correct": false
      },
    ]
  },


  {
    "question": "Quantas COPAS DO BRASIL o Flamengo tem?",
    "answers": [
      {
        "answer": "Quatro",
        "correct": true
      },
      {
        "answer": "Três",
        "correct": false
      },
      {
        "answer": "Dois",
        "correct": false
      },
      {
        "answer": "Uma",
        "correct": false
      },
    ]
  },


  {
    "question": "Contra quem o Flamengo ganhou sua última LIBERTADORES?",
    "answers": [
      {
        "answer": "River Plate",
        "correct": false
      },
      {
        "answer": "Athletico paranaense",
        "correct": true
      },
      {
        "answer": "Palmeiras",
        "correct": false
      },
      {
        "answer": "Boca Juniors",
        "correct": false
      },
    ]
  },

  {
    "question": "Quantos títulos carioca tem o Flamengo?",
    "answers": [
      {
        "answer": "40",
        "correct": false
      },
      {
        "answer": "35",
        "correct": false
      },
      {
        "answer": "38",
        "correct": true
      },
      {
        "answer": "37",
        "correct": false
      },
    ]
  },

  {
    "question": "Quem é o ATUAL camisa 10 do time?",
    "answers": [
      {
        "answer": "Cebolinha",
        "correct": false
      },
      {
        "answer": "De la cruz",
        "correct": false
      },
      {
        "answer": "Arrascaeta",
        "correct": false
      },
      {
        "answer": "Gabigol",
        "correct": true
      },
    ]
  },

  {
    "question": "Contra quem foi o jogo do primeiro mundial do Flamengo?",
    "answers": [
      {
        "answer": "Milan",
        "correct": false
      },
      {
        "answer": "Real Madrid",
        "correct": false
      },
      {
        "answer": "Manchester",
        "correct": false
      },
      {
        "answer": "Liverpool",
        "correct": true
      },
    ]
  },
    {
      "question": "Flamengo tem quantas Libertadores ?",
      "answers": [
        {
          "answer": "Tres",
          "correct": true
        },
        {
          "answer": "Uma",
          "correct": false
        },
        {
          "answer": "Duas",
          "correct": false
        },
        {
          "answer": "Zero",
          "correct": false
        },
      ]
    },
    {
      "question": "em qual ano o FLAMENGO foi fundado?",
      "answers": [
        {
          "answer": "1910",
          "correct": false
        },
        {
          "answer": "1895",
          "correct": true
        },
        {
          "answer": "1885",
          "correct": false
        },
        {
          "answer": "1915",
          "correct": false
        },
      ]
    },
    {
      "question": "quem é o MAIOR ídolo do Flamengo?",
      "answers": [
        {
          "answer": "Zico",
          "correct": true
        },
        {
          "answer": "Petković",
          "correct": false
        },
        {
          "answer": "Gabigol",
          "correct": false
        },
        {
          "answer": "Junior",
          "correct": false
        },
      ]
    },
  ]

// Substituicao do quizz para a primeira pergunta
function init() {
    // criar a primeira pergunta
    createQuestion(0);

}

//Cria uma pergunta
function createQuestion(i){

    // limpar a questao anterior
    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    // Alterar o texto da pergunta

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Insere as alternativas
    questions[i].answers.forEach(function(answer,i){

        // Cria o template do botao do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer ['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        // Remover hode e template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        // Inseri a alternativa na tela
        answersBox.appendChild(answerTemplate);

        // Inseri um evento de clique no botao
        answerTemplate.addEventListener("click",function(){
          checkAnswer(this);
        });
    });

    //incrementar o numero da questao
    actualQuestion++;


}

// Verificando resposta do usuario
function checkAnswer(btn) {
    
  const buttons = answersBox.querySelectorAll("button");

  buttons.forEach(function(button){

    if(button.getAttribute("correct-answer") === "true") {

      button.classList.add("correct-answer");

      // checa se o usuario acertou a pergunta
      if(btn === button) {
        points++;
      }


    } else {


      button.classList.add("wrong-answer");


      
    }
  });

  // Exibir proxima pergunta

  nextQuestion();

}

// Exibir a proxima pergunta no quizz
function nextQuestion (){

  // timer para usuario ver as respostas
  setTimeout(function() {

    if(actualQuestion >= questions.length) {

      showSuccessMessage();
      return;


    }

    createQuestion(actualQuestion);

  }, 1500);
}

// Exibi a tela final

function showSuccessMessage() {

  hideOrShowQuizz();

  // Troca dados da tela de sucesso

  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  // Alterar o numero de perguntas corretas

  const correctAnswers = document.querySelector("#correct-answers");

  correctAnswers.textContent = points;

  // Alterar o total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");

  totalQuestions.textContent = questions.length;

}

// Mostra ou esconde o score

function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");

}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {

  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

//Inicializacao do Quizz
init();


