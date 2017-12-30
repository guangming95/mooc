$(function(){
    //视频播放js
    var video_play = $('.video_play');
    var video_file = $('.img_video');
    var video_close =$('.img_video>i');
    video_play.on('click',function () {
        console.log(11);
        video_file.show();
    });
    video_close.on('click',function () {
        console.log(12);
        video_file.hide();
    });





});


// 推荐学习模块
$(function () {
    var imgs = $('.img-box');
    imgs.eq(0).children('.img-up').css({
        background: 'url("images/web_info1.jpg") no-repeat center',
        backgroundSize: 'cover'
    });
    imgs.eq(0).children('.img-mid').css({
        background: 'url("images/web_info1.jpg") no-repeat center',
        backgroundSize: 'cover'
    });
    imgs.eq(0).children('.img-down').css({
        background: 'url("images/web_info1.jpg") no-repeat center',
        backgroundSize: 'cover'
    });
    imgs.eq(1).children('.img-up').css({
        background: 'url("images/web_info2.jpg") no-repeat center',
        backgroundSize: 'cover'
    });
    imgs.eq(1).children('.img-mid').css({
        background: 'url("images/web_info2.jpg") no-repeat center',
        backgroundSize: 'cover'
    });
    imgs.eq(1).children('.img-down').css({
        background: 'url("images/web_info2.jpg") no-repeat center',
        backgroundSize: 'cover'
    });
    imgs.mouseenter(function () {
        var index = $(this).index();
        $(this).children('.img-up').stop().css({
            transition: 'all 0.2s',
            transform: 'translate(0px,-10px)'
        });
        $(this).eq(index).children('.img-mid').stop().css({
            transition: 'all 0.2s',
            transform: 'translate(0px,-5px) scale(0.95,1)'
        });
        $(this).eq(index).children('.img-down').stop().css({
            transition: 'all 0.2s',
            transform: 'scale(0.9,1)'
        })
    });
    imgs.mouseout(function () {
        var index = $(this).index();
        $(this).eq(index).children('.img-up').stop().css({
            transition: 'all 0.2s',
            transform: 'translate(0px,0px)'
        });
        $(this).eq(index).children('.img-mid').stop().css({
            transition: 'all 0.2s',
            transform: 'translate(0px,0px)'
        });
        $(this).eq(index).children('.img-down').stop().css({
            transition: 'all 0.2s',
            transform: 'scale(1,1)'
        });
    });
})

$(function(){
    var shownav = $('#show-nav');
    var js_info = $('.js')
    $(window).scroll(function () {
        var jsTop = js_info.offset().top;
        var t = $(this).scrollTop();
        if(t > jsTop){
            $(shownav).show();
        }else{
            $(shownav).hide();
        }
    });

});


$(function(){
    //var shownav = $('#show-nav');
    var js_info = $('.js');
    var qdxb_info = $('.qdxb');
    var wdkc_info = $('.wdkc');
    var tjxxzh_info = $('.tjxxzh');
    var ytjd_info = $('.ytjd');
    var links = $('.txt-box>ul>li>a>i');
    console.log(links);

    $(window).scroll(function(){
        var t = $(this).scrollTop();
        if(t>=ytjd_info.offset().top){
            links.eq(4).addClass('active').parents('li').siblings().children('a').children('i').removeClass('active');
        }else if(t>=tjxxzh_info.offset().top){
            links.eq(3).addClass('active').parents('li').siblings().children('a').children('i').removeClass('active');
        }else if(t>=wdkc_info.offset().top){
            links.eq(2).addClass('active').parents('li').siblings().children('a').children('i').removeClass('active');
        }else if(t>=qdxb_info.offset().top){
            links.eq(1).addClass('active').parents('li').siblings().children('a').children('i').removeClass('active');
        }else if(t>=js_info.offset().top) {
            links.eq(0).addClass('active').parents('li').siblings().children('a').children('i').removeClass('active');
        }
    })



});





