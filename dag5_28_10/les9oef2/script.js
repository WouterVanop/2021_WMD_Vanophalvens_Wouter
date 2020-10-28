/* Schrijf een script dat het volgende doet:
1. Vraag of de gebruiker een priemgetal wil genereren of verifiëren
  Indien de gebruiker een priemgetal wil verifiëren
    1. Vraag de gebruiker om een getal in te voeren.
    2. Geef een boodschap terug die vertelt of het getal een priemgetal is.
  Indien gebruiker een priemgetal wil genereren
    1. Vraag de gebruiker het hoeveelste priemgetal hij wil
    2. Genereer het priemgetal en toon het.

Maak voor de opdracht gebruik van prompt en alert. 
Zorg dat je validatie doet op de input gegevens. Indiende input ongewenst is, stel de vraag opnieuw. 
Geef indien nodig een melding aan de gebruiker dat de input foutief is.
...  */
(function () {
    'use strict';
    const actie = prompt('Generen of Verifiëren?', 'Generen');
    let aantalDelers = 0;
    if(actie == 'Verifiëren'){
        const getal = parseInt(prompt('Welk getal wil je verifiëren?'));
        let divider = 2;
        while(getal % divider != 0){
            divider++;
        }
        if(divider == getal){
            alert(getal + ' is een priemgetal.');
        } else {
            alert(getal + ' is geen priemgetal');
        }
    } 
    else if(actie == 'Generen') {
        const getal = parseInt(prompt('Het hoeveelste priemgetal wil je generen?'));
        let counter = 1;
        let primeNumber = 2;

        while(counter != getal){
            primeNumber++;

            if(isPrimeNumber(primeNumber)){
                counter++;
            }
        }
        alert(primeNumber);
    }
    function isPrimeNumber(number){
        let divider = 2;
        while(number % divider != 0){
            divider++;
        }
        return divider == number;
    }
})();