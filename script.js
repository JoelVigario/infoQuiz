const questions = document.querySelectorAll('.question');
const options = document.querySelectorAll('.option');
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;

// Array de respostas corretas para cada pergunta
const correctAnswers = [2, 4, 11, 13, 19, 22, 26, 28, 33, 38, 42, 47, 49, 54, 59];

// Oculta todas as perguntas, exceto a primeira
questions.forEach((question, index) => {
    if (index !== 0) {
        question.style.display = 'none';
    }
});

// Função para mostrar a próxima pergunta
function showNextQuestion() {
    // Oculta a pergunta atual
    questions[currentQuestionIndex].style.display = 'none';
    // Avança para a próxima pergunta
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    // Exibe a próxima pergunta
    questions[currentQuestionIndex].style.display = 'block';

}

var res = false

var id = 0
options.forEach((option, index) => {
    option.addEventListener('click', () => {
        if (index === correctAnswers[currentQuestionIndex]) {
            option.style.backgroundColor = '#8bc34a'; // Cor verde para resposta correta
            // showNextQuestion();
            res = true
        } else {
            option.style.backgroundColor = '#f44336'; // Cor vermelha para resposta incorreta
        }
        // Desabilita o clique em outras opções após uma resposta ser selecionada
        options.forEach((opt) => {
            opt.style.pointerEvents = 'none';
        });
    });
});

nextButton.addEventListener('click', () => {
    if (res) {
        showNextQuestion();
        res = false
        // abilitar o clique em outras opções após uma resposta ser selecionada
        options.forEach((opt) => {
            opt.style.pointerEvents = '';
        });
    } else {
        document.location.reload()
    }
});
