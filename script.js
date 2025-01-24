document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');

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
          question: 'Братья Бернулли (Я. и И.) - ученики...', 
          left: 'Лейбница', 
          right: 'Ньютона' 
        },
        { 
          question: 'В Древней Руси использовалась система счисления', 
          left: 'Непозиционная десятичная', 
          right: 'Двоичная' 
        },
        { 
          question: 'В России в начале 19 в. университеты были в следующих трех городах', 
          left: 'Москва, Киев, Казань', 
          right: 'Санкт-Петербург, Рига, Варшава' 
        },
        { 
          question: 'В Европе 18 в. математический анализ получил широкое развитие благодаря трудам и школе', 
          left: 'Лейбница', 
          right: 'Декарта' 
        },
        { 
          question: 'Вершина развития механической картины мира приходится на', 
          left: 'конец 18 в.', 
          right: 'начало 20 в.' 
        },
        { 
          question: 'Выберите три верных утверждения', 
          left: 'Аксиома сводимости, Аксиома выбора, Тест Тьюринга', 
          right: 'Аксиома бесконечности, Теорема Пифагора, Закон Кеплера' 
        },
        { 
          question: 'Впервые интегральные методы для нахождения площадей и объемов последовательно применял', 
          left: 'Архимед', 
          right: 'Декарт' 
        },
        { 
          question: 'Выберите дисциплину, появившуюся не в 17 веке', 
          left: 'топология', 
          right: 'математический анализ' 
        },
        { 
          question: 'Выберите неверное утверждение', 
          left: 'Квадратура круга связана с решением некоторого алгебраического уравнения большой степени', 
          right: 'Геометрия основана на интуитивных понятиях пространства' 
        },
        { 
          question: 'Выберите две дисциплины второго порядка абстракции', 
          left: 'общая алгебра, функциональный анализ', 
          right: 'арифметика, алгебра' 
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
          question: 'Главные противники интуиционистов в конце 19 века', 
          left: 'Кантор и Гильберт', 
          right: 'Лейбниц и Паскаль' 
        },
        { 
          question: 'Главная цель программы Гильберта', 
          left: 'доказать непротиворечивость формальной системы с помощью нее же самой', 
          right: 'создать новую систему математики' 
        },
        { 
          question: 'Гелиоцентрическая система Коперника получила распространение и признание благодаря работам', 
          left: 'Кеплера', 
          right: 'Галилея' 
        },
        { 
          question: 'Десятичные дроби в Европе ввел в обращение...', 
          left: 'Стевин', 
          right: 'Ферма' 
        },
        { 
          question: 'Двоичная система счисления была предложена', 
          left: 'Паскалем и Лейбницем', 
          right: 'Эйлером и Ньютоном' 
        }
      ];

    let currentQuestionIndex = 0;

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        leftButton.textContent = currentQuestion.left;
        rightButton.textContent = currentQuestion.right;
    }

    leftButton.addEventListener('click', () => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    });

    rightButton.addEventListener('click', () => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    });

    loadQuestion();
});