let subject = localStorage.getItem("subject");
let selectedQuestions = questions[subject];

document.getElementById("subjectTitle").innerText = subject.toUpperCase();

let quizForm = document.getElementById("quizForm");

selectedQuestions.forEach((q,index)=>{
let html=`<p>${index+1}. ${q.question}</p>`;

q.options.forEach(option=>{
html += `<label><input type="radio" name="q${index}" value="${option}">${option}</label><br>`;
});

quizForm.innerHTML += html;
});

let timeLeft=1800;

let timer=setInterval(()=>{
let minutes=Math.floor(timeLeft/60);
let seconds=timeLeft%60;

document.getElementById("timer").innerText=`${minutes}:${seconds}`;

timeLeft--;

if(timeLeft<0){
clearInterval(timer);
submitExam();
}
},1000);

function submitExam(){
let score=0;

selectedQuestions.forEach((q,index)=>{
let answer=document.querySelector(`input[name="q${index}"]:checked`);

if(answer && answer.value===q.answer){
score++;
}
});

alert("OLODO GO AND READ 😂 Your Score: "+score+"/"+selectedQuestions.length);
}
