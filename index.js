"use strict"
// камень-ножницы-бумага

let playScore = 0;
let compScore = 0;
let id = 0;
let res = {};
let base = [];
const dataBase = [];

const refs = {
    mainContainerEl: document.querySelector('.main-container'),
    rockEl: document.querySelector('.rock-container'),
    paperEl: document.querySelector('.paper-container'),
    scissorsEl: document.querySelector('.scissors-container'),
    resultContainerEl: document.querySelector('.result-container'),
    playScoreEl: document.querySelector('.player-score'),
    compScoreEl: document.querySelector('.comp-score'),
    titleEl: document.querySelector('.title-cont')
}



initialData()





//Выбор игрока, включение иконок
function initialData() {
    refs.resultContainerEl.classList.add('is-hidden');
    refs.rockEl.classList.remove('is-hidden');
    refs.paperEl.classList.remove('is-hidden');
    refs.scissorsEl.classList.remove('is-hidden');
    refs.rockEl.addEventListener('click', event => compChoiceAdd('rock'));
    refs.paperEl.addEventListener('click', event => compChoiceAdd('paper'));
    refs.scissorsEl.addEventListener('click', event => compChoiceAdd('scissors'));
};


//Создаем выбор компа и передаем в обработку вместе с выбором игрока
function compChoiceAdd(playerChoice) {
    const comp = Math.ceil(Math.random() * 3);
    let compChoice = '';
    switch (comp) {
        case (1):
            compChoice = 'rock'
            break;
        case (2):
            compChoice = 'paper'
            break;
        case (3):
            compChoice = 'scissors'
            break;
    };
    dataProcessing(playerChoice, compChoice)
}


//Обработка данных и выдача массива  данных результатов
function dataProcessing(playerChoice, compChoice) {
    console.log(playerChoice, compChoice);

    let message = '';

    const innerData = {
        rockrock: 'draw',
        rockpaper: 'loss',
        rockscissors: 'win',
        paperpaper: 'draw',
        paperrock: 'win',
        paperscissors: 'loss',
        scissorsscissors: 'draw',
        scissorsrock: 'loss',
        scissorspaper: 'win'
    };

    message = innerData[playerChoice + compChoice];

    console.log(message);

    switch (message) {
        case 'win':
            playScore += 1;
            break;
        case 'loss':
            compScore += 1;
            break;
    }

    const result = {
        playerChoice,
        compChoice,
        message,
        playScore,
        compScore,
    };

    resultsBase(result);
    showResult(result);
};

//Отображает результаты последнего матча на экране
function showResult(result) {
    refs.rockEl.classList.add('is-hidden');
    refs.paperEl.classList.add('is-hidden');
    refs.scissorsEl.classList.add('is-hidden');
    refs.resultContainerEl.classList.remove('is-hidden');
    refs.resultContainerEl.style.backgroundSize = 'cover';

    switch (result.message) {
        case 'win':
            refs.resultContainerEl.style.backgroundImage = 'url(./images/win.jpg)';
            break;
        case 'loss':
            refs.resultContainerEl.style.backgroundImage = 'url(./images/loss.png)';
            break;
        case 'draw':
            refs.resultContainerEl.style.backgroundImage = 'url(./images/draw.png)';
            break;
    };

    refs.playScoreEl.textContent = result.playScore;
    refs.compScoreEl.textContent = result.compScore;
    //тут нужно организовать прерывание до нажатия кнопки и переход к началу
    // refs.titleEl.addEventListener('click', initialData())
}

// формит массив
function resultsBase(innerArray) {

    id += 1;
    dataBase.push({ ...{ id }, ...innerArray });
    return dataBase;

};

// //выводит результат каждого тура
// function resultPrint() {
//     console.log(`${this.message}

//     вы выбрали-${this.playItem}   компьютер выбрал-${this.compItem}

//     общий счет-игрок${this.playScore} комп${this.compScore}`);
// };


//будет выводить таблицу результатов после игры
function printAllResult() {
}







