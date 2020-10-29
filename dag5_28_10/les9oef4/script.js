(function () {
    'use strict';
    alert('Avoid the red card game')

    function generateArrayCards() {
        let arrayCards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let redCard = Math.floor(Math.random() * 10);
        arrayCards[redCard] = 1;
        console.log(arrayCards);
        return arrayCards;
    }


    let message = '';
    let number = 0;
    let arrayCardsPlayer1 = generateArrayCards();
    let arrayCardsPlayer2 = generateArrayCards();
    while (message == '' && arrayCardsPlayer1.length != 0) {
        console.log(arrayCardsPlayer1);
        console.log(arrayCardsPlayer2);
        const actie = prompt('Draw last or first, current score: ' + number, 'last');
        if (actie == 'first') {
            if (arrayCardsPlayer1[0] == 0) {
                arrayCardsPlayer1.shift();
                number++;
            } else {
                message = 'You have lost';
                alert(message);
            }
        } else if (actie == 'last') {
            if (arrayCardsPlayer1[arrayCardsPlayer1.length - 1] == 0) {
                arrayCardsPlayer1.pop();
                number++;
            } else {
                message = 'You have lost';
                alert(message);
            }
        }
    }
    alert('Game has ended. Reload the page for another game.')
})();