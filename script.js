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
      cardElement.classList.remove('card-leave-left', 'card-leave-right', 'wrong-answer', 'correct-answer');
      bodyElement.classList.remove('correct-answer', 'wrong-answer');
  }

  function handleAnswer(direction) {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = direction === currentQuestion.correct;
      bodyElement.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');
      if (!isCorrect) {
          cardElement.classList.add('wrong-answer');
          setTimeout(() => {
              cardElement.classList.remove('wrong-answer');
              cardElement.classList.add(direction === 'left' ? 'card-leave-left' : 'card-leave-right');
              setTimeout(() => {
                  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                  loadQuestion();
              }, 500);
          }, 1000); // Длительность мерцания
      } else {
          cardElement.classList.add('correct-answer');
          setTimeout(() => {
              cardElement.classList.add(direction === 'left' ? 'card-leave-left' : 'card-leave-right');
              setTimeout(() => {
                  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                  loadQuestion();
              }, 500);
          }, 1000); // Длительность мерцания
      }
  }

  leftButton.addEventListener('click', () => handleAnswer('left'));
  rightButton.addEventListener('click', () => handleAnswer('right'));

  loadQuestion();
});