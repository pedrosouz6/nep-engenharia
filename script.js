const navHeader = document.querySelector('.nav-header');
const menuOpen = document.querySelector('.menu-abrir');
const menuClose = document.querySelector('.menu-fechar');
const paragraph = document.querySelector('#home .left p');
const textArray = paragraph.innerHTML.split('');

menuOpen.addEventListener('click', () => {
    navHeader.classList.add('active');
});

menuClose.addEventListener('click', () => {
    navHeader.classList.remove('active');
});

function typeWrite() {
    paragraph.innerHTML = '';
    textArray.forEach((letter, index) => {
        setTimeout(() => {
            paragraph.innerHTML += letter
        }, 50 * index)
    })
}

typeWrite()