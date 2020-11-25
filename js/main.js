$(function(){

    function blinkingForm() {
        if (document.querySelector('.bottom-form')) {
                // $('.bottom-form').addClass('animated');
        
                $('.header__btn').on('click', e => {
                    e.preventDefault();
                    $('.bottom-form').addClass('blinking');
                    setTimeout(function() {
                        $('.bottom-form').removeClass('blinking');
                    }, 5000);
                });
                $('.video-page__list').on('click', e => {
                    e.preventDefault();
                    if (e.target.closest('.link-green')) {
                        $('.bottom-form').addClass('blinking');
                        setTimeout(function() {
                            $('.bottom-form').removeClass('blinking');
                        }, 5000);
                    }
                });
        }
    }
    
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
                $('.main-page__list-head').removeClass('open');
            } else {
                $('.main-page__list-items').slideToggle(500); 
                $('.main-page__list-head').toggleClass('open');
            }
        });
    
    }

    function initPlyr() {
        if ($('.plyr-player')) {
            // $('.video-page').on('click', (e) => {
            //     if (e.target.closest('.plyr-player')) {
            //         console.log('clicked');
            //         return new Plyr({muted: true})
            //     }
            // });
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

    function initAccordion() {

        if( document.querySelector('.accordion')) {
            $('.page__items').on('click', e => {
                if (e.target.closest('.accordion__btn') || (e.target.closest('.page__item-title'))) {
                    e.target.closest('.page__item').classList.toggle('active');
                    const el = e.target.closest('.page__item').querySelector('.accordion__content');
                    $(el).slideToggle('500');
                }
            });

        }
    }

    function initScrollArrow() {
        if (document.querySelector('.scroll-top')) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset >= 500) {
                    $('.scroll-top').addClass('visible');
                } else {
                    $('.scroll-top').removeClass('visible');
                }
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
    initAccordion();
    initScrollArrow();
    blinkingForm();
});