/**1
    * Created by xj on 2017/10/16.
*/

var num=2;
setInterval(function(){
    $(".slbanner").attr("src","images/shalong_0"+num+".jpg")
    console.log(num);
    $(".num>li").eq(num-1).css("background","#5984B8").siblings().css("background","white");
    if(num==4){
        num=1;
    }else{
        num++;
    }
},2000);
$(".num>li").click(function(){
    num=$(this).index();
    $(".num>li").css("background","white")
    $(this).css({"background":"#5984B8"});
    $(".slbanner").attr("src","images/shalong_0"+num+".jpg")
})




