document.addEventListener('DOMContentLoaded', () => {
  const questionElement = document.getElementById('question');
  const leftButton = document.getElementById('left-button');
  const rightButton = document.getElementById('right-button');
  const cardElement = document.getElementById('card');

  const questions = [
      { 
        question: 'Апории Зенона демонстрируют', 
        left: 'Неприменимость обычных понятий к бесконечности', 
        right: 'Законы природы в геометрии' 
      },
      { 
        question: 'Автор первого подробного трактата о конических сечениях', 
        left: 'Аполлоний', 
        right: 'Эвклид' 
      },
      { 
        question: 'Аттическая нумерация в Древней Греции была', 
        left: 'пятерично-десятичной', 
        right: 'троичной' 
      },
      { 
        question: 'Гильберт сделал свой доклад, содержащий 23 проблемы в...', 
        left: '1900 г.', 
        right: '1920 г.' 
      },
      { 
        question: 'Главное сочинение Фиббоначчи', 
        left: 'Книга абака', 
        right: 'Начала геометрии' 
      },
      { 
        question: 'Выберите две дисциплины второго порядка абстракции', 
        left: 'общая алгебра, функциональный анализ', 
        right: 'арифметика, алгебра' 
      },
      { 
        question: 'Геометрия основана на интуитивных понятиях пространства', 
        left: 'Да', 
        right: 'Нет' 
      }
  ];

  let currentQuestionIndex = 0;

  function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      leftButton.textContent = currentQuestion.left;
      rightButton.textContent = currentQuestion.right;
      cardElement.classList.remove('card-leave-left', 'card-leave-right');
  }

  function handleAnswer(direction) {
      cardElement.classList.add(direction === 'left' ? 'card-leave-left' : 'card-leave-right');
      setTimeout(() => {
          currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
          loadQuestion();
      }, 500);
  }

  leftButton.addEventListener('click', () => handleAnswer('left'));
  rightButton.addEventListener('click', () => handleAnswer('right'));

  loadQuestion();
});