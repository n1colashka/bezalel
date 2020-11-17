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

    function initPlyr() {
        if ($('.plyr-player')) {
            const players = Array.from(document.querySelectorAll('.plyr-player')).map(p => new Plyr(p, {muted:true}));
        }
    }

    function initScrollBtn() {
            $('.scroll-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
    }
    
    
    if (window.innerWidth <= 768) {
    }

    initMenu();
    initMainPageList();
    initPlyr();
    initScrollBtn()
    
});