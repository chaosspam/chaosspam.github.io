"use strict";
(function(){
    window.addEventListener("load", init);

    const id = document.getElementById.bind(document);
    const qs = document.querySelector.bind(document);
    const qsa = document.querySelectorAll.bind(document);

    function init() {
    }

    function checkStatus(response) {
        if(response.ok) {
            return response;
        } else {
            throw Error("Error in request: " + response.statusText);
        }
    }
})();