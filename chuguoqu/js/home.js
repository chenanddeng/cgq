/**
 * Created by Administrator on 2016/10/9.
 */
// 顶部导航移动动画
var $navListLi = $('#navList li');
var $Li6= $('#navList li:nth-of-type(6)');
var $li2= $('#navList li:nth-of-type(2)');
var $li1= $('#navList li:nth-of-type(1)');
var $country= $(".country-pop-box");
$navListLi.on({
    mouseenter:function () {
        $(this).children('a').css({
            color:'rgb(255, 255, 255)',
            transition: 'all .1s linear '
        });
        var  a = $(this).index();
        $Li6.css({
            left: a*110,
            transition: 'all .2s linear '
        });
        // if(!$Li6.is(':animated')){
        //     $Li6.animate({left: a*115},'fast');
        //     $Li6.animate({left: a*105},'fast');
        //     $Li6.animate({left: a*110},'fast');
        // }

    },
    mouseleave:function () {
        $(this).children().css({
            color:'rgb(102, 102, 102)',
        });
        $Li6.css({
            left: 0,
            transition: 'all .2s linear'
        })
        // if(a!=1||a!=2||a!=3||a!=4){
        //     $Li6.animate({left: -5},'fast');
        //     $Li6.animate({left: 5},'fast');
        //     $Li6.animate({left: 0},'fast');
        // }



    }
});
$li1.siblings().on({
    mouseenter:function () {
        $li1.children('a').css({
            color:'rgb(102, 102, 102)'
        })

    },
    mouseleave:function () {
        $li1.children('a').css({
            color:'rgb(255, 255, 255)'
        })
    }
});
$('nav').on({
    mouseleave:function () {
        $li1.children('a').css({
            color:'rgb(255, 255, 255)'
        })
    }
});



// 导航显示隐藏部分
$li2.on({
    mouseenter:function () {
        if (!$country.is(":animated")){
            $country.slideDown('fast')
        }
    }
});
$country.on({
    mouseenter:function () {
        $li2.children('a').css({
            color:'rgb(255, 255, 255)'
        });
        $li1.children('a').css({
            color:'rgb(102, 102, 102)'
        });
        $Li6.css({
            left: 110,
        })
    },
    mouseleave:function () {
        $li2.children('a').css({
            color: 'rgb(102, 102, 102)'
        });
        $li1.children('a').css({
             color:'rgb(255, 255, 255)'
        });
        $Li6.css({
            left: 0,
        });
        $(this).slideUp('fast');
    }
});

$li2.siblings().on({
    mouseenter:function () {
        if (!$country.is(":animated")){
            $country.animate({
                height: "hide"
            }, 200  );
        }
    }
});
// 国家图片阴影部分显示与隐藏
var $countryItem = $('.country-item');
var $shadowBox = $('.shadow-box');
$countryItem.on({
    mouseenter:function () {
        $(this).find($shadowBox).show("fade");
    },
    mouseleave:function () {
        $(this).find($shadowBox).hide("fade")
    }
});
// 花花世界边框阴影部分
var $recommendItem = $('.recommend-item');
$recommendItem.on({
    mouseenter:function () {
        $(this).find($shadowBox).show("fade");
    },
    mouseleave:function () {
        $(this).find($shadowBox).hide("fade")
    }
});
// 环球体验家阴影框显示隐藏部分
var $experienceItem = $('.experience-item');
$experienceItem.on({
    mouseenter:function () {
        $(this).find($shadowBox).show("fade");
    },
    mouseleave:function () {
        $(this).find($shadowBox).hide("fade")
    }
});
// 底部微信二维码显示隐藏部分
$('.other-contact-wx').on({
    mouseenter:function () {
        $('.wx-img-pop').show("fade");
    },
    mouseleave:function () {
        $('.wx-img-pop').hide("fade")
    }
});

// 滚轮事件当滚轮超过720的时候显示搜索栏
$(document).scroll(function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollTop>720){
        $(".header-search-box").show("fade")
    }else {
        $(".header-search-box").hide("fade")
    }
})
