$(window).scroll(function() {
    var sticky = $('.main_header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixedHeader');
    else sticky.removeClass('fixedHeader');
});

$('.navbar-togglerMobile').click(function() {
    $('body').toggleClass("OpenMobileMenus")
});
$("#closedMenusButtons").click(function() {
    $('body').toggleClass("OpenMobileMenus")
});
$(".MobileMenusSection ul li").click(function() {
    $('body').toggleClass("OpenMobileMenus")
});