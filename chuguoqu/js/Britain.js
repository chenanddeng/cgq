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
            left: 0,
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
// 页码的选择
function page(shuju) {
    $(".pagination-list li ").remove();
    for(var i=0;i<shuju.length/12;i++){
        $("<li><a></a></li>").appendTo(".pagination-list")
        $(".pagination-list li ").eq(i).children().html(i+1)
    }
    if(shuju.length/12<1){
        $(".pagination-list li ").remove();
    }
    if(shuju.length/12>1){
        $("<li class='next'><a href='javascript:;'>N</a><span class='pagination-list-next'></span></li>").appendTo(".pagination-list")
    }
    $("<li class='before'><a href='javascript:;'>F</a><span class='pagination-list-befor'></span></li>").prependTo(".pagination-list")
    $(".before").css({display:"none"})

}

//12轮播图切换选择处理
function carousel(shuju) {
    var n=0;
    $(".pagination-list li a").click(function () {
        $(".country-product-list li").css({display:"none"})
        $(this).parent().addClass("selected").siblings().removeClass("selected")
        var pageName=$(this).html();
        if(pageName==1){
            $(".before").css({display:"none"})
        }
        if(pageName>1){
            $(".before").css({display:"block"})
        }


        // 页码上一页和下一页处理
        if(pageName=="N"){
            n++;
            $(".country-product-list li").slice(n*12,(n+1)*12).css({display:"block"})
            $(".pagination-list li").eq(n+1).addClass("selected")
            if(n>shuju/12-1){
                $(".next").css({display:"none"})
            }
            if(n>=1){
                $(".before").css({display:"block"})
            }
        }
        if(pageName=="F"){
            n--;
            $(".country-product-list li").slice((n)*12,(n+1)*12).css({display:"block"})
            $(".pagination-list li").eq(n+1).addClass("selected")
            if(n==0){
                $(".before").css({display:"none"})
            }
            if(n<shuju/12-1){
                $(".next").css({display:"block"})
            }
        }
        for(var j=0;j<shuju/12;j++){
            if(pageName==j+1){
                $(".country-product-list li").slice(j*12,(j+1)*12).css({display:"block"})
                n=pageName-1
            }
            if(pageName<3){
                $(".next").css({display:"block"})
            }
        }
    })
    $(".pagination-list li").eq($(".pagination-list li").length-2).click(function () {
        $(".next").css({display:"none"})
    })

}
///产品类型点击后背景显示
function selet() {

    $(".product-property-list a").each(function (i) {
        $(this).click(function () {
            $(".pagination-list li:nth-of-type(1)").addClass("selected")
            $(this).css({"color":"white"})
            $(this).addClass("select").parent().siblings().children("a").removeClass("select").css({"color":"black"})
        })
        $(this).mouseenter(function () {
            $(this).css({"font-weight":"700"}).parent().siblings().children("a").css({"font-weight":"100"})
        })
    })

}
// 类型筛选
function typeSelection(shuju) {
    var typeDate=[];
    $(".product li a").click(function (i) {
        console.log("a")
        var a=$(this).html()
        typeDate.length=0;
        $(".product-list-item").remove()
        $.each(shuju, function (i, value) {

            var $li = $(template('detailList', value));
            if(a=='景区门票'){
                if (value.secondCategoryId==7) {
                    typeDate.push(value)
                    $li.appendTo(".country-product-list")
                }
            }
            if(a=='休闲娱乐'){

                if (value.secondCategoryId==6) {
                    typeDate.push(value)
                    $li.appendTo(".country-product-list")
                }
            }
            if(a=='当地美食'){

                if (value.secondCategoryId==5) {
                    typeDate.push(value)
                    $li.appendTo(".country-product-list")
                }
            }
            if(a=='1日游'){

                if (value.secondCategoryId==8) {
                    typeDate.push(value)
                    $li.appendTo(".country-product-list")
                }
            }
            if(a=='WiFi通讯'){

                if (value.secondCategoryId==106) {
                    typeDate.push(value)
                    $li.appendTo(".country-product-list")
                }
            }
            if(a=='全部'){
                typeDate.push(value)
                $li.appendTo(".country-product-list")

            }

        })
        $(".country-product-list li").css({display:"none"})
        $(".country-product-list li").slice(0,12).css({display:"block"})
        page(typeDate);
        carousel(typeDate.length);
        $(".pagination-list li:nth-of-type(2)").addClass("selected")//城市点击初始页显示
    })
}
// 产品类型初始化渲染
$.ajax({
    url: "../json/Britain.json",
    dataType: "json",
    method: "get",
    success: function(data) {
        $.each(data.categoryList, function(j, value) {
            var $id=value.id
            var $li = $(template('categoryList', value));
            $.each(data.items,function (j,value) {
                if($id==value.categoryId){
                    $li.appendTo(".product")
                }
            })
            selet();
            page(data.items)
        });
    },
    error: function() {
        alert("服务器错误");
    }
});
// 产品图片的渲染
$.ajax({
    url: "../json/Britain.json",
    dataType: "json",
    method: "get",
    success: function(data) {
        var newDate=[]
        var $ll;
        var cityName;
        $(".pagination-list li:nth-of-type(2)").addClass("selected")
        $.each(data.items, function(i, value) {
            var $li = $(template('detailList', value));
            $li.appendTo(".country-product-list")
            $(".country-product-list li").css({display:"none"})
            $(".country-product-list li").slice(0,12).css({display:"block"})

        });

        // carousel(data.items.length)//轮播切换选择
        $(".place li a").click(function () {
            $(".product li:nth-of-type(1) a").addClass("select").siblings().removeClass("select")
            newDate.length=0;
            $(".product-list-item").remove()
            $(".product li:nth-of-type(1)").siblings().remove()
            cityName=$(this).html()
            $.each(data.items, function(i, value) {
                var $li = $(template('detailList', value));
                // 城市的选择
                if(value.cityName==cityName){
                    newDate.push(value)
                    $li.appendTo(".country-product-list")
                    $(".country-product-list li").css({display:"none"})
                    $(".country-product-list li").slice(0,12).css({display:"block"})
                    page(newDate)
                }
                if(newDate.length==0){
                    $(".pagination-list li").css({display:"none"})
                    $(".result-none ").css({display:"block"})
                    $("#noResultMsg").html(value.countryName+cityName)
                }else {
                    $(".result-none ").css({display:"none"})
                }

                // 全部的选择
                if(cityName=='全部'){
                    $li.appendTo(".country-product-list");
                    $(".country-product-list li").css({display:"none"})
                    $(".country-product-list li").slice(0,12).css({display:"block"})
                    newDate.push(value)
                    page(newDate)
                }
            });

            carousel(newDate.length)//轮播切换选择


            $.each(data.categoryList, function(j, value) {
                var $id = value.id
                var $li = $(template('categoryList', value));
                $.each(newDate, function (j, value) {
                    if ($id == value.categoryId) {
                        $li.appendTo(".product")
                    }
                })
            })
            selet();
            typeSelection(newDate);//目的地和产品类型的选择
            $(".pagination-list li:nth-of-type(2)").addClass("selected")//城市点击初始页显示

        })
        typeSelection(data.items);//网页初始化的选择
        carousel(data.items.length)//轮播切换选择


    },
    error: function() {
        alert("服务器错误");
    }
});
/////上面部分是中间筛选

