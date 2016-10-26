/**
 * Created by Administrator on 2016/10/25.
 */
$('#num').click(function () {
    $('#peopleNumPop').slideDown('fast')
});
$(document).on("click", "*", function () {
    $('#peopleNumPop').slideUp('fast')
});
$("#num").click(function () {
    return false
});
$('#peopleNumPop').click(function () {
    return false
});

//输入人数值
var a = 1;//成人数量
var b = 0;//儿童数量
$('#A-reduce').click(function () {
    a--;
    if (a <= 0) {
        a = 0 ;
        $('#adult').val(0)
    } else {
        $('#adult').val(a)
    }

});
$('#A-add').click(function () {
    a++;
    $('#adult').val(a)
});


$('#B-reduce').click(function () {
    b--;
    if (b <= 0){
        b = 0;
        $('#Baby').val(b)
    }else {
        $('#Baby').val(b)
    }
});
$('#B-add').click(function () {
    b++;
    $('#Baby').val(b)
});
$('.num-sure-btn').click(function () {
    var aa =$('#adult').val();
    var bb =$('#Baby').val();
    $('#peopleNumPop').slideUp('fast');
    $('#num').val('成人:'+aa+'      儿童：'+bb+'')
});




$('.app-tip').on({
    mouseenter:function () {
        $('.app-tip-pop').fadeIn('fast')
    },
    mouseleave:function () {
        $('.app-tip-pop').fadeOut('fast')
    }
});

var nowpage = 0;
$('.pdp-intro-next').click(function () {
    if (nowpage<3){
        nowpage++;
        console.log(nowpage);
       $('#pdpIntroList').animate({"left":nowpage*-760})
        $('.pdp-intro-control a').eq(nowpage).addClass('selected').siblings().removeClass("selected")
    }else {
        nowpage=0;
        $('#pdpIntroList').animate({"left":4*-760}, 0,function(){
            $('#pdpIntroList').css("left",0)
        })
        $('.pdp-intro-control a').eq(nowpage).addClass('selected').siblings().removeClass("selected")
    }
    
});
$('.pdp-intro-prev').click(function () {
    if (nowpage>0){
        nowpage--;
        $('#pdpIntroList').animate({"left":nowpage*-760})
    }else {
        nowpage=4-1;
        $('#pdpIntroList').css("left",4*-760)
        $('#pdpIntroList').animate({"left":nowpage*-760})
    }
})