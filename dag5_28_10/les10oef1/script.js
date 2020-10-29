/*
JS - LES10 - OEFENING 1 - DOM SELECTIE
https://www.bol.com/nl/l/laptops/N/4770/

1. Het element met het logo van bol.com:
   - document.getElementsByID("logo") / document.querySelector("#logo");

2. De 3 menu's die in de pagina staan (1 is onzichtbaar):
   -document.getElementsByTagName("nav");

3. Geef een lijst van alle categoriën terug:
   - document.getElementsByClassName("wsp-catogery-nav__link");
   - Array.From(document.getElementsByClassName("wsp-catogery-nav__link")).forEach( (e) => {console.log(e.text);} );

4. Geef een lijst van alle laptop namen:
   - Array.From(document.getElementsByClassName('product-title')).forEach( (e) => {console.log(e.text);} );

5. Geef een lijst van alle links op de webpagina:
   - document.querySelectorAll('a').forEach( (e) => {console.log(e.href);} );

6. Geef een lijst van alle afbeeldingelementen in merken carousel:
   - document.querySelectorAll("".filmstrip img");
*/
