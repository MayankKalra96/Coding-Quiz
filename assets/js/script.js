var secondsPresent = 60;

var totalScore = 0;

var questionsPage = document.getElementById('QuestionsPage');
var welcomePage = document.getElementById('WelcomePage');

presentQuestionId = '1';
var IDandQuestion = new Map();
var IDandAnswer = new Map(); // Unique ID and Answer
var IDandOptions = new Map(); // Unique ID and Options. Getting selected option is no different.

var question;
var optionOne;
var optionTwo;
var optionThree;
var optionFour;

var timerRef = document.getElementById('timer');
var oOne = document.getElementById('optOne');
var oTwo = document.getElementById('optTwo');
var oThree = document.getElementById('optThree');
var oFour = document.getElementById('optFour');
var quesT = document.getElementById('quesMan');

var examDone = false;

var allDone = document.getElementById('allDone');
var scoresB = document.getElementById('showScores');

function initQuestions() {
    IDandQuestion.set('1', 'Commonly used data types DO NOT include');
    IDandOptions.set('1', ['booleans', 'strings', 'numbers', 'alerts']);
    IDandAnswer.set('1', 'alerts');


    IDandQuestion.set('2', 'The condition in an if/else statement is enclosed with _________.');
    IDandOptions.set('2', ['quotes', 'curly braces', 'paranthesis', 'square brackets']);
    IDandAnswer.set('2', 'paranthesis');


    IDandQuestion.set('3', 'Arrays in JavaScript can be used to store _________.');
    IDandOptions.set('3', ['numbers and strings', 'other arrays', 'booleans', 'all of the above']);
    IDandAnswer.set('3', 'all of the above');


    IDandQuestion.set('4', 'String values must be enclosed within ___ when being assigned to variables.');
    IDandOptions.set('4', ['paranthesis', 'quotes', 'curly brackets', 'commas']);
    IDandAnswer.set('4', 'quotes');

    IDandQuestion.set('5', 'A very useful tool used during development and debugging for printing content to the debugger is:');
    IDandOptions.set('5', ['JavaScript', 'terminal', 'for loops', 'console.log']);
    IDandAnswer.set('5', 'console.log');

/**
 * New Questions can be added by providing these details.
 */
    IDandQuestion.set('6', 'Inside which HTML element do we put the JavaScript?');
    IDandOptions.set('6', ['script', 'js', 'javascript', 'link']);
    IDandAnswer.set('6', 'script');

    IDandQuestion.set('7', 'How does a WHILE loop start?');
    IDandOptions.set('7', ['while i = 1 to 10', 'while (i <= 10; i++)', 'while(i <= 10)', 'while(i=0;i<1-;i++)']);
    IDandAnswer.set('7', 'while(i <= 10)');

    IDandQuestion.set('8', 'What is the correct syntax for referring to an external script called "xxx.js"?');
    IDandOptions.set('8', ['script name="xxx.js"', 'script href="xxx.js"', 'script src="xxx.js"', 'link rel="script" href="xxx.js"']);
    IDandAnswer.set('8', 'script src="xxx.js"');

    IDandQuestion.set('9', 'How do you write "Hello World" in an alert box?');
    IDandOptions.set('9', ['alertBox(\'Hello World\');', 'alert("Hello World");', 'msgBox(\'Hello World\');', 'msg(\'Hello World\');']);
    IDandAnswer.set('9', 'alert("Hello World");');

    IDandQuestion.set('10', 'How do you create a function in JavaScript?');
    IDandOptions.set('10', ['function:myFunction()', 'function myFunction()', 'function = myFunction()', 'function := myFunction()']);
    IDandAnswer.set('10', 'function myFunction()');

    IDandQuestion.set('11', 'How to write an IF statement in JavaScript?');
    IDandOptions.set('11', ['if i = 5', 'if i = 5 then', 'if i == 5 then', 'if(i == 5)']);
    IDandAnswer.set('11', 'if(i == 5)');



    oOne = document.getElementById('optOne');
    oTwo = document.getElementById('optTwo');
    oThree = document.getElementById('optThree');
    oFour = document.getElementById('optFour');
    quesT = document.getElementById('quesMan');


    quesT.innerHTML = IDandQuestion.get('1');
    var optionsArray = IDandOptions.get('1');
    oOne.innerHTML = optionsArray[0];
    oTwo.innerHTML = optionsArray[1];
    oThree.innerHTML = optionsArray[2];
    oFour.innerHTML = optionsArray[3];
}