//下面是右侧效果函数
$(".app-img").mouseenter(function () {
    $(".app-text").css({display:"block"})
    $(".app-img").css({display:"none"})
    $(".qr-code").css({display:"block"})
})
$(".app-text").mouseleave(function () {
    $(".app-text").css({display:"none"})
    $(".app-img").css({display:"block"})
    $(".qr-code").css({display:"none"})
})
$(".opinion-img").mouseenter(function () {
    $(".opinion-text").css({display:"block"})
    $(".opinion-img").css({display:"none"})
})
$(".opinion-text").mouseleave(function () {
    $(".opinion-text").css({display:"none"})
    $(".opinion-img").css({display:"block"})
})
$(".goTop").mouseenter(function () {
    $(".goTop").css({background: '#dc244b url("http://www.chuguoqu.com/images/cartBar.png") 8px -235px no-repeat'})

})
$(".goTop").mouseleave(function () {
    $(".goTop").css({background: 'white url("http://www.chuguoqu.com/images/cartBar.png") 8px -210px no-repeat'})
})
//点击购物车
var clickNum=0;
$(".shopping-cart-menu").click(function () {
    if(clickNum==0){
        $(".cart-bar-container").css({right:"0px"})
    }
    clickNum++;
    if(clickNum>1){
        $(".cart-bar-container").css({right:"-240px"})
        clickNum=0;
    }

})



