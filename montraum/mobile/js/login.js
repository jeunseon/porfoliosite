const loginTab = $('.tabLogin-menu>a');
const tabLoginCont = $('.tabLogin-cont>div');
loginTab.click(function(){
    let tg = $(this);
    let i = tg.index();

    loginTab.removeClass('active');
    $(this).addClass('active');
 
    tabLoginCont.removeClass('active');
    tabLoginCont.eq(i).addClass('active');
    return false;
});

$('.membership-list-title').click(function(){
    $('.membership-list').removeClass('active');
    $(this).parent().toggleClass('active');
});