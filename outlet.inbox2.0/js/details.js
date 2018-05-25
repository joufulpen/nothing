/* 
* @Author: Marte
* @Date:   2018-04-21 17:12:33
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-24 16:07:09
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




    //轮播图
    var banner=document.getElementById("banner");
    var prebtn=document.getElementById("pre");
    var nextbtn=document.getElementById("next");
    var bottomlb=document.getElementsByClassName('bottom-lb')[0];
    var imgs=bottomlb.getElementsByTagName('img');//console.log(imgs.length);
    var bflag=[0,0,0,0,0]
    // for(var i=0;i<imgs.length;i++){
    //     imgs[i].bindex=i;
    //     imgs[i].onclick=function(){
    //         banner.src=this.src;
    //         this.style.border='1px solid red';
    //         bflag[this.bindex]=1;
    //         for(var j=0;j<bflag.length;j++){
    //             if(bflag[j]==1&&j!=this.bindex){
                  
    //                imgs[j].style.border='0 none';
    //             }else if(bflag[j]==1&&j==this.bindex){
    //                  imgs[j].style.border='1px solid red';
    //             }
    //         }
    //     }
    // }

     detailsBanner(banner,nextbtn,prebtn,imgs);





    /*尺寸选中*/
    var size=document.getElementById('size');
    var sizes=size.getElementsByClassName('snum');
    var flag=[0,0,0,0,0];
    for(var i=0;i<sizes.length;i++){
        sizes[i].index=i;
        sizes[i].onclick=function(){
            this.style.border='1px solid red';
            flag[this.index]=1;
            for(var j=0;j<flag.length;j++){
                if(flag[j]==1&&j!=this.index){
                   //console.log('去掉原来的颜色');
                   sizes[j].style.border='1px solid #ccc';
                }else if(flag[j]==1&&j==this.index){
                     sizes[j].style.border='1px solid red';
                }
            }
         

        }
        
    }


    /*颜色选中*/
    var color=document.getElementById('color');
    var yanses=color.getElementsByClassName('yanse');
    var yflag=[0,0,0,0,0];
    for(var i=0;i<yanses.length;i++){
        yanses[i].yindex=i;
        yanses[i].onclick=function(){
            this.style.border='1px solid red';
            yflag[this.yindex]=1;
            for(var j=0;j<yflag.length;j++){
                if(yflag[j]==1&&j!=this.yindex){
                   //console.log('去掉原来的颜色');
                   yanses[j].style.border='1px solid #ccc';
                }else if(flag[j]==1&&j==this.yindex){
                     yanses[j].style.border='1px solid red';
                }
            }
           
        }
        
    }



    var qua=document.getElementById('qua');//console.log(qua);
    var shang=document.getElementById('shang');
    var xia=document.getElementById('xia');
    var count=0;
    var _qua=qua.value;//console.log(_qua);
     var quacount=document.getElementById('quacount');
     var price=document.getElementById('price');
     var sum=document.getElementById('sum');
     price=price.innerHTML;
     price=parseFloat(price)
    
    shang.onclick=function(){
        count++;
        qua.value=count;
         quacount.innerHTML=qua.value;
         sum.innerHTML=(qua.value*price).toFixed(2)+' py6';


    }
    xia.onclick=function(){
        count--;
        if(count<=0){
            count=0;
        }
        qua.value=count;
         quacount.innerHTML=qua.value;
          quacount.innerHTML=qua.value;
         sum.innerHTML=(qua.value*price).toFixed(2)+' py6';
    }
   
    var cgjyzm=document.getElementById('cgjyzm');
    var suiji=document.getElementById('suiji');//span 文本
    var btn=document.getElementById('btn');//提交按钮
    function getYzm(length){
        var str='0123456789abcdefghijklmnopqrstuvwxyz';
        var yzm='';
        var arr=str.split('');
        for(var i=0;i<length;i++){
            var index=parseInt(Math.random()*str.length);
            yzm+=arr[index];
        }
       return yzm;

    }
     suiji.innerHTML=getYzm(5);
    suiji.onclick=function(){
      suiji.innerHTML=getYzm(5);
    }
   
}
   
function detailsBanner(elements,nextbtn,prebtn,imgs){
    var i=0;
    var timer;
    var bflag=[0,0,0,0,0]
    timer=setInterval(function(){
        i++;

        elements.src="../images/lhMain"+i+".png";
        imgs[i-1].style.border='1px solid red';
        bflag[i-1]=1;
        for(var j=0;j<bflag.length;j++){
            if(bflag[j]==1&&j!=i-1){
              
               imgs[j].style.border='0 none';
            }else if(bflag[j]==1&&j==i-1){
                 imgs[j].style.border='1px solid red';
            }
        }

         if(i%5==0){
            i=0;
        }
        console.log(i);
    },1000)


 nextbtn.onclick=function(){
        clearInterval(timer);
        i++;
       if(i>5){
        i=1;
       }
       console.log('n:'+i);
       elements.src="../images/lhMain"+i+".png";
       imgs[i-1].style.border='1px solid red';
       bflag[i-1]=1;
       for(var j=0;j<bflag.length;j++){
           if(bflag[j]==1&&j!=i-1){
             
              imgs[j].style.border='0 none';
           }else if(bflag[j]==1&&j==i-1){
                imgs[j].style.border='1px solid red';
           }
       }
       if(i%5==0){
            i=0;
        }

    }
    prebtn.onclick=function(){
        clearInterval(timer);
       i--;
       if(i<=0){
                i=5;
            }

       console.log('p:'+i);
       elements.src="../images/lhMain"+i+".png";
       imgs[i-1].style.border='1px solid red';
       bflag[i-1]=1;
       for(var j=0;j<bflag.length;j++){
           if(bflag[j]==1&&j!=i-1){
             
              imgs[j].style.border='0 none';
           }else if(bflag[j]==1&&j==i-1){
                imgs[j].style.border='1px solid red';
           }
       }
        
    }

    elements.onmouseover=function(){
        clearInterval(timer);
    }
    elements.onmouseout=function(){
        timer=setInterval(function(){
            i++;
            elements.src="../images/lhMain"+i+".png";
            imgs[i-1].style.border='1px solid red';
            bflag[i-1]=1;
            for(var j=0;j<bflag.length;j++){
                if(bflag[j]==1&&j!=i-1){
                  
                   imgs[j].style.border='0 none';
                }else if(bflag[j]==1&&j==i-1){
                     imgs[j].style.border='1px solid red';
                }
            }

             if(i%5==0){
                i=0;
            }
            console.log(i);
        },1000)
    }

}



