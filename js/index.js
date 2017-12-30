// ---头部input框效果实现---
(function() {
    $(function() {
    var input=$('.header>.search input');
    var course=$('.header>.search a');
    var div = $('.header>.search div');
    var i=$('.header>.search>div i')
    input.focus(function() {
        course.hide();
        input.css('borderColor','red');
        div.css('borderColor','red');
        i.css({
            color:'red',
            backgroundColor:'pink'
        });
    }).blur(function () {
        if (input.val()==='') {
            course.show();
        }
        input.css('borderColor','');
        div.css('borderColor','');
        i.css({
            color:'',
            backgroundColor:''
        });
        
    })
})
})();

(function() {
    // -----banner侧边栏-----
    var arr=['前端开发','后端开发','移动开发','数据库','云计算&大数据','运维&测试','UI设计'];
    var lis=document.querySelectorAll('.content>.sidebar li');
    for (var i=0;i<lis.length;i++) {
        var a=document.createElement('a');
        lis[i].appendChild(a);
        a.innerText=arr[i]; 
    }
    // ----轮播图底部----
    var engineer=['web前端攻城狮','Java攻城狮','Android攻城狮','PHP攻城狮','iOS攻城狮'];
    var link=document.querySelectorAll('.banner>.content>.carouse .r-foot>ul a');
    for (var i=0;i<engineer.length;i++) {
        var p=document.createElement('p');
        link[i].appendChild(p);
        p.className='mColor';
        p.innerText=engineer[i]; 
    } 
    var engineer=['互联网时代最好的技术','健壮、安全、适用广泛','移动设备市场份额第一','世界最好的声音','可能是全球最好用的系统'];
    var link=document.querySelectorAll('.banner>.content>.carouse .r-foot>ul a');
    var lis=$('.banner>.content>.carouse .r-foot>ul li');
        for (var i=0;i<engineer.length;i++) {
        var p=document.createElement('p');
        link[i].appendChild(p);
        p.className='sColor';
        p.innerText=engineer[i]; 
    }
})();
(function() {
    $('.sidebar li').hover(function(){
        $('.content').children('.hide').show();
    },function(){
        $('.content').children('.hide').hide();
    })
    var lis = document.querySelectorAll('.banner>.content>.carouse .roasting ul li');
    var gt = document.querySelector('.banner>.content>.carouse .roasting .gt');
    var lt = document.querySelector('.banner>.content>.carouse .roasting .lt');
    var imgs = document.querySelector('.banner>.content>.carouse .roasting img');
    var roasting = document.querySelector('.banner>.content>.carouse .roasting');
    var arr=['carouse-1','carouse-2','carouse-3','carouse-4','carouse-5'];
    var num = 0;
    for (var i=0; i<lis.length;i++) {
        lis[i].index=i;
        lis[i].onclick=function () {
            for (var i=0; i<lis.length;i++) {
                lis[i].className='';
            }
        this.className='new';
        imgs.src ='images/' + arr[this.index] + '.jpg'; 
        }
       
    }
    gt.onclick=function () {
        num++;
        if (num>=arr.length) {
            num=0;
        }
        imgs.src ='images/' + arr[num] + '.jpg';
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        for (var i=0;i<lis.length;i++) {
            lis[i].className='';
        }
        lis[num].className='new';
    }
    lt.onclick=function () {
        num--;
        if (num<0) {
            num=arr.length-1;
        }
        imgs.src ='images/' + arr[num] + '.jpg';
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        for (var i=0;i<lis.length;i++) {
            lis[i].className='';
        }
        lis[num].className='new';
    }
        var timer = setInterval(function () {
            gt.click();
        },2000);
        roasting.addEventListener('mouseover',function(){
            clearInterval(timer);
        })
        roasting.addEventListener('mouseout',function(){
            timer = setInterval(function () {
            gt.click();
        },2000);
        })
})();

