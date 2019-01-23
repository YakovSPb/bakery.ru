$(function() {


    var windowWidth = $(window).width();
    if(windowWidth < 1200){

        $('#my-menu').mmenu({
            extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
            navbar: {
                title: '<div class="logo">Gustoso</div>'
            }
        });
    }

    var api = $("#my-menu").data("mmenu");
    api.bind('open:finish', function () {
        $('.hamburger').toggleClass('is-active');
    }).bind('close:finish', function () {
        $('.hamburger').removeClass('is-active');
    });




});
