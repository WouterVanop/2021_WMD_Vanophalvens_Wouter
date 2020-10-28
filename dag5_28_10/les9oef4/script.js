(function () {
    'use strict';
    alert('Avoid the red card game')
    let arrayCards = [0,0,0,0,0,0,0,0,0,0];
    let redCard = Math.floor(Math.random()* 10);
    arrayCards[redCard] = 1;
    console.log(arrayCards);

    let message = '';
    let number = 0;
    while (message == '' && arrayCards.length != 0) {
        console.log(arrayCards);
        const actie = prompt('Draw last or first, current score: ' + number, 'last');
        if (actie == 'first') {
            if (arrayCards[0] == 0) {
                arrayCards.shift();
                number++;
            } else {
                message = 'You have lost';
                alert(message);
            }
        } else if (actie == 'last') {
            if (arrayCards[arrayCards.length - 1] == 0) {
                arrayCards.pop();
                number++;
            } else {
                message = 'You have lost';
                alert(message);
            }
        }
    }
    alert('Game has ended. Reload the page for another game.')
})();