initQuestions();

function initAll() {
    welcomePage.style.display = 'none';
    questionsPage.style.display = 'block';
    presentQuestionId = '1';
    secondsPresent = 60;
    totalScore = 0;

    oOne = document.getElementById('optOne');
    oTwo = document.getElementById('optTwo');
    oThree = document.getElementById('optThree');
    oFour = document.getElementById('optFour');
    quesT = document.getElementById('quesMan');
    quesT.innerHTML = IDandQuestion.get('1');
    var optionsArray = IDandOptions.get('1');
    oOne.innerHTML = optionsArray[0];
    oTwo.innerHTML = optionsArray[1];
    oThree.innerHTML = optionsArray[2];
    oFour.innerHTML = optionsArray[3];

    document.getElementById('viewHighScores').style.display = 'none';

    startTimer();
}

function startTimer() {
    secondsPresent = parseInt(checkTimeFormat(secondsPresent));
    if(secondsPresent != 0) {
        secondsPresent--;
        timerRef.innerHTML = 'Time: ' +  secondsPresent;
        examDone = false;
        setTimeout(startTimer, 1000);
    } else {
        if(welcomePage.style.display == 'block') {

        } else {
            concludeQuiz();
        }
    }
}

var checkTimeFormat = function(val) {
    if(val < 10) {
        val = '0' + val;
    }
    return val;
}

function selectedOptOne() {
    var selectedAnswerArr = IDandOptions.get(presentQuestionId);
    var selectedAns = selectedAnswerArr[0];
    var actualAnswer = IDandAnswer.get(presentQuestionId);
    console.log(selectedAns + ' ---- ' + actualAnswer);
    if(actualAnswer + '' == selectedAns + '') {
        //Correct Answer
        totalScore = totalScore + 1;
        console.log('Total: ' + totalScore);
        document.getElementById('buttonOne').style.backgroundColor = '#00E040';
        goToNextQuestion();
    } else {
        // Wrong answer.
        secondsPresent = secondsPresent - 10;
        document.getElementById('buttonOne').style.backgroundColor = '#c80000';
        goToNextQuestion();
    }
}
function selectedOptTwo() {
    var selectedAnswerArr = IDandOptions.get(presentQuestionId);
    var selectedAns = selectedAnswerArr[1];
    var actualAnswer = IDandAnswer.get(presentQuestionId);
    console.log(selectedAns + ' ---- ' + actualAnswer);
    if(actualAnswer + '' == selectedAns + '') {
        //Correct Answer
        totalScore = totalScore + 1;
        console.log('Total: ' + totalScore);
        document.getElementById('buttonTwo').style.backgroundColor = '#00E040';
        goToNextQuestion();
    } else {
        // Wrong answer.
        secondsPresent = secondsPresent - 10;
        document.getElementById('buttonTwo').style.backgroundColor = '#c80000';
        goToNextQuestion();
    }
}
function selectedOptThree() {
    var selectedAnswerArr = IDandOptions.get(presentQuestionId);
    var selectedAns = selectedAnswerArr[2];
    var actualAnswer = IDandAnswer.get(presentQuestionId);
    console.log(selectedAns + ' ---- ' + actualAnswer);
    if(actualAnswer + '' == selectedAns + '') {
        //Correct Answer
        totalScore = totalScore + 1;
        console.log('Total: ' + totalScore);
        document.getElementById('buttonThree').style.backgroundColor = '#00E040';
        goToNextQuestion();
    } else {
        // Wrong answer.
        secondsPresent = secondsPresent - 10;
        document.getElementById('buttonThree').style.backgroundColor = '#c80000';
        goToNextQuestion();
    }
}
function selectedOptFour() {
    var selectedAnswerArr = IDandOptions.get(presentQuestionId);
    var selectedAns = selectedAnswerArr[3];
    var actualAnswer = IDandAnswer.get(presentQuestionId);

    console.log(selectedAns + ' ---- ' + actualAnswer);
    if(actualAnswer + '' == selectedAns + '') {
        //Correct Answer
        totalScore = totalScore + 1;
        console.log('Total: ' + totalScore);
        document.getElementById('buttonFour').style.backgroundColor = '#00E040';
        goToNextQuestion();
    } else {
        // Wrong answer.
        secondsPresent = secondsPresent - 10;
        document.getElementById('buttonFour').style.backgroundColor = '#c80000';
        goToNextQuestion();
    }
}

