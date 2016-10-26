/**
 * Created by Administrator on 2016/10/12.
 */
// 日历部分
$(function() {
    $( "#from" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        onClose: function( selectedDate ) {
            $( "#to" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        onClose: function( selectedDate ) {
            $( "#from" ).datepicker( "option", "maxDate", selectedDate );
        }
    });
});
$( "#from" ).datepicker({ dateFormat: 'yy-mm-dd' });
$( "#to" ).datepicker({ dateFormat: 'yy-mm-dd' });
// 入住天数计算
// var days1,days2;
// $('#to').click(function () {
//     var  days1=$('#from').val();
//
// });
// $(document).click(function () {
//     var  days2=$('#to').val();
//     var day=days2-days1;
// })
//jq ui title显示与隐藏
$('.b-form-group__content').tooltip({
    classes: {
        "ui-tooltip": "ui-corner-all "
    },
    track: true
});

$('.unified-postcard_overlay a').tooltip({
    classes: {
        "ui-tooltip": "ui-corner-all "
    },
    track: true
});
// 触碰酒店框改变样式
$('.unified-postcard ').on({
    mouseenter:function () {
        $(this).css({
            border:'1px solid rgb(254,186,2)'
        })
    },
    mouseleave:function () {
        $(this).css({
            border: '1px solid #d4dada'
        })

    }
});

$('.unified-postcard_content').on({
    mouseenter:function () {
        $(this).find('.unified-postcard_overlay').css({
            background: 'linear-gradient(to bottom,rgba(0,10,51,0.65) 0,rgba(0,10,51,0) 100%)'
        })
    },
    mouseleave:function () {
        $(this).find('.unified-postcard_overlay').css({
            background: 'linear-gradient(to bottom,rgba(0,30,71,0.65) 0,rgba(0,30,71,0) 100%)'
        })

    }
});
$('.a-tit').on({
    mouseenter:function () {
        $('.tit-wap').css({
            opacity:1,
            transition: 'all .1s linear '
        })
    },
    mouseleave:function () {
        $('.tit-wap').css({
            opacity:0,
            transition: 'all .1s linear '
        })
    }
})