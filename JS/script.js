let nav = document.getElementById('nav');

window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
        nav.style.display = '';
        nav.style.transition = '2s ease-in-out' 
    } else {
        nav.style.display = 'none';
    }
});