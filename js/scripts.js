// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
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
        header.style.top = `-${headerHeight}px`; // Hide header
    } else {
        header.style.top = '0'; // Show header
    }
    lastScrollTop = scrollTop;
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});
