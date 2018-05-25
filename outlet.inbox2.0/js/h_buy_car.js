document.addEventListener('DOMContentLoaded',function(){
// 创建JSON数组
    let h_goodslist =[
    {"id":"ID:#24234","qty":1,"price":188,"now_price":99.8,"title":"Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee","size":"Size:Default","imgurl":"../images/bag1.png"},{"id":"ID:#24234","qty":2,"price":286,"now_price":168,"title":"Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee","size":"Size:Default","imgurl":"../images/bag2.png"},{"id":"ID:#24234","qty":3,"price":89.89,"now_price":69.9,"title":"Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee","size":"Size:Default","imgurl":"../images/bag3.png"},{"id":"ID:#24234","qty":2,"price":686,"now_price":299.8,"title":"Gucci Dressage Original GG Canvas Tote Bag 296850 Coffee","size":"Size:Default","imgurl":"../images/bag1.png"}]

// 获取元素
let h_table = document.querySelector('.h_b_c_list');
let h_tbody = h_table.children[1];


// 根据数据生成列表

  
   let h_goods = h_goodslist.map(function(item){
        let chaJia = (item.now_price*item.qty-item.qty*item.price).toFixed(2);
        let zongJia = (item.now_price*item.qty).toFixed(2);
        item.price = item.price.toFixed(2);
        item.now_price = item.now_price.toFixed(2);
            
        return `<tr>
        <td>
        <img src="${item.imgurl}" class="h_b_c_img fl">
        <a class="h_links fl h_title">${item.title}</a><br/>
        <a class="h_links fl">${item.id}</a><br/>
        <a class="h_links fl">${item.size}</a>
        </td>
        <td><div class="h_b_c_qty"><i class="h_qty_down">-</i><a class="h_qty_show">${item.qty}</a><i class="h_qty_up">+</i></div></td>
        <td><p><del class="h_yuanjia">${item.price}</del></p><p class="h_now_price">${item.now_price}</p></td>
        <td><p class="h_zongjia">${zongJia}</p><p class="h_chajia">You save${chaJia}</p></td>
        <td class="h_remove_btn"><button class="h_btn"></button></td>
        </tr>`
       
        
    }).join('');
    h_tbody.innerHTML = h_goods;

// 计算最后总价
   





 var h_total = []
// 点击删除事件
h_table.onclick = function(e){
    if(e.target.className === 'h_btn'){
        var h_del =document.querySelector('.h_btn');
        var currentTr = h_del.parentNode.parentNode;
        currentTr.parentNode.removeChild(currentTr);
    }


    
    // 数量价格增减
    if(e.target.className === 'h_qty_down'){
        let h_parent_down = e.target.parentNode;
        let h_a_down = h_parent_down.querySelector('a');
        let h_value_down = h_a_down.innerHTML;
        let h_p_parent = e.target.parentNode.parentNode.parentNode;
        let h_zongjia = h_p_parent.querySelector('.h_zongjia');        
        let h_now_price = h_p_parent.querySelector('.h_now_price').innerHTML;
        let h_chajia = h_p_parent.querySelector('.h_chajia');
        let h_yuanjia = h_p_parent.querySelector('.h_yuanjia').innerHTML;
        
        h_value_down--;
        h_a_down.innerHTML = h_value_down;
       

       
        
        h_zongjia.innerHTML = (h_value_down*h_now_price).toFixed(2);
        h_chajia.innerHTML = 'You save'+(h_value_down*h_yuanjia-h_value_down*h_now_price).toFixed(2);
        h_total.push(h_zongjia.innerHTML);
        console.log(h_total)
         if(h_value_down <= 0){
            var h_num = 0;
            h_a_down.innerHTML = 0;
             h_zongjia.innerHTML = h_num.toFixed(2);
             h_chajia.innerHTML = 'You save'+h_num.toFixed(2); 
        }


    }
    
    
    if(e.target.className === 'h_qty_up'){
        let h_parent_up = e.target.parentNode;
        let h_a_up = h_parent_up.querySelector('a');
        let h_value_up = h_a_up.innerHTML;
        let h_p_parent = e.target.parentNode.parentNode.parentNode;
        let h_zongjia = h_p_parent.querySelector('.h_zongjia');        
        let h_now_price = h_p_parent.querySelector('.h_now_price').innerHTML;
        let h_chajia = h_p_parent.querySelector('.h_chajia');
        let h_yuanjia = h_p_parent.querySelector('.h_yuanjia').innerHTML;
        h_value_up++;
        h_a_up.innerHTML = h_value_up;
        h_zongjia.innerHTML = (h_value_up*h_now_price).toFixed(2);
        h_chajia.innerHTML = 'You save'+(h_value_up*h_yuanjia-h_value_up*h_now_price).toFixed(2);
        
    }
            
     
         
            
      
    

}


 

 var data = [{
                id:'001',
                name:'Louis Vuitton Monogram Ver...',
                imgurl:'../images/bag1.png',
                price:5899.00,
                sale:5888.00,
                color:'土豪金'
            },{
                id:'002',
                name:'Louis Vuitton Monogram ardos...',
                imgurl:'../images/bag2.png',
                price:3899.00,
                sale:998.00,
                color:'黑色'
            },{
                id:'003',
                name:'Louis Vuitton Monogram Canva...',
                imgurl:'../images/bag3.png',
                price:1999.00,
                sale:1899.00,
                color:'白色'
            },{
                id:'004',
                name:'Louis Vuitton Monogram Ver...',
                imgurl:'../images/bag4.png',
                price:1999.00,
                sale:1899.00,
                color:'白色'
            },{
                id:'005',
                name:'Louis Vuitton Acua Terra...',
                imgurl:'../images/baobao.png',
                price:1999.00,
                sale:1899.00,
                color:'白色'
            },{
                id:'006',
                name:'Louis Vuitton Monogram Canva...',
                imgurl:'../images/lhMain3.png',
                price:1999.00,
                sale:1899.00,
                color:'白色'
            },{
                id:'007',
                name:'Louis Vuitton Monogram Ver...',
                imgurl:'../images/main_five_5.png',
                price:1999.00,
                sale:1899.00,
                color:'白色'
            },{
                id:'008',
                name:'Louis Vuitton Acua Terra...',
                imgurl:'../images/main_five_7.png',
                price:1999.00,
                sale:1899.00,
                color:'白色'
            }];
    var res = data.map(function(goods){
            return '<li>' +
                '<a href="#"><img src="'+ goods.imgurl +'"></a>\n' + 
                '<h4>'+ goods.name +'</h4>\n' + 
                '<p class="z_price"><del>$'+ goods.price +'</del><span> '+goods.sale+' py6.</span></p>\n' + 
                '<p class="z_addcar">Add to<span></span></p>' +
            '</li>'
        });

        // 获取元素
        var goodslist = document.getElementById('goodslist');//null
        goodslist.innerHTML = res.join('\n');
        let z_carousel = document.querySelector('.z_carousel');
        let ul = z_carousel.children[0];

        // 复制前6张到最后
        for(var i=0;i<6;i++){
            ul.appendChild(ul.children[i].cloneNode(true));
        }
        


        let li = ul.children;
        let len = ul.children.length;

        var z_car=document.querySelector('.z_car');


        let btnPrev=document.createElement('span');
        btnPrev.classList.add('btnPrev');
        z_car.appendChild(btnPrev);
        let btnNext=document.createElement('span');
        btnNext.classList.add('btnNext');
        z_car.appendChild(btnNext)


        // 上一张下一张
        z_car.onclick = e=>{
            if(e.target.className === 'btnPrev'){
                index--;
                show();
            }else if(e.target.className === 'btnNext'){
                index++;
                show();
            }
        }


        




        let index=0;

        let timer = setInterval(autoPlay,2000);



        // 鼠标移入移出
        z_car.onmouseover = function(){
            clearInterval(timer);
        }

        z_car.onmouseout = function(){
            timer = setInterval(autoPlay,3000);
        }






        function autoPlay(){
                index++;
                show();
            }
            function show(){console.log(666)
                // 终点判断
                if(index>=len-5){
                    // 当滚动完成复制图片时,瞬间重回初始状态
                    ul.style.left = 0;
                    index = 1;
                }else if(index<0){
                    index = len - 6;
                }
                let target = -index*li[0].clientWidth;
                animate(ul,{left:target});
            }

})