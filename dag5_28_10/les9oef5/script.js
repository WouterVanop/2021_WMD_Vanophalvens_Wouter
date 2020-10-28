(function(){
    'use strict';

    function generateName(){
        const lettergrepen = ['aze','ate','ato','ozo','er','in','aze','uzo','zet','po','owe','wig','hit','but','ab']
        const aantalLettergrepen= Math.round(Math.random() * 3 + 1);
        let name = '';

        for (let i = 0; i < aantalLettergrepen; i++){
            const lettergreepIndex = Math.round(Math.random() * lettergrepen.length - 1);
            name += lettergrepen[lettergreepIndex];
        }
        return name;
    }

    let aantalFantasy = prompt('How many fantasy characters do u want?')
    let i = 0;
    while(i < aantalFantasy){
        let person = {
        name: generateName(),
        lives: Math.floor(Math.random()* 101),
        attackPoints: Math.floor(Math.random()* 11),
        deffensePoints: Math.floor(Math.random()* 11)
      };
      i++;
      console.log(person);
    }
    
})();