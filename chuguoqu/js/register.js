
var code;
createCode()//初始的验证
var personaldata=[];//注册的个人数据
var alldata=[];//注册的所有数据
//缓存器字符串转数组
var ret=[];
// localStorage.a=[]
// 一刷新先把缓存器的数据导出来
var allret=[];
console.log(localStorage.a)
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
console.log(allret)
// 验证码处理函数
function createCode()
{
    code = "";
    var codeLength = 6; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for(var i = 0; i < codeLength; i++)
    {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if(checkCode)
    {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}
function validateCode()
{
    var inputCode=document.getElementById("inputCode").value;
    if(inputCode.length <= 0)
    {
        $(".Verification-alert").css({display:"block"}).attr("请输入验证码！")
        Verificationsign=0;
        // alert("请输入验证码！");
    }
    else if(inputCode.toUpperCase() != code.toUpperCase())
    {
        $(".Verification-alert").css({display:"block"}).attr("请输入正确验证码")
        Verificationsign=0;

    }
    else
    {
        // alert("验证码正确！");
        $(".Verification-alert").css({display:"none"})
        $(".Interface-left form .d .form-succeed").css({display:"block"})
        Verificationsign=1;
    }
}

// 表单输入栏处理
$(".Interface-left form div>input").focus(function () {
    $(this).css({display:"block",color:"black"})
    $(this).parent().children("div").css({display:"block"})
    $(this).parent().children(".form-succeed").css({display:"none"})
})
$(".Account").blur(function () {
    $(".Account-alert").css({display:"none"})
    checkUser($(this).val(),1);

})
$(".passwork").blur(function () {
    $(".passwork-alert").css({display:"none"})
    checkUser($(this).val(),2);
})
$(".nickname").blur(function () {
    $(".nickname-alert").css({display:"none"})
    checkUser($(this).val(),3);
})
$(".Verification").blur(function () {
    $(".Verification-alert").css({display:"none"})
    validateCode();
})
$(".checkbox").click(function(){
    if($('.checkbox').is(':checked')) {
        sign=1;
        $(".checkbox-alert").css({display:"none"})
    }
    else {
        sign=0;
    }
})
var emailsign,passworksign,nicknamesign,sign,Verificationsign
$(".submit a").click(function () {
    if(emailsign==1){
        if(passworksign==1){
            if(nicknamesign==1){
                if(sign==1){
                    if(Verificationsign==1){
                        alldata=allret;
                        personaldata.push($(".Account").val(),$(".passwork").val(),$(".nickname").val())
                        var erro=0;
                        for(var i=0;i<alldata.length;i++){
                            if(personaldata[0]==alldata[i][0]){
                                erro=1;
                                break
                            }
                            if(personaldata[0]!=alldata[i][0]){
                                erro=0;
                            }
                        }
                        if(erro==1){
                            alert("此账号已注册")
                            $(".Account-alert").css({display:"block"})
                            $(".Interface-left form .a .form-succeed").css({display:"none"})

                        }
                        if(erro==0){
                            alldata.push(personaldata)
                            alert("注册成功")
                            $('.submit').children('a').attr('href','../home.html')
                        }


                        personaldata=[];
                        //把数据存入缓存器
                        localStorage.a=alldata
                        console.log(localStorage.a)
                    }
                }else {
                    $(".checkbox-alert").css({display:"block"})
                }
            }else {
                $(".nickname-alert").css({display:"block"})
            }
        }else{
            $(".passwork-alert").css({display:"block"})
        }
    }else {
        $(".Account-alert").css({display:"block"})
    }
})

// 表单验证函数
function checkUser(str,i){
    var email = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
    var telnum=/^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
    var passwork=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
    var nickname=/[a-z0-9[^A-Za-z0-9_\n\t]]*/;
    if(i==1){
        if(email.test(str)){
            $(".Account-alert").css({display:"none"})
            $(".Interface-left form .a .form-succeed").css({display:"block"})
            emailsign=1;
        }
        if(telnum.test(str)){
            $(".Account-alert").css({display:"none"})
            $(".Interface-left form .a .form-succeed").css({display:"block"})
            emailsign=1
        }
        else{
            $(".Account-alert").css({display:"block"})
            $(".Interface-left form .a .form-succeed").css({display:"none"})
            emailsign=0;
        }
    }
    if(i==2){
        if(passwork.test(str)){
            $(".passwork-alert").css({display:"none"})
            $(".Interface-left form .b .form-succeed").css({display:"block"})
            passworksign=1
        }else{
            $(".passwork-alert").css({display:"block"})
            $(".Interface-left form .b .form-succeed").css({display:"none"})
            passworksign=0
        }
    }
    if(i==3){
        if(nickname.test(str)){
            $(".nickname-alert").css({display:"none"})
            $(".Interface-left form .c .form-succeed").css({display:"block"})
            nicknamesign=1
        }else{
            $(".nickname-alert").css({display:"block"})
            $(".Interface-left form .c .form-succeed").css({display:"none"})
            nicknamesign=0
        }
    }
}
//协议弹框
$(".agreement").click(function () {
    $(".shield").css({display:"block"})
    $(".new-html").css({display:"block"})
})
$(".html-top a").click(function () {
    $(".shield").css({display:"none"})
    $(".new-html").css({display:"none"})
})





