/**
 * Created by xj on 2017/10/11.
 */
//    banner切换
var num=2;
function show(){
    var bannerimg=document.getElementById("bannerimg");
    bannerimg.src="images/banner_0"+num+".png";
    if(num==3){
        num=1;
    }else{
        num++;
    }
}
console.log("1")
setInterval("show()",2000);
//左右按钮
var nums =$('.member_center').length;
var pages = Math.ceil(nums / 8);
var pre = "num_"+pages;
var j=0;
if(pages > 1){
    $(".rightimg").addClass(pre);
    //total:17 pages:2  0-7:1 8-15:2 9-16:3  (pages-1)*8 < pages*8 - 1
    $('.num_'+pages).click(function(){
        console.log(pages);
        console.log((pages-1)*8);
        console.log( pages*8 - 1);

        j+=8;              /*由于是四张图，因此每次单击按钮时，基数增加四*/
        if(j>=8*pages){
            j=1;
        }                   /*当达到极值时。基数清零*/
        for (var i=0;i<nums;i++){
            if((pages-1)*8 <= i && i <= pages*8 - 1){
                k=i+j;
                $(".member_center").eq(i).hide();
                $(".member_center").eq(k).show();

            }else{

            }
//                      return;
        }
    })
}


$("td").click(function(){
        alert("1")
    this.parent.css("background-color","#A7C0CC");

});



