let millionerQuestions = [
    q1 = {
        question : 'Почему небо голубое?',
        answer1 : '\n1. Из-за особенности рассеивания солнечных лучей',
        answer2 : '\n2. Из-за выхлопных газов',
        answer3 : '\n3. Отсвечивает от воды',
        answer4 : '\n4. Из-за космоса',
        rightAnswer: 1

    }, q2 = {
        question : 'Каков возраст земли?',
        answer1 : '\n1. 6 000 лет',
        answer2 : '\n2. 75 000 лет',
        answer3 : '\n3. 20-40 миллионов лет',
        answer4 : '\n4. 4,54 миллиарда лет',
        rightAnswer: 4
    }, q3 = {
        question : 'Когда погаснет Солнце?',
        answer1 : '\n1. Гаснет каждую ночь',
        answer2 : '\n2. Когда всадники апо...',
        answer3 : '\n3. Через 5,5 млрд лет',
        answer4 : '\n4. Когда закрою глаза',
        rightAnswer: 3

    }];

let answer;
function askmillionerQuestion(millionerQuestions) {
    for (let q of millionerQuestions){

        do{
        answer = +prompt(Object.values(q).slice(0,5));

        }while(answer != 1 && answer != 2 && answer != 3 && answer != 4 && answer != -1);

        if (answer == -1){
            alert('До свидания!');
            return;
        }else if(Object.values(q)[5] != answer){

            alert('Вы проиграли.');
            return;
        }else{
            alert('Правильный ответ.' + ' Вы выиграли: ' + 1000 + '0'.repeat(millionerQuestions.indexOf(q)));
        }
    }

}

askmillionerQuestion(millionerQuestions);