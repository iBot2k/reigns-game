document.addEventListener('DOMContentLoaded', () => {
  const questionElement = document.getElementById('question');
  const leftButton = document.getElementById('left-button');
  const rightButton = document.getElementById('right-button');
  const cardElement = document.getElementById('card');
  const bodyElement = document.body;

  const questions = [
      { 
        question: 'Апории Зенона демонстрируют', 
        left: 'Неприменимость обычных понятий к бесконечности', 
        right: 'Законы природы в геометрии',
        correct: 'left' 
      },
      { 
        question: 'Автор первого подробного трактата о конических сечениях', 
        left: 'Аполлоний', 
        right: 'Эвклид',
        correct: 'left' 
      },
      { 
        question: 'Аттическая нумерация в Древней Греции была', 
        left: 'пятерично-десятичной', 
        right: 'троичной',
        correct: 'left' 
      },
      { 
        question: 'Гильберт сделал свой доклад, содержащий 23 проблемы в...', 
        left: '1900 г.', 
        right: '1920 г.',
        correct: 'left' 
      },
      { 
        question: 'Главное сочинение Фиббоначчи', 
        left: 'Книга абака', 
        right: 'Начала геометрии',
        correct: 'left' 
      },
      { 
        question: 'Выберите две дисциплины второго порядка абстракции', 
        left: 'общая алгебра, функциональный анализ', 
        right: 'арифметика, алгебра',
        correct: 'left' 
      },
      { 
        question: 'Геометрия основана на интуитивных понятиях пространства', 
        left: 'Да', 
        right: 'Нет',
        correct: 'left' 
      }
  ];

  let currentQuestionIndex = 0;

  function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      leftButton.textContent = currentQuestion.left;
      rightButton.textContent = currentQuestion.right;
      cardElement.classList.remove('card-leave-left', 'card-leave-right', 'wrong-answer');
      bodyElement.classList.remove('correct-answer', 'wrong-answer');
  }

  function handleAnswer(direction) {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = direction === currentQuestion.correct;
      bodyElement.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');
      cardElement.classList.add(direction === 'left' ? 'card-leave-left' : 'card-leave-right');
      if (!isCorrect) {
          cardElement.classList.add('wrong-answer');
      }
      setTimeout(() => {
          currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
          loadQuestion();
      }, 500);
  }

  leftButton.addEventListener('click', () => handleAnswer('left'));
  rightButton.addEventListener('click', () => handleAnswer('right'));

  loadQuestion();

  // Добавляем функцию AutoScale и ChangeScale
  window.addEventListener("resize", AutoScale); // Масштабируем страницу при растягивании окна
  AutoScale(); // Масштабируем страницу после загрузки

  function AutoScale() {
      let width = window.innerWidth; // Ширина окна
      if (width > 1280) {
          ChangeScale("big");
      } else if (width <= 1280 && width > 720) {
          ChangeScale("normal");
      } else if (width < 720) {
          ChangeScale("small");
      }
  }

  function ChangeScale(size) {
      const gameContainer = document.getElementById('game-container');
      const card = document.getElementById('card');
      const buttons = document.querySelectorAll('button');

      if (size === "big") {
          gameContainer.style.width = "50vw";
          gameContainer.style.height = "50vh";
          card.style.padding = "5vh";
          card.style.borderRadius = "2vh";
          buttons.forEach(button => {
              button.style.padding = "2vh 4vh";
              button.style.fontSize = "2vh";
          });
      } else if (size === "normal") {
          gameContainer.style.width = "70vw";
          gameContainer.style.height = "70vh";
          card.style.padding = "4vh";
          card.style.borderRadius = "1.5vh";
          buttons.forEach(button => {
              button.style.padding = "1.5vh 3vh";
              button.style.fontSize = "1.5vh";
          });
      } else if (size === "small") {
          gameContainer.style.width = "90vw";
          gameContainer.style.height = "90vh";
          card.style.padding = "3vh";
          card.style.borderRadius = "1vh";
          buttons.forEach(button => {
              button.style.padding = "1vh 2vh";
              button.style.fontSize = "1vh";
          });
      }
  }
});