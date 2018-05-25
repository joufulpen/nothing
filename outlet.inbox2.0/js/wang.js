    window.onload = function(){
      var data = [{
            id:'001',
            name:'包包',
            url:'../images/main_three_1.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:219.00,
            sale:'179.00',
            date:12,
        },{
            id:'002',
            name:'包包',
            url:'../images/main_four_4.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:429.00,
            sale:'349.00',
            date:14,
        },{
            id:'003',
            name:'包包',
            url:'../images/main_four_3.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:629.00,
            sale:'489.00',
            date:19,
        },{
            id:'004',
            name:'包包',
            url:'../images/main_five_6.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:209.00,
            sale:'199.00',
            date:10,
        },{
            id:'005',
            name:'包包',
            url:'../images/main_three_1.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:319.00,
            sale:'188.00',
            date:16,
        },{
            id:'006',
            name:'包包',
            url:'../images/main_three_2.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:223.00,
            sale:'169.00',
            date:21,
        },{
            id:'007',
            name:'包包',
            url:'../images/main_five_8.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:258.00,
            sale:'168.00',
            date:28,

        },{
            id:'008',
            name:'包包',
            url:'../images/main_three_1.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:214.00,
            sale:'149.00',
            date:20,
        },{
            id:'009',
            name:'包包',
            url:'../images/main_five_7.png',
            describe:'Decent Module Case Silicone Skin Cover for iPhone...',
            price:205.00,
            sale:'189.00',
                date:23,
            },{
                id:'010',
                name:'包包',
                url:'../images/main_three_1.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:289.00,
                sale:'189.00',
                date:26,
            },{
                id:'011',
                name:'包包',
                url:'../images/main_three_1.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:245.00,
                sale:'189.00',
                date:39,
            },{
                id:'012',
                name:'包包',
                url:'../images/main_three_1.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:222.00,
                sale:'186.00',
                date:34, 
            },{
                id:'013',
                name:'包包',
                url:'../images/main_five_8.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:325.00,
                sale:'180.00',
                date:3,
            },{
                id:'014',
                name:'包包',
                url:'../images/main_five_5.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:234.00,
                sale:'187.00',
                date:9,
            },{
                id:'015',
                name:'包包',
                url:'../images/main_five_7.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:213.00,
                sale:'189.00',
                date:5,
            },{
                id:'016',
                name:'包包',
                url:'../images/main_three_1.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:255.00,
                sale:'189.00',
                date:8,
            },{
                id:'017',
                name:'包包',
                url:'../images/main_three_1.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:228.00,
                sale:'189.00',
                date:34,
            },{
                id:'018',
                name:'包包',
                url:'../images/main_five_6.png',
                describe:'Decent Module Case Silicone Skin Cover for iPhone...',
                price:279.00,
                sale:'189.00',
                date:6,
                
            }];

            var main_con_b = document.getElementById('main_con_b');
            var btn1 = document.getElementById('btn1');
            var btn2 = document.getElementById('btn2');
            var btn3 = document.getElementById('btn3');
            var btn4 = document.getElementById('btn4');
            output();

           //添加到页面 
            function output(){
                var html ='<ul class="clearfix">';
                for(var i=0;i<data.length;i++){
                    html += '<li><a href="../html/details.html" id="one"><div><img src="' + data[i].url + '"/></div><p><input type="checkbox" />' + data[i].describe + '</p><p><span>' + data[i].price + '</span> <span>USD ' + data[i].sale + '</span></p><p>Save USD ' + (data[i].price-data[i].sale) +'</p></a></li>'
                }
                html += '</ul>';
                main_con_b.innerHTML = html;
            }
   
   



           function pJiang(){
                data.sort(function(a,b){
                    return a.sale - b.sale;
                })
            }
            function pJiang(){
                data.sort(function(a,b){
                    return b.sale - a.sale;
                })
            }
             function dSheng(){
                data.sort(function(a,b){
                    return a.date - b.date;
                })
            }
            function dJheng(){
                data.sort(function(a,b){
                    return b.date - a.date;
                })
            }

      
            
            btn1.onclick = function(){
                dSheng();
                output();
              
            }
            btn2.onclick = function(){
                pJiang();
                output();
               
            }   
            btn3.onclick=function(){
                dSheng();
                output();
               
            }  
            btn4.onclick=function(){
                dJheng();
                output();     
            }



    /*=========================================*/
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
             var speed=Math.ceil(to_scrollY/10);
             window.scrollBy(0, -speed);
             if(window.scorllY<=0||speed<8){
                 clearInterval(timer);
                
                scrollTo(0, 0)
               
             }
         },30)

     }

    

    /*=============================================================*/


}













