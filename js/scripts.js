// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Ajuste para alinear el elemento al inicio de la ventana
        });
    });
});

// Hide/show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight;
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        header.style.top = `-${headerHeight}px`; // Ocultar encabezado
    } else {
        header.style.top = '0'; // Mostrar encabezado
    }
    lastScrollTop = scrollTop;
});

// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});
