$(function(){
    $('.link').click(function(){
        const target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });
});

$(function(){
    $('.navbar-brand').click(function(){
        const target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });
});