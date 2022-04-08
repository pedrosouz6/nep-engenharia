const navHeader = document.querySelector('.nav-header');
const menuOpen = document.querySelector('.menu-abrir');
const menuClose = document.querySelector('.menu-fechar');
const cards = document.querySelector('.container--projetos');
const target = document.querySelectorAll('[data-anima]');
console.log(target)

const project = document.querySelector('#projetos');

addEventListener('scroll', () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add('animation');
        } else {
            element.classList.remove('animation');
        }
    })
})

menuOpen.addEventListener('click', () => {
    navHeader.classList.add('active');
});

menuClose.addEventListener('click', () => {
    navHeader.classList.remove('active');
});