(function () {
var imgs = document.querySelectorAll('.recom img');
var h3 = document.querySelectorAll('.recom h3');
var p2 = document.querySelectorAll('.recom .p2');
var p3 = document.querySelectorAll('.recom .p3');
var span = document.querySelectorAll('.recom span');
var arr1 = ['zhan-1','zhan-2','zhan-3','zhan-4','zhan-5'];
var arr2 = ['Spring Boot企业微信点餐系统','手把手从0打造企业级电商平台-前端实践',
'360大牛全面解读PHP面试','BAT大咖助力 全面升级Android面试','vue2.0高级实战开发移动端音乐WebApp'];
var arr3 = [
{'s':'实战','level':'高级','num':'720'},
{'s':'实战','level':'中级','num':'299'},
{'s':'实战','level':'高级','num':'388'},
{'s':'实战','level':'中级','num':'999'},
{'s':'实战','level':'初级','num':'498'}
];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
for (var i=0;i<arr3.length;i++) {
    for (key in arr3[i]) {  
    span.innerText=arr3[i][key];
    }
}
})();  
(function () {
var imgs = document.querySelectorAll('.content-s .recom1 img');
var h3 = document.querySelectorAll('.content-s .recom1 h3');
var p2 = document.querySelectorAll('.content-s .recom1 .p2');
var p3 = document.querySelectorAll('.content-s .recom1 .p3');
var span = document.querySelectorAll('.content-s .recom1 span');
var arr1 = ['base-1','base-2','base-3','base-4','base-5'];
var arr2 = ['Spring Boot企业微信点餐系统','python 全栈初体验',
'PHP开发高可用高安全APP','聚焦Python分布式爬虫必学框架Scrapy打造搜索引擎','Get全栈技能点'];
var arr3 = [
{'s':'实战','level':'高级','num':'720'},
{'s':'实战','level':'中级','num':'299'},
{'s':'实战','level':'高级','num':'388'},
{'s':'实战','level':'中级','num':'999'},
{'s':'实战','level':'初级','num':'498'}
];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
for (var i=0;i<arr3.length;i++) {
    for (key in arr3[i]) {  
    span.innerText=arr3[i][key];
    }
}
})();
(function () {
var imgs = document.querySelectorAll('.content-s .recom2 img');
var h3 = document.querySelectorAll('.content-s .recom2 h3');
var p2 = document.querySelectorAll('.content-s .recom2 .p2');
var p3 = document.querySelectorAll('.content-s .recom2 .p3');
var span = document.querySelectorAll('.content-s .recom2 span');
var arr1 = ['zhan-3','zhan-4','base-8','base-9','base-10'];
var arr2 = ['7款经典游戏诠释高级算法','阿里D2前端技术论坛——2016初心',
'JMeter深入进阶性能测试体系 各领域企业实战','Elestic Search入门','Think PHP开发微信小程序商场打通全栈项目框架'];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
})();   
(function () {
var imgs = document.querySelectorAll('.content-s .recom3 img');
var h3 = document.querySelectorAll('.content-s .recom3 h3');
var p2 = document.querySelectorAll('.content-s .recom3 .p2');
var p3 = document.querySelectorAll('.content-s .recom3 .p3');
var span = document.querySelectorAll('.content-s .recom3 span');
var arr1 = ['zhan-3','zhan-4','base-8','base-9','base-10'];
var arr2 = ['7款经典游戏诠释高级算法','阿里D2前端技术论坛——2016初心',
'JMeter深入进阶性能测试体系 各领域企业实战','Elestic Search入门','Think PHP开发微信小程序商场打通全栈项目框架'];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
})();    
(function () {
var imgs = document.querySelectorAll('.content-s .recom4 img');
var h3 = document.querySelectorAll('.content-s .recom4 h3');
var p2 = document.querySelectorAll('.content-s .recom4 .p2');
var p3 = document.querySelectorAll('.content-s .recom4 .p3');
var span = document.querySelectorAll('.content-s .recom4 span');
var arr1 = ['zhan-3','zhan-4','base-8','base-9','base-10'];
var arr2 = ['7款经典游戏诠释高级算法','阿里D2前端技术论坛——2016初心',
'JMeter深入进阶性能测试体系 各领域企业实战','Elestic Search入门','Think PHP开发微信小程序商场打通全栈项目框架'];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
})(); 
(function () {
var imgs = document.querySelectorAll('.content-s .recom5 img');
var h3 = document.querySelectorAll('.content-s .recom5 h3');
var p2 = document.querySelectorAll('.content-s .recom5 .p2');
var p3 = document.querySelectorAll('.content-s .recom5 .p3');
var span = document.querySelectorAll('.content-s .recom5 span');
var arr1 = ['zhan-3','zhan-4','base-8','base-9','base-10'];
var arr2 = ['7款经典游戏诠释高级算法','阿里D2前端技术论坛——2016初心',
'JMeter深入进阶性能测试体系 各领域企业实战','Elestic Search入门','Think PHP开发微信小程序商场打通全栈项目框架'];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
})();    
(function () {
var imgs = document.querySelectorAll('.content-s .recom6 img');
var h3 = document.querySelectorAll('.content-s .recom6 h3');
var p2 = document.querySelectorAll('.content-s .recom6 .p2');
var p3 = document.querySelectorAll('.content-s .recom6 .p3');
var span = document.querySelectorAll('.content-s .recom6 span');
var arr1 = ['zhan-3','zhan-4','base-8','base-9','base-10'];
var arr2 = ['7款经典游戏诠释高级算法','阿里D2前端技术论坛——2016初心',
'JMeter深入进阶性能测试体系 各领域企业实战','Elestic Search入门','Think PHP开发微信小程序商场打通全栈项目框架'];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
})();
(function () {
var imgs = document.querySelectorAll('.content-s .recom7 img');
var h3 = document.querySelectorAll('.content-s .recom7 h3');
var p2 = document.querySelectorAll('.content-s .recom7 .p2');
var p3 = document.querySelectorAll('.content-s .recom7 .p3');
var span = document.querySelectorAll('.content-s .recom7 span');
var arr1 = ['zhan-3','zhan-4','base-8','base-9','base-10'];
var arr2 = ['7款经典游戏诠释高级算法','阿里D2前端技术论坛——2016初心',
'JMeter深入进阶性能测试体系 各领域企业实战','Elestic Search入门','Think PHP开发微信小程序商场打通全栈项目框架'];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
})();    
(function () {
var imgs = document.querySelectorAll('.content-s .recom8 img');
var h3 = document.querySelectorAll('.content-s .recom8 h3');
var p2 = document.querySelectorAll('.content-s .recom8 .p2');
var p3 = document.querySelectorAll('.content-s .recom8 .p3');
var span = document.querySelectorAll('.content-s .recom8 span');
var arr1 = ['zhan-3','zhan-4','base-8','base-9','base-10'];
var arr2 = ['7款经典游戏诠释高级算法','阿里D2前端技术论坛——2016初心',
'JMeter深入进阶性能测试体系 各领域企业实战','Elestic Search入门','Think PHP开发微信小程序商场打通全栈项目框架'];
var arr4 = ['￥399.00','￥498.00','￥299.00','￥588.00','￥668.00'];
for (var i=0;i<arr1.length;i++) {
    imgs[i].src='images/'+ arr1[i]+'.jpg';
}
for (var i=0;i<arr2.length;i++) {
    h3[i].innerText = arr2[i];
}
for (var i=0;i<arr4.length;i++) {
    p3[i].innerText = arr4[i];
}
})();