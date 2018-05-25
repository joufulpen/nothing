window.onload =function(){
var goods_h_r_b =document.getElementById('goods_h_r_b');


var goods =[{id:'001',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'189',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_1.png'},
    {id:'002',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'189',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_2.png'},
    {id:'003',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'179',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_3.png'},
    {id:'004',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'213',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_4.png'}, 
    {id:'005',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'234',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_5.png'},
    {id:'006',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'333',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_6.png'},
    {id:'007',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'288',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_7.png'},
    {id:'008',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'199',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_8.png'},
    {id:'009',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'189',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_2.png'},
    {id:'010',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'179',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_3.png'},
    {id:'011',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'213',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_4.png'}, 
    {id:'012',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'234',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_5.png'},
    {id:'013',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'333',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_6.png'},
    {id:'014',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'288',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_7.png'},
    {id:'015',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'199',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_8.png'},
    {id:'016',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'333',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_6.png'},
    {id:'017',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'288',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_7.png'},
    {id:'018',name:'Up & Down OpenCowhide Leather Case with Crocodile...',price:'USD 219',sale:'199',save:'Save USD 30',list:'wholesale',imgurl:'../images/goods_h_r_b_8.png'},

    ]
    // var res = goods.map(function(item){
    //     return '<li>'+
    //     '<img src="'+item.imgurl+'">'+'<input type="checkbox">'+'<a class="goods_content">'+item.name+'</a><br/>'+'<span class="del_sale"><del>'+item.price+'</del></span>&nbsp;'+'<span class="now_sale">'+item.sale+'</span>'+'<p class="save_sale">'+item.save+'</p>'+'<a class="list_sale">'+item.list+'</a>'
    //     '</li>';
    // })
    // goods_h_r_b.innerHTML = res.join('');

function paixu(arr){
        var res = arr.sort(function(a,b){
            return Number(a.sale)-Number(b.sale);
        })
            return res
    }

    function shengchengyemian(goodsList){
         var res = goods.map(function(item){
        return '<li>'+
        '<img src="'+item.imgurl+'">'+'<input type="checkbox">'+'<a class="goods_content">'+item.name+'</a><br/>'+'<span class="del_sale"><del>'+item.price+'</del></span>&nbsp;'+'<span class="now_sale">'+item.sale+'</span>'+'<p class="save_sale">'+item.save+'</p>'+'<a class="list_sale">'+item.list+'</a>'
        '</li>';
    })
         return res.join('');
    }

    goods_h_r_b.innerHTML = shengchengyemian(goods);
    var isok = true;
    document.getElementById('price_sort').onclick = function(){
         if(isok){
            goods_h_r_b.innerHTML = shengchengyemian(paixu(goods));
            isok = false;
         }
         else{
            goods_h_r_b.innerHTML = shengchengyemian(paixu(goods).reverse());
            isok = false;
         }
     }





}


    



