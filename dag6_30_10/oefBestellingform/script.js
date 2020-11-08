(function () {
    'use strict';
    const forms = document.forms;
    const orderForm = forms.orderForm;

    const nameElement = orderForm.name;
    const firstNameElement = orderForm.firstName;
    const dateElement = orderForm.date;
    const orderElement = orderForm.order;
    const addressElement = orderForm.address;
    const orderButton = orderForm.orderButton;

    console.log(orderButton);

    orderButton.addEventListener('click', showInput);

    function showInput(e) {
        console.log(e);
        e.preventDefault();
        let validated =
            (validateEmailForm() &&
                validateDateForm() &&
                validateNameForm() &&
                validateFirstNamesForm());

        if (validated == true) {
            const ulElement = document.createElement("ul");
            const liName = document.createElement("li");
            const liFirstName = document.createElement("li");
            const liDate = document.createElement("li");
            const liOrder = document.createElement("li");
            const liAddress = document.createElement("li");

            liName.innerText = nameElement.value;
            liFirstName.innerText = firstNameElement.value;
            liDate.innerText = dateElement.value;
            liOrder.innerText = orderElement.value;
            liAddress.innerText = addressElement.value;

            ulElement.append(liName);
            ulElement.append(liFirstName);
            ulElement.append(liDate);
            ulElement.append(liOrder);
            ulElement.append(liAddress);
            document.getElementById('input').append(ulElement);
        }


    }

    function validateNameForm() {
        if (nameElement.value.length <= 2) {
            orderForm.querySelector("#nameError").innerText = "Choose a valid name.";
            return false;
        } else {
            orderForm.querySelector("#nameError").innerText = "";
            return true;
        }
    }

    function validateFirstNamesForm() {
        if (firstNameElement.value.length <= 2) {
            orderForm.querySelector("#firstNameError").innerText = "Choose a valid firstname.";
            return false;
        } else {
            orderForm.querySelector("#firstNameError").innerText = "";
            return true;
        }
    }

    function validateDateForm() {
        const disableDate = new Date(2020, 10, 01);
        const selectedDate = new Date(dateElement.value);
        if (selectedDate.getDate() == disableDate.getDate() &&
            selectedDate.getMonth() == disableDate.getMonth()) {
            orderForm.querySelector("#dateError").innerText = "Choose a valid date.";
            return false;
        } else {
            orderForm.querySelector("#dateError").innerText = "";
            return true;
        }
    }

    function validateEmailForm() {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (addressElement.value.match(mailformat)) {
            orderForm.querySelector("#addressError").innerText = "";
            return true;
        } else {
            orderForm.querySelector("#addressError").innerText = "Choose a valid Email-address.";
            return false;
        }
    }
})();