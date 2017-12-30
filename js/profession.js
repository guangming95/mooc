// ======================== 廖国藩  ===================
$(function () {
    var $link = $(".info-nav2>a");
    //找到每一个课程名称
    var $main1 = $(".main_info");
    //找到文字标签
    var item = $('.main>.container>.info-nav2-item');
    //找到对应课程div

    $link.mouseenter(function () {
        console.log(11);
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $main1.eq(index).addClass("active").siblings().removeClass("active");
    });
    $link.on('click', function () {
        var index = $(this).index();
        $(this).children('em').addClass('active').end().siblings().children('em').removeClass('active');
        item.eq(index).addClass('active').siblings().removeClass('active');
        return false;
    });

});


$(function () {
    //二次循环变量  首先遍历每个div，再依次遍历每个div的小块，依次改变他们的图片，背景、文字
    var info_item = $('.main>.container>.info-nav2-item');
    //遍历元素并设置图片
    for (var j = 0; j < info_item.length; j++) {
        var imgs = info_item.eq(j).children('.item').children('.img-box');
        for (var i = 1; i <= imgs.length; i++) {
            imgs.eq(i - 1).children('.img-up').css({
                background: 'url("images/web_info' + i + '.jpg") no-repeat center',
                backgroundSize: 'cover'
            });
            imgs.eq(i - 1).children('.img-mid').css({
                background: 'url("images/web_info' + i + '.jpg") no-repeat center',
                backgroundSize: 'cover'
            });
            imgs.eq(i - 1).children('.img-down').css({
                background: 'url("images/web_info' + i + '.jpg") no-repeat center',
                backgroundSize: 'cover'
            });
        }
    }
    //利用循环遍历 给每个图片增加鼠标移入跟移开动画效果
    for (var j = 0; j < info_item.length; j++) {
        var imges = info_item.eq(j).children('.item').children('.img-box');
        imges.mouseenter(function () {
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
        imges.mouseout(function () {
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

    }

});

