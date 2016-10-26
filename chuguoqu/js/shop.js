/**
 * Created by Administrator on 2016/10/17.
 */
// 顶部导航移动动画
var $navListLi = $('#navList li');
var $Li6= $('#navList li:nth-of-type(6)');
var $li2= $('#navList li:nth-of-type(2)');
var $li1= $('#navList li:nth-of-type(4)');
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
            left: 330,
            transition: 'all .2s linear'
        })

        // $Li6.animate({left: 0},'fast');


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
            $country.animate({
                height: "show"
            }, 200  );
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
            left: 330,
        });
        $(this).animate({
            height: "hide"
        }, 200  );
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