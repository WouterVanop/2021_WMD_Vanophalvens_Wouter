(function () {
    'use strict';
    const boekenForm = document.forms.boekenForm;

    //form main elementen 
    const fullNameElement = boekenForm.fullName;
    const emailElement = boekenForm.email;
    const telefoonElement = boekenForm.telefoon;
    const adresElement = boekenForm.adres;
    const aantalTweeElement = boekenForm.aantalTwee;
    const aantalDrieElement = boekenForm.aantalDrie;
    const aantalBasicSuiteElement = boekenForm.aantalBasicSuite;
    const aantalKingSuiteElement = boekenForm.aantalKingSuite;
    const aantalKindElement = boekenForm.aantalKind;
    const aantalVolElement = boekenForm.aantalVol;
    const sendButton = boekenForm.sendButton;

    //form uur elementen
    const vertrekUurElement = boekenForm.vertrekUur;
    const aankomstUurElement = boekenForm.aankomstUur;

    //form datum elementen
    const aankomstDatumElement = boekenForm.aankomstDatum;
    const vertrekDatumElement = boekenForm.vertrekDatum;
    const today = new Date();
    aankomstDatumElement.setAttribute('min', dateToString(today));
    vertrekDatumElement.setAttribute('min', dateToString(today));
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    vertrekDatumElement.setAttribute('min', dateToString(tomorrow));

    
    //form click events
    vertrekDatumElement.addEventListener('click', validatieDatum);
    aantalTwee.addEventListener('click', berekenTotaalBedrag);
    aantalDrie.addEventListener('click', berekenTotaalBedrag);
    aantalBasicSuite.addEventListener('click', berekenTotaalBedrag);
    aantalKingSuite.addEventListener('click', berekenTotaalBedrag);
    aantalKind.addEventListener('click', berekenTotaalBedrag);
    aantalVol.addEventListener('click', berekenTotaalBedrag);
    sendButton.addEventListener('click', showInput);

    //click closeModalCorona
    closeButtonModalCorona();

    
    //function to check validation before sending form
    function showInput(e) {
        console.log(e);
        let validated = false;
        validated = (
            validateEmailForm() &&
            validateNameForm() &&
            validateTelephoneNumberForm() &&
            validateAddressForm() &&
            validateRoomsForm() &&
            validatePersonsForm() &&
            validateDepartureDateForm() &&
            validateVertrekUurForm());
        if (validated == false) {
            e.preventDefault();
            validateEmailForm();
            validateNameForm();
            validateTelephoneNumberForm();
            validateAddressForm();
            validateRoomsForm();
            validatePersonsForm();
            validateDepartureDateForm();
            validateVertrekUurForm();
        } else if (validated == true) {
            e.preventDefault();
            activateButtonModal();
        }
    }


    //function close modalCorona
    function closeButtonModalCorona() {
        var modal = document.getElementById("myModalCorona");
        var span = document.getElementsByClassName("closeCorona")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }


    //function open/close modal
    function activateButtonModal() {
        var modal = document.getElementById("myModalBevestiging");
        var span = document.getElementsByClassName("close")[0];
        var bttn = document.getElementsByClassName("bttnClose")[0];
        // When the user clicks the button, open the modal 
        modal.style.display = "block";
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
            window.location.reload(true);
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                window.location.reload(true);
            }
        }
        bttn.onclick = function reloadPage() {
            modal.style.display = "none";
            window.location.reload(true);
        }
    }
    

    //function validation date
    function validatieDatum() {
        console.log(aankomstDatumElement.value);
        let datum = new Date();
        datum = aankomstDatumElement.value;
        //let datumPlus1 = new Date(); // 
        //datumPlus1.setDate(datum.getDate() + 1); .getDate not a function?
        document.getElementById("vertrekDatum").setAttribute("min", datum);
    }


    //function Calculation
    function berekenTotaalBedrag() {

        document.getElementById("aantalTweepersoons").innerText = aantalTweeElement.value;
        document.getElementById("aantalDriepersoons").innerText = aantalDrieElement.value;
        document.getElementById("aantalDriepersoonsBasic").innerText = aantalBasicSuite.value;
        document.getElementById("aantalDriepersoonsKing").innerText = aantalKingSuiteElement.value;
        let totaal = +aantalKindElement.value + +aantalVolElement.value;
        document.getElementById("totAantalPersonen").innerText = totaal;
        let totaalPrijs = (+aantalTweeElement.value * 35) + (+aantalDrieElement.value * 55) + (+aantalBasicSuiteElement.value * 75) + (+aantalKingSuiteElement.value * 105);
        document.getElementById("totaalPrijs").innerText = totaalPrijs;
    }

    //form validate functions
    function validateNameForm() {
        if (fullNameElement.value.length <= 2) {
            boekenForm.querySelector("#errorFullName").innerText = "Kies een geldige naam.";
            return false;
        } else {
            boekenForm.querySelector("#errorFullName").innerText = "";
            return true;
        }
    }
    function validateEmailForm() {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailElement.value.match(mailformat)) {
            boekenForm.querySelector("#errorEmail").innerText = "";
            return true;
        } else {
            boekenForm.querySelector("#errorEmail").innerText = "Kies een geldig email-adres.";
            return false;
        }
    }
    function validateTelephoneNumberForm() {
        if (telefoonElement.value.length <= 9) {
            boekenForm.querySelector("#errorTelefoon").innerText = "Kies een geldig telefoon nummer.";
            return false;
        } else {
            boekenForm.querySelector("#errorTelefoon").innerText = "";
            return true;
        }
    }
    function validateAddressForm() {
        if (adresElement.value.length <= 2) {
            boekenForm.querySelector("#errorAdres").innerText = "Kies een geldig adres.";
            return false;
        } else {
            boekenForm.querySelector("#errorAdres").innerText = "";
            return true;
        }
    }
    function validateRoomsForm() {
        let totaalKamers = +aantalTweeElement.value + +aantalDrieElement.value + +aantalBasicSuiteElement.value + +aantalKingSuiteElement.value;
        if (totaalKamers == 0) {
            boekenForm.querySelector("#errorAantalTwee").innerText = "Duid minstens 1 kamer aan";
            boekenForm.querySelector("#errorAantalDrie").innerText = "Duid minstens 1 kamer aan";
            boekenForm.querySelector("#errorAantalBasicSuite").innerText = "Duid minstens 1 kamer aan";
            boekenForm.querySelector("#errorAantalKingSuite").innerText = "Duid minstens 1 kamer aan";
            return false;
        } else {
            boekenForm.querySelector("#errorAantalTwee").innerText = "";
            boekenForm.querySelector("#errorAantalDrie").innerText = "";
            boekenForm.querySelector("#errorAantalBasicSuite").innerText = "";
            boekenForm.querySelector("#errorAantalKingSuite").innerText = "";
            return true;
        }
    }
    function validatePersonsForm() {
        if (aantalVol.value == "0") {
            boekenForm.querySelector("#errorAantalVol").innerText = "Duid minstens één volwassen aan";
            return false;
        } else {
            boekenForm.querySelector("#errorAantalVol").innerText = "";
            return true;
        }
    }
    function validateDepartureDateForm() {
        console.log(aankomstDatumElement);
        console.log(vertrekDatumElement);
        if (aankomstDatumElement.value == vertrekDatumElement.value) {
            boekenForm.querySelector("#errorVertrekDatum").innerText = "Je moet minstens 1 dag boeken"
            return false;
        } else {
            boekenForm.querySelector("#errorVertrekDatum").innerText = "";
            return true;
        }
    }
    function validateVertrekUurForm() {
        if (vertrekUurElement < '18:00:00') {
            boekenForm.querySelector("#errorVertrekUur").innerText = "Kies een juist tijdstip";
            return false;
        } else {
            boekenForm.querySelector("#errorVertrekUur").innerText = "";
            return true;
        }
    }
    function dateToString(date) {
        let dd = date.getDate();
        let mm = date.getMonth() + 1; // januari is 0
        const yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        return yyyy + '-' + mm + '-' + dd;
    }
})();