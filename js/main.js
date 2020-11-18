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
        $('body').on('click', (e) => {
            if ((e.target.closest('.main-page__list-items'))) {

            }
            else if (!(e.target.closest('.main-page__list-head'))) {
                $('.main-page__list-items').slideUp(500); 
            } else {
                $('.main-page__list-items').slideToggle(500); 
            }
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

    function initModal() {
        $('.modal-btn').on('click', (e) => {
            e.preventDefault();
            $('html').addClass('block-scroll');
            $('.modal').slideToggle('500');
        });
        $('.modal__close').on('click', () => {
            $('html').removeClass('block-scroll');
            $('.modal').slideUp('500');
        });
    }

    function initAnimations() {
        if ($('.animated')) {
            document.addEventListener('aos:in:page-foot', () => {
                $('.video-page__foot').addClass('animated');
            });
            document.addEventListener('aos:out:page-foot', () => {
                $('.video-page__foot').removeClass('animated');
            });
        }
    }

    
    if (window.innerWidth <= 768) {
    }

    initMenu();
    initMainPageList();
    initPlyr();
    initScrollBtn()
    initModal();
    // initAnimations();
});