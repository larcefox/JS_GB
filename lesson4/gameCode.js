var event, question, answerArray = [], tempArray = [];


function askQuestion(questionNum, works) {
    do {
        tempArray = Object.keys(works).slice(questionNum * 4 - 4, questionNum * 4);
        question = works[tempArray[0]] +
            works[tempArray[2]] +
            works[tempArray[3]] +
            '-1 - Выход из игры';
        event = +prompt(question);
        answerArray.push([questionNum, event]);
    }while (!isAnswer(event));

}


function isAnswer(event) {
    if (event == 1 || event == 2 || event == -1) {
        return true;
    }
    alert('Вы ввели недопустимый символ');
    return false;
}


function showQuestion(answerArray){

    let listOfQuestions = [];
    for (let q of answerArray)
    {listOfQuestions.push(q[0]);}

    do {
        questionNum = +prompt('Choose number of question: ' + listOfQuestions);

    }while (listOfQuestions.indexOf(questionNum) == -1);

    tempArray = Object.keys(works).slice(questionNum * 4 - 4, questionNum * 4);
    question = works[tempArray[0]] +
        'and your answer was: ' + works[tempArray[answerArray[listOfQuestions.indexOf(questionNum)][1] + 1]];
    alert(question);
    answerArray.push([questionNum, event]);
}


askQuestion(1, works);


switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        askQuestion(2, works);

        switch (event) {
            case 1:
                askQuestion(4, works);
                showQuestion(answerArray);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                askQuestion(4, works);
                showQuestion(answerArray);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        askQuestion(3, works);

        switch (event) {
            case 1: // Второе действие
                askQuestion(4, works);
                showQuestion(answerArray);
                break;
            case 2: // Второе действие
                askQuestion(4, works);
                showQuestion(answerArray);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');




