(function(){
        var nowimg=0;
        var $rightBtn= $(".rightBtn")
        var $leftBtn= $(".leftBtn")
        var lis=$(".bannerto-in li")
        var $banner=$(".bannerto")
        var $circle=$(".circle span")
        var animateTime=700;
        var timer=null;
        var setTimer=4000;
        var $bannerIn=$(".bannerto .bannerto-in")
        $(".bannerto-in li:first").clone().appendTo(".bannerto-in")
        // rightBtn
        $rightBtn.click(rightBtnfunc)
            function rightBtnfunc() {
            if(!$bannerIn.is(":animated")){
                if(nowimg<lis.length-1){
                nowimg++
                putong();
            }else{
                nowimg=0;
                $bannerIn.animate({"left":lis.length*-1960}, animateTime,function(){
                   $bannerIn.css("left",0)
                 })
            }
            $circle.eq(nowimg).addClass('cur').siblings().removeClass("cur")
            }
        }
        // leftBtn
        $leftBtn.click(function() {
          if(!$bannerIn.is(":animated")){
            if(nowimg>0){
            nowimg--
            putong();
          }else{
            nowimg=lis.length-1
            $bannerIn.css("left",lis.length*-1960)
           putong();
          }
           $circle.eq(nowimg).addClass('cur').siblings().removeClass("cur")
          }
        });
        // 小圆点业务
        $circle.click(function() {
            nowimg=$(this).index()
            $bannerIn.animate({"left":nowimg*-1960}, animateTime)
             $circle.eq(nowimg).addClass('cur').siblings().removeClass("cur")
        });
        function putong(){
            $bannerIn.animate({"left":nowimg*-1960}, animateTime)
        }
        timer=setInterval(rightBtnfunc,setTimer)
        $banner.mouseenter(function() {
           clearInterval(timer)
        });
        $banner.mouseleave(function() {
           clearInterval(timer)
           timer=setInterval(rightBtnfunc,setTimer)
        });
        })();