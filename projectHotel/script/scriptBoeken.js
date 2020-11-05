(function () {
    'use strict';
    const forms = document.forms;
    const betaalForm = forms.betaalForm;
    //const aantalTweepersoonsElement = betaalForm.aantalTweepersoons;
    //const aantalDriepersoonsElement = betaalForm.aantalDriepersoons;
    //const aantalDriepersoonsBasicElement = betaalForm.aantalDriepersoonsBasic;
    //const aantalDriepersoonsKingElement = betaalForm.aantalDriepersoonsKing;
    //const totAantalPersonenElement = betaalForm.totAantalPersonen;
    
    const boekenForm = forms.boekenForm;
    const fullNameElement = boekenForm.fullName;
    const emailElement = boekenForm.email;
    const sendButton = boekenForm.sendButton;

    sendButton.addEventListener('click', showInput);

    function showInput(e) {
        console.log(e);

        let validated = (
            validateEmailForm() &&
            validateNameForm())
        if (validated == false) {
            e.preventDefault();
            validateEmailForm();
            validateNameForm();
        }

    }

    function validateNameForm() {
        if (fullNameElement.value.length <= 2) {
            document.getElementById('fullName').placeholder = "Kies een geldige naam."
            return false;
        } else {
            document.getElementById('fullName').placeholder = ""
            return true;
        }
    }
    function validateEmailForm() {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailElement.value.match(mailformat)) {
            document.getElementById('email').placeholder = ""
            return true;
        } else {
            document.getElementById('email').placeholder = "Kies een geldig email-adres.";
            return false;
        }
    }
   
})();