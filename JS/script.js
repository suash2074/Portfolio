let nav = document.querySelector('.nav');

window.addEventListener("scroll", () => {


    if (window.scrollY > 1050) {
        nav.style.background = '#222222';
        nav.style.transition = '5s ease-in-out' ;
    }  else{
        nav.style.background = 'linear-gradient(to bottom, #363737, #363636)';
        nav.style.transition = '' ;
    }
});

let header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//     header.classList.toggle('shadow', window.scrollY > 0);
// })