window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrolled = window.scrollY;
    const mainContent = document.getElementById('main-content');
    const imgBiography = document.getElementById('img-biography');


    navbar.classList.toggle('bgMenu', window.scrollY > 0);

    if (scrolled > 0) {
        navbar.classList.toggle('invisible');
    } else if (window.scrollY <= 0) {
        navbar.classList.remove('invisible');
    }

    if (scrolled > 300 && scrolled < 1000) {
        mainContent.classList.add('show');
        imgBiography.classList.add('show');
    }

    if (scrolled < 300 || scrolled >= 1100) {
        imgBiography.classList.add('hide1');
        mainContent.classList.add('hide1');
        mainContent.classList.remove('show');
        imgBiography.classList.remove('show');
    }

    console.log(scrolled);
});

console.log(window);