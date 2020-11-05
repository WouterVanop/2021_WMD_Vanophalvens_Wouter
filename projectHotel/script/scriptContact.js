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
            document.getElementById('name').placeholder = "Kies een geldige naam."
            return false;
        } else {
            document.getElementById('name').placeholder = ""
            return true;
        }
    }

    function validateFirstNameForm() {
        if (firstNameElement.value.length <= 2) {
            document.getElementById('firstName').placeholder = "Kies een geldige voornaam."
            return false;
        } else {
            document.getElementById('firstName').placeholder = ""
            return true;
        }
    }

    function validateSubjectForm() {
        if (subjectElement.value.length <= 2) {
            document.getElementById('subject').placeholder = "Geef een geldig onderwerp."
            return false;
        } else {
            document.getElementById('subject').placeholder = ""
            return true;
        }
    }

    function validateEmailForm() {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (addressElement.value.match(mailformat)) {
            document.getElementById('address').placeholder = ""
            return true;
        } else {
            document.getElementById('address').placeholder = "Kies een geldig email-adres.";
            return false;
        }
    }
    function validateRemark() {
        if (subjectElement.value.length <= 2) {
            document.getElementById('remark').placeholder = "Je mag dit niet leeg laten."
            return false;
        } else {
            document.getElementById('remark').placeholder = ""
            return true;
        }
    }
    
})();

 


