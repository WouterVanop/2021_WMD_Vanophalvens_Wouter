(function () {
    'use strict';


    const boekenForm = document.forms.boekenForm;

    //form main elementen 
    const fullNameElement = boekenForm.fullName;
    const emailElement = boekenForm.email;
    const telefoonElement = boekenForm.telefoon;
    const aantalTweeElement = boekenForm.aantalTwee;
    const aantalDrieElement = boekenForm.aantalDrie;
    const aantalBasicSuiteElement = boekenForm.aantalBasicSuite;
    const aantalKingSuiteElement = boekenForm.aantalKingSuite;
    const aantalKindElement = boekenForm.aantalKind;
    const aantalVolElement = boekenForm.aantalVol;
    const codeElement = boekenForm.code;
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
    aantalTweeElement.addEventListener('click', berekenTotaalBedrag);
    aantalDrieElement.addEventListener('click', berekenTotaalBedrag);
    aantalBasicSuiteElement.addEventListener('click', berekenTotaalBedrag);
    aantalKingSuiteElement.addEventListener('click', berekenTotaalBedrag);
    aantalKindElement.addEventListener('click', berekenTotaalBedrag);
    aantalVolElement.addEventListener('click', berekenTotaalBedrag);
    sendButton.addEventListener('click', showInput);
    codeElement.addEventListener('keyup', showCodeFoutmelding);
    aankomstDatumElement.addEventListener('click', showCodeFoutmelding);
    vertrekDatumElement.addEventListener('click', berekenTotaalBedrag);
    aankomstDatumElement.addEventListener('click', berekenTotaalBedrag);

    //function melding als code fout
    function showCodeFoutmelding() {
        const code1 = "lastminute";
        const code2 = "zomer2020";
        const vandaag = new Date();
        console.log(dateToString(vandaag));
        console.log(aankomstDatumElement.value)
        if (codeElement.value == "") {
            boekenForm.querySelector("#errorCode").innerText = "";
        } else if (code1 == codeElement.value && dateToString(vandaag) == aankomstDatumElement.value) {
            boekenForm.querySelector("#errorCode").innerText = "";
            berekenTotaalBedrag();
        } else if (code1 == codeElement.value && dateToString(vandaag) !== aankomstDatumElement.value) {
            boekenForm.querySelector("#errorCode").innerText = "Alleen geldig als aankomst vandaag is";
        } else if (code2 == codeElement.value) {
            boekenForm.querySelector("#errorCode").innerText = "";
            berekenTotaalBedrag();
        } else {
            boekenForm.querySelector("#errorCode").innerText = "Gebruik een geldige code.";
            berekenTotaalBedrag();
        }
    }




    //function to check validation before sending form
    function showInput(e) {
        console.log(e);
        let validated = false;
        validated = (
                validateEmailForm() &&
                validateNameForm() &&
                validateTelephoneNumberForm() &&
                validateRoomsForm() &&
                validatePersonsForm() &&
                validateDepartureDateForm() &&
                validateVertrekUurForm()) &&
            validateAankomstUurForm();
        if (validated == false) {
            e.preventDefault();
            validateEmailForm();
            validateNameForm();
            validateTelephoneNumberForm();
            validateRoomsForm();
            validatePersonsForm();
            validateDepartureDateForm();
            validateVertrekUurForm();
            validateAankomstUurForm();
        } else if (validated == true) {
            e.preventDefault();
            activateButtonModal();
        }
    }

    //function open/close modal
    function activateButtonModal() {
        var modal = document.getElementById("myModalBevestiging");
        var span = document.getElementsByClassName("close")[0];
        var bttn = document.getElementsByClassName("bttnClose")[0];

        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
            window.location.reload(true);
        }

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
        let datum = new Date(aankomstDatumElement.value);
        datum.setDate(datum.getDate() + 1);
        console.log(datum.getDate());
        document.getElementById("vertrekDatum").setAttribute("min", dateToString(datum));
    }



    //function Calculation
    function berekenTotaalBedrag() {

        if (aankomstDatumElement.value == "" || vertrekDatumElement.value == "") {
            document.getElementById("totaalPrijs").innerText = "0";
        } else {
            document.getElementById("aantalTweepersoons").innerText = aantalTweeElement.value;
            document.getElementById("aantalDriepersoons").innerText = aantalDrieElement.value;
            document.getElementById("aantalDriepersoonsBasic").innerText = aantalBasicSuite.value;
            document.getElementById("aantalDriepersoonsKing").innerText = aantalKingSuiteElement.value;
            let totaal = +aantalKindElement.value + +aantalVolElement.value;
            document.getElementById("totAantalPersonen").innerText = totaal;

            // To calculate the time difference of two dates var
            let date1 = new Date(vertrekDatumElement.value);
            let date2 = new Date(aankomstDatumElement.value);
            let Difference_In_Time = date2.getTime() - date1.getTime();
            // To calculate the no. of days between two dates var 
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            let totaalPrijs = Difference_In_Days * -1 * ((+aantalTweeElement.value * 35) + (+aantalDrieElement.value * 55) + (+aantalBasicSuiteElement.value * 75) + (+aantalKingSuiteElement.value * 105));
            const code1 = "lastminute";
            const code2 = "zomer2020";
            const vandaag = new Date();
            if (code1 == codeElement.value && dateToString(vandaag) == aankomstDatumElement.value) {
                totaalPrijs = totaalPrijs * 0.85;
                document.getElementById("totaalPrijs").innerText = totaalPrijs;
            } else if (code2 == codeElement.value) {
                totaalPrijs = totaalPrijs * 0.9;
                document.getElementById("totaalPrijs").innerText = totaalPrijs;
            } else {
                document.getElementById("totaalPrijs").innerText = totaalPrijs;
            }
        }

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
        if (vertrekUurElement.value < vertrekUurElement.min) {
            boekenForm.querySelector("#errorVertrekUur").innerText = "Kies een juist tijdstip";
            return false;
        } else if (vertrekUurElement.value > vertrekUurElement.max) {
            boekenForm.querySelector("#errorVertrekUur").innerText = "Kies een juist tijdstip";
            return false;
        } else {
            boekenForm.querySelector("#errorVertrekUur").innerText = "";
            return true;
        }
    }

    function validateAankomstUurForm() {
        console.log(aankomstUurElement.min);
        console.log(aankomstUurElement.value);
        console.log(aankomstUurElement.max);
        if (aankomstUurElement.value < aankomstUurElement.min) {
            boekenForm.querySelector("#errorAankomstUur").innerText = "Kies een juist tijdstip";
            return false;
        } else if (aankomstUurElement.value > aankomstUurElement.max) {
            boekenForm.querySelector("#errorAankomstUur").innerText = "Kies een juist tijdstip";
            return false;
        } else {
            boekenForm.querySelector("#errorAankomstUur").innerText = "";
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