/**
 * Created by Administrator on 2016/10/21.
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
            left: 110,
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
        $li2.children('a').css({
            color:'rgb(102, 102, 102)'
        })

    },
    mouseleave:function () {
        $li2.children('a').css({
            color:'rgb(255, 255, 255)'
        })
    }
});
$('nav').on({
    mouseleave:function () {
        $li2.children('a').css({
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
        $li1.children('a').css({
            color: 'rgb(102, 102, 102)'
        });
        $li2.children('a').css({
            color:'rgb(255, 255, 255)'
        });
        $Li6.css({
            left: 110,
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


$('.sidebar-con li').click(function () {
    $(this).addClass('current').siblings().removeClass('current')
});






// 滑轮到一定高度，右导航转换为fixed
$(document).scroll(function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollTop>580){
        $("#sideBar").css({
            position:'fixed',
            top: 20,
            right:60
        })
    }else {
        $("#sideBar").css({
            position:'relative',
            right:60,
        })
    }
});


$('.sidebar-con li').click(function () {
    var index= ($(this).index())+1;
    var tt =($('#day'+index+'').position().top)+500;
    $("body").animate({"scrollTop":tt},1000)
})


$(document).ready(function(){
$(document).scroll(function () {
    var scrollTop1=document.body.scrollTop||document.documentElement.scrollTop;
    // $('.content-wrap > div').each(function () {
    //     ta = $(this).position().top;
    //     console.log(ta[1])
    // })
    if (scrollTop1>=$('#day1').position().top){
        $('.sidebar-con li:nth-of-type(1)').addClass('current').siblings().removeClass('current');
        $("#sideBarWrap").scrollTop(0);
    }if (scrollTop1>=$('#day2').position().top){
        $('.sidebar-con li:nth-of-type(2)').addClass('current').siblings().removeClass('current');
        $("#sideBarWrap").scrollTop(200);
    }if (scrollTop1>=$('#day3').position().top){
        $('.sidebar-con li:nth-of-type(3)').addClass('current').siblings().removeClass('current');
        $("#sideBarWrap").scrollTop(400);
    }if (scrollTop1>=$('#day4').position().top){
        $('.sidebar-con li:nth-of-type(4)').addClass('current').siblings().removeClass('current');
        $("#sideBarWrap").scrollTop(600);
    }if (scrollTop1>=$('#day5').position().top){
        $('.sidebar-con li:nth-of-type(5)').addClass('current').siblings().removeClass('current');
        $("#sideBarWrap").scrollTop(800);
    }if (scrollTop1>=$('#day6').position().top){
        $('.sidebar-con li:nth-of-type(6)').addClass('current').siblings().removeClass('current');
        $("#sideBarWrap").scrollTop(1000);
    }if (scrollTop1>=$('#day7').position().top){
        $('.sidebar-con li:nth-of-type(7)').addClass('current').siblings().removeClass('current');
        $("#sideBarWrap").scrollTop(1200);
    }if (scrollTop1>=$('#day8').position().top){
        $('.sidebar-con li:nth-of-type(8)').addClass('current').siblings().removeClass('current');
        $("#sideBarWrap").scrollTop(1400);
    }
});







    $(".sidebar-con li").click(function(){
        $("#sideBarWrap").scrollTop(100);
    });
});

