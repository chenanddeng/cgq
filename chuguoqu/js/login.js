/**
 * Created by Administrator on 2016/10/19.
 */
// iframe里面的控制：打开与关闭弹框HTML
var $bodySpan= $('body>span');
var $iframe = $('#basis-popup-iframe');
var $loginBtn = $('.login-btn');
$loginBtn.click(function () {
    $bodySpan.css('display','block');
    $iframe.attr("src", 'login.html');
    $iframe.load(function() {
        $('.loading-popups').css('display','none');
    });
});
$('.basis-close-btn').click(function () {
    $bodySpan.css('display','none')
});
$('#password').focus(function () {
    $(this).removeClass('password-value-tip');
}).blur(function () {
    if(this.value === ''){
        $(this).addClass('password-value-tip')
    }
});
// 登陆状态的切换
var  a = localStorage.a ;
var  ret = [];
var  allret = [];
if(localStorage.a!=undefined){
    for(var i=0;i<localStorage.a.split(",").length;i++)
    {
        if(i%3==0){
            ret.push(localStorage.a.split(",")[i],localStorage.a.split(",")[i+1],localStorage.a.split(",")[i+2])
            allret.push(ret);
            ret=[];
        }
    }
}



$('.popups-login-submit-btn').click(function () {
    var password = $('#password').val();
    var name = $('#username').val();
    for (var i = 0;i<allret.length;i++){
        if (allret[i][1]==password&&name==allret[i][0]){
            localStorage.ol = 1;                //页面刷新时是否保持等的标志位
            var ni = allret[i][2];
            $("body",parent.document).find('#8').css('display','none');
            $("body",parent.document).find('#9').css('display','none');
            $("body",parent.document).find('.login-box').css('display','none');
            $("body",parent.document).find('.login-after').css('display','block');
            $("body",parent.document).find('.user-name-box').html("<a href=''>"+ni+"</a>");
        }else {
            $('#errorUserName').css('display','block')
        }
    }

});

// 触碰个人名字头像时显示下拉菜单
$('.login-after').on({
    mouseenter:function () {
        if(!$('.user-control-box').is(":animated")){
            $('.user-control-box').slideDown('normal')
        }
    },
    mouseleave:function () {
        $('.user-control-box').slideUp('normal')
    }
});


 //页面加载时调用此函数，判断是否保持用户登陆状态
function login() {
    if (localStorage.ol == '222'){
        $("body",parent.document).find('.login-box').css('display','block');
        $("body",parent.document).find('.login-after').css('display','none');
    }else {

        $("body",parent.document).find('.login-box').css('display','none');
        $("body",parent.document).find('.login-after').css('display','block');
        $("body",parent.document).find('.user-name-box').html("<a href=''>"+ni+"</a>");
    }
}
// 点击退出按钮退出登陆状态
$('#Sign-out').click(function () {
    localStorage.ol ='222';
    $("body",parent.document).find('.login-box').css('display','block');
    $("body",parent.document).find('.login-after').css('display','none');
})

