
//头部
$(function(){
    //头部 input 变量
    var search_input = $('#search>input');
    // console.log(search_input);
    var ems = $('#search>em');
    var app = $('#nav-top-right .app');
    var buy = $('#nav-top-right .buy');
    //搜索框获取焦点事件
    search_input.focus(function () {
        // console.log(11);
        $(this).val('');
        ems.stop().fadeOut(300);
        search_input.parent().css({borderColor:'#f01414'});
        search_input.parent().next().css({background: 'rgba(255,0,0,.5)',color: '#fff'});
    });
    //搜索框失去焦点事件
    search_input.blur(function () {
        if($(this).val() == '') {
            $(this).val('请输入想搜索的内容...');
        }
        ems.stop().fadeIn(300);
        search_input.parent().css({borderColor:'#6a7076'});
        search_input.parent().next().css({background: 'transparent',color: '#8a8f93'});
    });
    //搜索放大镜鼠标停留效果
    search_input.parent().next().mouseenter(function () {
        $(this).css({background: 'rgba(255,0,0,.5)',color: '#fff'});
    });
    search_input.parent().next().mouseout(function () {
        $(this).css({background: 'transparent',color: '#8a8f93'});
    });
    //下载app鼠标效果
    app.mouseenter(function () {
        $(this).children('div').stop().fadeIn(200);
    });
    app.mouseout(function () {
        $(this).children('div').stop().fadeOut(200);
    });
    //购物车鼠标效果
    buy.mouseenter(function () {
        $(this).children('div').stop().fadeIn(200);
    });
    buy.mouseout(function () {
        $(this).children('div').stop().fadeOut(200);
    });


    //侧面导航js
    var aside_li = $('.aside li');
    var return_top = $('.return_top');
    aside_li.mouseenter(function () {
        $(this).children(0).hide().next().show();
    });
    aside_li.mouseleave(function () {
        $(this).children(0).show().next().hide();
    });

    $(window).scroll(function () {
        var t = $(this).scrollTop();
        if(t>100){
            $('.return_top').show();
        }else{
            $('.return_top').hide();
        }
    });

    return_top.on('click',function () {
       $('body,html').stop().animate({
            scrollTop:0
       });
    });


});
