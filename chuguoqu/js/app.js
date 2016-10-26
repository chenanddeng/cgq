/**
 * Created by Administrator on 2016/10/17.
 */
// 点击功能介绍按钮隐藏首页面，显示page1
var $intro = $('.intro-btn');
var $section1 = $('.section1');
var $s2Close =$('.s2-close')
$intro.click(function () {
    $section1.slideUp('slow')
});
$s2Close.on({
    mouseenter:function () {
        $(this).children('div').css({
            transform:'rotate(0deg)'
        }).next().css('display','block')
    },
    mouseleave:function () {
        $(this).children('.close-top').css({
            transform:'rotate(45deg)'
        }).next().css({
            transform:'rotate(-45deg)'
        }).next().css('display','none')
    },
    click:function () {
        $section1.slideDown('slow')
    }
});





// 滚轮事件
var nowpage = 0;
var lock = true;
var $section = $(".section ");
var $rotate = $('.rotate');
var $menu = $('#menu');
var $full = $('.fullpage-wrapper>div');
$(document).mousewheel(function (e,d) {
    if (lock == true) {
        // 获取当前页面page
        nowpage =nowpage - d;
        if (nowpage > 4) {
            nowpage = 4
        }
        if (nowpage < 0) {
            nowpage = 0
        }

        $section.animate({
            "top": nowpage * -100 + "%"
        }, 500);
        lock = false;
    }
    setTimeout(function() {
        lock = true;
    }, 1000);
    $full.eq(nowpage).find('img').css({
        opacity: 1,
        transition: 'all 1s'
    });
    $rotate.css({
        transform: 'rotate('+nowpage*(-90)+'deg)'
    });
    // 最后一页不显示rotate页面
    if (nowpage==4){
        $rotate.css('display','none')
    }else {
        $rotate.css('display','block')
    }
    $menu.children().removeClass('active').eq(nowpage).addClass('active');
});



$menu.children().click(function () {
   nowpage = $(this).index();
    $(this).addClass('active').siblings().removeClass('active')
    $rotate.css({
        transform: 'rotate('+nowpage*(-90)+'deg)'
    });
    $section.animate({
        "top": nowpage * -100 + "%"
    }, 500);
    // 最后一页不显示rotate页面
    if (nowpage==4){
        $rotate.css('display','none')
    }else {
        $rotate.css('display','block')
    }
    $full.eq(nowpage).find('img').css({
        opacity: 1,
        transition: 'all 1s'
    });
});
