(function () {
    'use strict';
    const boekenForm = document.forms.boekenForm;

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
    const aankomstDatumElement = boekenForm.aankomstDatum;
    const vertrekDatumElement = boekenForm.vertrekDatum;
    const vertrekUurElement = boekenForm.vertrekUur;
    const aankomstUurElement = boekenForm.aankomstUur;

    vertrekDatumElement.addEventListener('click', ValidatieDatum);

    aantalTwee.addEventListener('click', BerekenTotaalBedrag);
    aantalDrie.addEventListener('click', BerekenTotaalBedrag);
    aantalBasicSuite.addEventListener('click', BerekenTotaalBedrag);
    aantalKingSuite.addEventListener('click', BerekenTotaalBedrag);
    aantalKind.addEventListener('click', BerekenTotaalBedrag);
    aantalVol.addEventListener('click', BerekenTotaalBedrag);

    sendButton.addEventListener('click', showInput);


    function ValidatieDatum() {
        console.log(aankomstDatumElement.value);
        console.log(vertrekUurElement.value);
        console.log(aankomstUurElement.value);
        var datum = new Date();
        datum = aankomstDatumElement.value;
        //datum.addDays(1); werkt niet 
        document.getElementById("vertrekDatum").setAttribute("min", datum);
    }


    function BerekenTotaalBedrag() {

        document.getElementById("aantalTweepersoons").innerText = aantalTweeElement.value;
        document.getElementById("aantalDriepersoons").innerText = aantalDrieElement.value;
        document.getElementById("aantalDriepersoonsBasic").innerText = aantalBasicSuite.value;
        document.getElementById("aantalDriepersoonsKing").innerText = aantalKingSuiteElement.value;
        let totaal = +aantalKindElement.value + +aantalVolElement.value;
        document.getElementById("totAantalPersonen").innerText = totaal;
        let totaalPrijs = (+aantalTweeElement.value * 35) + (+aantalDrieElement.value * 55) + (+aantalBasicSuiteElement.value * 75) + (+aantalKingSuiteElement.value * 105);
        document.getElementById("totaalPrijs").innerText = totaalPrijs;
    }


    function showInput(e) {
        console.log(e);

        let validated = (
            validateEmailForm() &&
            validateNameForm() &&
            validateTelephoneNumberForm() &&
            validateAddressForm() &&
            validateRoomsForm() &&
            validatePersonsForm() &&
            validateDepartureDate() &&
            validateVertrekUurForm())
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
        }

    }

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
            boekenForm.querySelector("#errorTelefoon").innerText = "Kies een geldige naam.";
            return false;
        } else {
            boekenForm.querySelector("#errorTelefoon").innerText = "";
            return true;
        }
    }

    function validateAddressForm() {
        if (adresElement.value.length <= 2) {
            boekenForm.querySelector("#errorAdres").innerText = "Kies een geldige naam.";
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
        if(vertrekUurElement < '18:00:00'){
            boekenForm.querySelector("#errorVertrekUur").innerText = "Kies een juist tijdstip";
            return false;
        } else {
            boekenForm.querySelector("#errorVertrekUur").innerText = "";
            return true;
        }
    }
})();