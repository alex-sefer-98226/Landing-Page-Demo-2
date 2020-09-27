let menuOpen = () => {
    __headerNavi.classList.add('open');
}
let menuClose = () => {
    __headerNavi.classList.remove('open');
    __openMenuButton.style.display = 'block';
}
let prev = 0;
let init = () => {
    $(".latest__slider").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: true,
        margin: 20,
        responsive: {
            768: {
                margin:10,
                items: 3
            },
            1024:{
                margin:20,
                items:3
            }
        }
    });
    $(".quotes__slider").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: true,
        responsive:{
            768:{
                margin:10
            }
        }
    });
    $(".partners__slider").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        responsive: {
            768: {
                items: 4
            },
            1024:{
                items:5
            }
        }
    });
    document.addEventListener('scroll', () => {
        if (window.pageYOffset > prev) {
            prev = window.pageYOffset;
            __header.classList.remove('sticky');
            __headerLogo.src = 'img/logo-light.svg';
        }
        if (window.pageYOffset < prev && window.pageYOffset > 200) {
            prev = window.pageYOffset;
            __header.classList.add('sticky');
            __headerLogo.src = 'img/logo-dark.svg';
        }
        if (window.pageYOffset < 10) {
            __header.classList.remove('sticky');
            __headerLogo.src = 'img/logo-light.svg';
        }
    })
    __openMenuButton.addEventListener('click', menuOpen);
    __closeMenuButton.addEventListener('click', menuClose);

}
document.addEventListener("DOMContentLoaded", init);