function goToNextQuestion() {




    setTimeout(() => {

        var getAllKeys = IDandAnswer.size;

        document.getElementById('buttonThree').style.backgroundColor = '#550fe8';
        document.getElementById('buttonTwo').style.backgroundColor = '#550fe8';
        document.getElementById('buttonOne').style.backgroundColor = '#550fe8';
        document.getElementById('buttonFour').style.backgroundColor = '#550fe8';

    oOne = document.getElementById('optOne');
    oTwo = document.getElementById('optTwo');
    oThree = document.getElementById('optThree');
    oFour = document.getElementById('optFour');
    quesT = document.getElementById('quesMan');
    var pap = getAllKeys;
    if(pap <= parseInt(presentQuestionId, 10)) {
        // No questions remaining.

        concludeQuiz();
    } else {

        opP = (parseInt(presentQuestionId) + 1);
        quesT.innerHTML = IDandQuestion.get(opP + '')+'';
        var optionsArray = IDandOptions.get(opP + '');
        oOne.innerHTML = optionsArray[0]+'';
        oTwo.innerHTML = optionsArray[1]+'';
        oThree.innerHTML = optionsArray[2]+'';
        oFour.innerHTML = optionsArray[3]+'';
        presentQuestionId = opP + '';
    }

    }, 500);

}


function clearScores() {

    localStorage.clear();
    goBackFromScore();
}

function showScores() {
    scoresB.style.display = 'block';
    welcomePage.style.display = 'none';
    allDone.style.display = 'none';
    var scoresBoard = document.getElementById('scoresList');
    var getAll = localStorage.getItem('studentScore');
    scoresBoard.innerHTML = '';
    if(getAll == null) {

    } else {
        var opOp = Object.values(JSON.parse(getAll));
        console.log(opOp);
        for(var p of opOp) {
            console.log(p);
            scoresBoard.innerHTML += '<div class="mdc-card mdc-card--outlined" style="padding: 8px; margin: 8px;">Initial: ' +p.initial + ' - Score: ' + p.score + '</div>';
        }
    }
}

function goBackFromScore() {
    scoresB.style.display = 'none';
    allDone.style.display = 'none';
    document.getElementById('viewHighScores').style.display = 'block';
    welcomePage.style.display = 'block';
    totalScore = 0;
    examDone = true;
}

function getInitialAndStartAgain() {
    var initialInput = document.getElementById('initials');

    console.log('Initial: ' + initialInput.value);
    var scoreboard = {
        initial: initialInput.value,
        score: totalScore
    };
    var inpt = localStorage.getItem('studentScore');
    if(inpt == null) {
        localStorage.setItem('studentScore', JSON.stringify([scoreboard]));
        console.log([scoreboard]);
    } else {
        var opIns = Object.values(JSON.parse(inpt));
        console.log(opIns);
        opIns.push(scoreboard);
        localStorage.setItem('studentScore', JSON.stringify(opIns));
    }
    showScores();
}


function concludeQuiz() {
    allDone.style.display = 'block';
    secondsPresent = 0;
    timerRef.innerHTML = 'Time: ' +  secondsPresent;
    document.getElementById('QuestionsPage').style.display = 'none';
    document.getElementById('totalScorePrint').innerHTML = 'Your final score is ' + totalScore;
    console.log(questionsPage);
    console.log(allDone);
}