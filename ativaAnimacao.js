const btnAtivar = document.getElementById('ativar');

const $ = document.querySelector.bind(document);

btnAtivar.addEventListener('click', () => {

    const logo = document.querySelector('header #logo');
    const logoInvisivel = document.getElementById('logo-invisivel');
    const btnClickMe = $('header #ativar');
    const navbar = $('#header #navbar');
    const container = $('#container #aboutME');
    const main = $('main');

    logo.classList.toggle('show');
    navbar.classList.toggle('show');

    logoInvisivel.classList.toggle('hide');
    btnClickMe.classList.add('hide');

    main.classList.toggle('show');
    container.classList.toggle('show');

});