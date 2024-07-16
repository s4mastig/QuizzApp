let questions = [
    {
      "question": "Was ist die Hauptstadt von Deutschland?",
      "answer1": "Berlin",
      "answer2": "München",
      "answer3": "Hamburg",
      "answer4": "Frankfurt",
      "correct_answer": 1
    },
    {
      "question": "Welches Element hat das chemische Symbol 'O'?",
      "answer1": "Osmium",
      "answer2": "Oganesson",
      "answer3": "Sauerstoff",
      "answer4": "Oxigen",
      "correct_answer": 3
    },
    {
      "question": "Wer hat die Relativitätstheorie formuliert?",
      "answer1": "Isaac Newton",
      "answer2": "Nikola Tesla",
      "answer3": "Albert Einstein",
      "answer4": "Galileo Galilei",
      "correct_answer": 3
    },
    {
      "question": "Welche Sprache wird in Brasilien gesprochen?",
      "answer1": "Spanisch",
      "answer2": "Portugiesisch",
      "answer3": "Italienisch",
      "answer4": "Französisch",
      "correct_answer": 2
    },
    {
      "question": "Wie viele Kontinente gibt es auf der Erde?",
      "answer1": "5",
      "answer2": "6",
      "answer3": "7",
      "answer4": "8",
      "correct_answer": 3
    }
  ];

let currentQuestion = 0;

  function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1); // nimmt die letzte Stelle eines Strings, in diesem Fall bspw. von answer1 die 1
    console.log('selected Question Number is', selectedQuestionNumber);
    console.log('current Question right answer is', question['correct_answer']);

    idOfRightAnswer = `answer${question['correct_answer']}`;

    if (selectedQuestionNumber == question['correct_answer']) {
        console.log('selected answer is correct');
        document.getElementById(selection).parentNode.classList.add('bg-success'); // parentNode spricht das übergeordnete Element von dem mit der Id 
    }   
    else {
        console.log('selected answer is wrong');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();

    
}