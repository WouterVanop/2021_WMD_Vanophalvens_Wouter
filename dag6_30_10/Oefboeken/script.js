(function () {
    'use strict'

    const request = new XMLHttpRequest();
    const url = 'boekenTheo.json';
    request.addEventListener('load', dataLoaded);
    request.open('get', url);
    request.send();

    function dataLoaded() {
        if(request.status == 200 && response.readyState == 4){
            console.log(request.response);
        } else {
            console.log(request.status);
        }
        
    }
})();