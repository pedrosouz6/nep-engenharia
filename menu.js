//------------------------------menu------------------------------
const navHeader = document.querySelector('.nav-header');
const menuOpen = document.querySelector('.menu-abrir');
const menuClose = document.querySelector('.menu-fechar');

const navHeaderLi = document.querySelectorAll('.nav-header ul li');
const navHeaderLiLength = navHeaderLi.length;

for(i = 0; i < navHeaderLiLength; i++) {
    navHeaderLi[i].addEventListener('click', () => {
        navHeader.classList.remove('active');
    })
}

menuOpen.addEventListener('click', () => {
    navHeader.classList.add('active');
});

menuClose.addEventListener('click', () => {
    navHeader.classList.remove('active');
});