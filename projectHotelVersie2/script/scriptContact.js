(function () {
    'use strict';
    const forms = document.forms;
    const contactForm = forms.contactForm;
    const nameElement = contactForm.name;
    const firstNameElement = contactForm.firstName;
    const subjectElement = contactForm.subject;
    const addressElement = contactForm.address;
    const sendButton = contactForm.sendButton;

    sendButton.addEventListener('click', showInput);

    function showInput(e) {
        console.log(e);

        let validated = (
            validateEmailForm() &&
            validateSubjectForm() &&
            validateNameForm() &&
            validateFirstNameForm()) &&
            validateRemark();

        if (validated == false) {
            e.preventDefault();
            validateEmailForm();
            validateSubjectForm();
            validateNameForm();
            validateFirstNameForm();
            validateRemark();
        }

    }

    function validateNameForm() {
        if (nameElement.value.length <= 2) {
           
            contactForm.querySelector("#errorName").innerText = "Kies een geldige naam."
            return false;
        } else {
           
            contactForm.querySelector("#errorName").innerText = ""
            return true;
        }
    }

    function validateFirstNameForm() {
        if (firstNameElement.value.length <= 2) {
            
            contactForm.querySelector("#errorFirstName").innerText = "Kies een geldige voornaam."
            return false;
        } else {
           
            contactForm.querySelector("#errorFirstName").innerText = ""
            return true;
        }
    }

    function validateSubjectForm() {
        if (subjectElement.value.length <= 2) {
            
            contactForm.querySelector("#errorSubject").innerText = "Geef een geldig onderwerp."
            return false;
        } else {
            
            contactForm.querySelector("#errorSubject").innerText = ""
            return true;
        }
    }

    function validateEmailForm() {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (addressElement.value.match(mailformat)) {
            
            contactForm.querySelector("#errorAddress").innerText = ""
            return true;
        } else {
           
            contactForm.querySelector("#errorAddress").innerText = "Kies een geldig email-adres."
            return false;
        }
    }
    function validateRemark() {
        if (subjectElement.value.length <= 2) {
            
            contactForm.querySelector("#errorRemark").innerText = "Je mag dit niet leeg laten."
            return false;
        } else {
           
            contactForm.querySelector("#errorRemark").innerText = ""
            return true;
        }
    }
    
})();

 


