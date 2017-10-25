/**
 * Created by xj on 2017/10/19.
 */
$(".namebtn").click(function(){
    $(".mask").show();
    alert("1")
});
$(".cancelbtn").click(function(){
    alert("你确定要取消报名吗?")
    $(".mask").hide();
});
$(".okbtn").click(function(){
    window.location.href="shalong_detail.html";
})
