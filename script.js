document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');

    const questions = [
        { question: 'Вы хотите построить замок?', left: 'Да', right: 'Нет' },
        { question: 'Вы хотите напасть на соседнее королевство?', left: 'Да', right: 'Нет' },
        // Добавьте больше вопросов здесь
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