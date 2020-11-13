(function () {

    closeButtonModalCorona();


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
})();