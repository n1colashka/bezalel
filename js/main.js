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

    function initAccordion() {

        if( $('.accordion')) {
            $('.page__items').on('click', e => {
                if (e.target.closest('.accordion__btn') || (e.target.closest('.page__item-title'))) {
                    e.target.closest('.page__item').classList.toggle('active');
                    const el = e.target.closest('.page__item').querySelector('.accordion__content');
                    $(el).slideToggle('500');
                }
            });

            $('.accordion__btn').on('click', () => {
                // document.querySelector('.accordion__btn').closest('.page__item').classList.toggle('active');
                
                // const el = document.querySelector('.accordion__btn').closest('.page__item').querySelector('.accordion__content');
                
                // $(el).slideToggle('500');
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
});