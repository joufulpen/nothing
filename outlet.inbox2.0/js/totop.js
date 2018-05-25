/* 
* @Author: Marte
* @Date:   2018-04-23 15:36:05
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-23 15:36:46
*/

window.onload=function(){
     //吸顶菜单
     var fyxheader=document.getElementById("fyx-header");
     var fyxcontainer=fyxheader.getElementsByClassName('container')[0];
     //console.log(fyxcontainer)
     window.onscroll=function(){
         var scrollY=window.scrollY;
         
         if(scrollY>=32){
            fyxcontainer.className="container clearfix fix"
         }else{
             fyxcontainer.className='container clearfix';
         }
     }
     //回到顶部
    var totop=document.getElementById("totop")
     totop.onclick=function(){
         
         var timer=setInterval(function(){
             var to_scrollY=window.scrollY;
             // console.log(to_scrollY);

             var speed=Math.ceil(to_scrollY/10);
             window.scrollBy(0, -speed);
             if(window.scorllY<=0||speed<8){
                 clearInterval(timer);
                
                scrollTo(0, 0)
               
             }
         },30)

     }



    
}