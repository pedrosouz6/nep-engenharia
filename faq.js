const questions = document.querySelectorAll('.question'); 

console.log(questions);

questions.forEach(element => {
    element.addEventListener('click', () => {
        CleanQuestions();
        element.classList.add('show');
    })
});

function CleanQuestions() {
    questions.forEach(element => {
        element.classList.remove('show');
    })
}