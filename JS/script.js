let nav = document.querySelector('.nav');

window.addEventListener("scroll", () => {


    if (window.scrollY > 1050) {
        nav.style.transition = '0.5s ease-in-out' ;
        nav.style.boxShadow = '0 2px 20px #afafaf';
    }  else{
        nav.style.background = 'linear-gradient(to bottom, #d3d2d2, #d3d2d2)';
        nav.style.transition = '0.5s ease-in-out' ;
        nav.style.boxShadow = '' ;
    }
});