const target = document.querySelectorAll('[data-anima]');

if(target.length) {
    window.addEventListener('scroll', () => {
        animaScroll();
    })
}

function animaScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3);
    target.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add('animation');
        } else {
            element.classList.remove('animation');
        }
    })
}