const correctAnswers = [ 'A', 'B', 'A', 'B'];
const form = document.querySelector(".quiz-form");
const quiz = document.querySelector(".quiz");
const redoButton = document.querySelector(".result input");
const result = document.querySelector(".result");
const inputs = document.querySelectorAll('.form-check input:checked');

form.addEventListener('submit', e => {
     e.preventDefault();

     let score = 0;
     const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

     // check answers and add score
     userAnswers.forEach((answer, index) => {
          if (answer === correctAnswers[index]){
               score += 25;
          }
     });

     // scroll to top
     scrollTo(0,0);

     // show result div
     let result = document.querySelector(".result");
     result.classList.remove("d-none");

     // hide quiz div
     quiz.classList.add("d-none");

     // result animation
     let output = 0;
     const timer = setInterval(() => {
          let textScore = document.querySelector(".result p span");
          textScore.innerText = `${output} %`;
          if (output === score) {
               clearInterval(timer);
          } else {
               output++;
          }
     }, 10);
     if (score !== 100) {
          redoButton.classList.remove("d-none");
     }
});

redoButton.addEventListener('click', () => {
     result.classList.add("d-none");
     quiz.classList.remove("d-none");
     redoButton.classList.add("d-none");
});

