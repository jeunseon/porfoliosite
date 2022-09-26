// header menu click slide
$('.header-menuBtn').click(function(){
    $('.header-menuWrap').css({left:0});
});
$('.header-close').click(function(){
    $('.header-menuWrap').css({'left':'-100%'});
});
// header-menu-tab
const tab = $('.tab-menu-list li');
const tabCont = $('.tab-cont>div');
tab.click(function(e){
    e.preventDefault();
    let tg = $(this);
    let i = tg.index();

    tab.removeClass('active');
    tg.addClass('active');

    tabCont.removeClass('active');
    tabCont.eq(i).addClass('active');
});

// category-menu arcodien-menu
$('.list-cont-item>a').click(function(){
    $('.list-cont-item').removeClass('active');
    $(this).parent('li').toggleClass('active');
    
});

$(window).on('load', function () {
    $("#load").hide();
});

$('.topBtn').click(function(){
    $('html, body').animate({scrollTop:0},400);
	return false;
});