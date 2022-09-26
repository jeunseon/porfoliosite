$('.brand-item a').each(function(){   
    let brandImg = $(this);
    let brandStory = $(brandImg.attr('href'));  
    brandImg.click(function(){
        $('.brand-cont').css({display:'none'});
        brandStory.slideDown(500);
        $('.brand-item a').removeClass('active');
        brandImg.addClass('active');

    });
    $('img.close').click(function(){
        brandStory.slideUp(200);
        $('.brand-item a').removeClass('active');
    });
});
