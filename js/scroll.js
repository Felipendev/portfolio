window.addEventListener('scroll', () => {
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('bgMenu', window.scrollY > 0);
})