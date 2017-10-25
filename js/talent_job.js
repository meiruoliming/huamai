/**
 * Created by xj on 2017/10/23.
 */

$(".allbtn").click(function(){
    alert("1")
    $("input[name='zhiwei']").attr('checked',true)
})
$(".removebtn").click(function(){
    alert("2")
    $("input[name='zhiwei']:checked").each(function(){
//
        $(this).parent().parent().remove();
    })
})
