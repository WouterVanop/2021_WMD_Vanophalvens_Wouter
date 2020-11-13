(function () {
    'use strict';

    const forms = document.forms;
    const reviewForm = forms.reviewForm;
    const nameElement = reviewForm.name;
    const addressElement = reviewForm.address;
    const remarkElement = reviewForm.remark;
    const sendButton = reviewForm.sendButton;
    sendButton.addEventListener('click', showInput);


    
    fetch('json/reviews.json')
  .then((response) => {
   
    console.log(response.status)
    
    return response.json(); 
  })
  .then((data) => {
    document.getElementById("naam1").innerText = data.results[4].name;
    document.getElementById("ratingDatum1").innerText = data.results[4].score + "/10 op " + data.results[4].createdAt;
    document.getElementById("uitleg1").innerText = data.results[4].description;

    document.getElementById("naam2").innerText = data.results[2].name;
    document.getElementById("ratingDatum2").innerText = data.results[2].score + "/10 op " + data.results[2].createdAt;
    document.getElementById("uitleg2").innerText = data.results[2].description;

    document.getElementById("naam3").innerText = data.results[3].name;
    document.getElementById("ratingDatum3").innerText = data.results[3].score + "/10 op " + data.results[3].createdAt;
    document.getElementById("uitleg3").innerText = data.results[3].description;
    
    
    let aantalRatings = data.results.length;
    let gemiddeldeRating = 0;
    for(let i = 0; i < aantalRatings; i++){
        gemiddeldeRating += data.results[i].score;
    }
    gemiddeldeRating = gemiddeldeRating/data.results.length;
    document.getElementById("ratingGemiddelde").innerText = "Gemiddelde rating: " + gemiddeldeRating + "/10 ";
    document.getElementById("ratingAantal").innerText = "Totaal aantal ratings: " + aantalRatings + " REVIEWS";


  })
  .catch((err) => {
    // doe iets met de error
    console.log(`De request faalde :${err}`);
  });



    function showInput(e) {
        console.log(e);

        let validated = (
            validateEmailForm() &&
            validateNameForm() &&
            validateRemark());

        if (validated == false) {
            e.preventDefault();
            validateEmailForm();
            validateNameForm();
            validateRemark();
        } else {
            alert("Bedankt voor de feedback!")
        }

    }

    function validateNameForm() {
        if (nameElement.value.length <= 2) {
           
            reviewForm.querySelector("#errorName").innerText = "Kies een geldige naam."
            return false;
        } else {
           
            reviewForm.querySelector("#errorName").innerText = ""
            return true;
        }
    }

    function validateEmailForm() {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (addressElement.value.match(mailformat)) {
            
            reviewForm.querySelector("#errorAddress").innerText = ""
            return true;
        } else {
           
            reviewForm.querySelector("#errorAddress").innerText = "Kies een geldig email-adres."
            return false;
        }
    }
    function validateRemark() {
        if (remarkElement.value.length <= 2) {
            
            reviewForm.querySelector("#errorRemark").innerText = "Je mag dit niet leeg laten."
            return false;
        } else {
           
            reviewForm.querySelector("#errorRemark").innerText = ""
            return true;
        }
    }
    
})();