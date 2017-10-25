/**
 * Created by xj on 2017/10/19.
 */
//$(".collect").click(function(){
//    $(this).attr("src","images/collect_2.png");
//    $(this).click(function(){
//        $(this).attr("src","images/sc.png");
//    })
//})
var img=document.getElementsByClassName("collect")[0];
   img.addEventListener("click",function(){
       if(img.getAttribute("src",2)=="images/sc.png") {
           img.src = "images/collect_2.png";
       }else{
           img.src="images/sc.png"
       }
   });