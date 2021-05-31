"use strict"
// камень-ножницы-бумага
let go = 0;
let comp = 0;
let play = 0;
let a = 0;
let playScore = 0;
let compScore = 0;
let playItem = ''
let compItem = ''

do {
    initialData();

    if (a === null) {
        break;
    };

    dataProcessing();

}
while (a !== null);

function end1() {
    alert('end');
};

alert('приходите исчо, для продолжения можно обновить страницу,счет будет обнулен');

function initialData() {
    do {
        play = prompt('сделайте выбор 1-камень 2-ножницы 3-бумага, или для завершения нажми "отмена"');
        a = play;
        play = Number(play);
    }
    while (!(play === 1 || play === 2 || play === 3 || a === null));
    comp = Math.ceil(Math.random() * 3);
    return (play, a, comp)
}

function dataProcessing() {
    console.log(play, comp, 'process')
    let mesage = '';
    if (play === 1 && comp === 1) {
        mesage = 'Hичья';
    }
    else if (play === 1 && comp === 2) {
        mesage = 'Вы победили';
        playScore += 1;
    }
    else if (play === 1 && comp === 3) {
        mesage = 'Вы проиграли';
        compScore += 1;
    }
    if (play === 2 && comp === 1) {
        mesage = 'Вы проиграли';
        compScore += 1;
    }
    else if (play === 2 && comp === 2) {
        mesage = 'Hичья';

    }
    else if (play === 2 && comp === 3) {
        mesage = 'Вы победили';
        playScore += 1;
    }
    if (play === 3 && comp === 1) {
        mesage = 'Вы победили';
        playScore += 1;
    }
    else if (play === 3 && comp === 2) {
        mesage = 'Вы проиграли';
        compScore += 1;
    }
    else if (play === 3 && comp === 3) {
        mesage = 'Hичья';
    };
    switch (play) {
        case (1):
            playItem = 'камень'
            break;
        case (2):
            playItem = 'ножницы'
            break;
        case (3):
            playItem = 'бумага'
            break;

        default:
            break;
    };
    switch (comp) {
        case (1):
            compItem = 'камень'
            break;
        case (2):
            compItem = 'ножницы'
            break;
        case (3):
            compItem = 'бумага'
            break;

        default:
            break;
    };
    alert(`${mesage}

    вы выбрали-${playItem}   компьютер выбрал-${compItem}
    
    общий счет-игрок${playScore} комп${compScore}`);
};





