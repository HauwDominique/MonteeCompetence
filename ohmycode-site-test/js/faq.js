const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
    question.addEventListener('click', function () {
        const response = question.nextElementSibling;
        const picto = question.lastElementChild
        response.classList.toggle('active');
        picto.classList.toggle('up');
    })
});