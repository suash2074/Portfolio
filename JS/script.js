let nav = document.querySelector('.nav');

window.addEventListener("scroll", () => {


    if (window.scrollY > 1050) {
        // nav.style.background = '#222222';
        nav.style.transition = '1s ease-in-out' ;
        nav.style.boxShadow = '3px 3px 5px #313030';
    }  else{
        nav.style.background = 'linear-gradient(to bottom, #363737, #363636)';
        nav.style.transition = '1s ease-in-out' ;
        nav.style.transition = '' ;
        nav.style.boxShadow = '' ;
    }
});