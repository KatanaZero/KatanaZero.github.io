$('.hamburger-menu').click(function () {
    $(this).toggleClass('icon-cross');
    $('.hamburger-menu').addClass('icon-menu');
    $('.hamburger-menu').removeClass('icon-cross');
    $('nav').removeClass('down');
});