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



//------------------------------animation------------------------------
const target = document.querySelectorAll('[data-anima]');

if(target.length) {
    window.addEventListener('scroll', () => {
        animaScroll();
    })
}

function animaScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add('animation');
        } else {
            element.classList.remove('animation');
        }
    })
}