$(function(){

    
    function initMenu() {
        $('.header__menu-btn').on('click', () => {
            $('.header__menu').slideDown(500);
            $('html').addClass('block-scroll');
        });
        $('.header__menu-close').on('click', () => {
            $('.header__menu').slideUp(500);
            $('html').removeClass('block-scroll');
        });
    }

    function initMainPageList() {
        $('.main-page__list-head').on('click', () => {
            $('.main-page__list-items').slideToggle(500); 
        });
    }
    
    
    if (window.innerWidth <= 768) {
    }

    initMainPageList();
    initMenu();
    
});