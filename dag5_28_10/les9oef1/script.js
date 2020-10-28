/* Schrijf een script dat je gegevens opvraagt en terug uitprint in de console. 
Om gegevens op te vragen kan jegebruik maken van de prompt methode. 
Het printen in de console kan je met console.log. 
Alvorens allevragen te stellen toon een begroeting aan de hand van alert.
Vraag volgende gegevens:
Naam
Voornaam
Geslacht
Geboortedatum
...  */
(function() {
    alert("Hallo, hier zijn een paar vragen voor je:")
    let naam = window.prompt("Naam:", "Vanophalvens");
    let voorNaam = window.prompt("Voornaam:", "Wouter");
    let geslacht = window.prompt("Geslacht:", "Man");
    let geboorteDatum = window.prompt("Geboortedatum:", "17-04-99");
    console.log(naam);
    console.log(voorNaam);
    console.log(geslacht);
    console.log(geboorteDatum);
})();