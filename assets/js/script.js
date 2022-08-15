const myNav = document.querySelector('nav');

window.onscroll = function () {
    "use strict";
    if (window.scrollY >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
}