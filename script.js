const navHeader = document.querySelector('.nav-header');
const menuOpen = document.querySelector('.menu-abrir');
const menuClose = document.querySelector('.menu-fechar');

menuOpen.addEventListener('click', () => {
    navHeader.classList.add('active');
});

menuClose.addEventListener('click', () => {
    navHeader.classList.remove('active');
});