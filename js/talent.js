/**
 * Created by xj on 2017/10/20.
 */
//firstli
$(".jilinav>li").click(function(){
     m=this.index();
    $(".jilinav>li").eq(m).find("a").addclass("firstli").siblings().removeclass("firstli");
    alert("1");
})