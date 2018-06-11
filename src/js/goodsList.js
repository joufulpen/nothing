$(function() {
	//设置nav的相应样式
	$('#nav').css({
		background: '#37A0DB',
		border: '0 none'
	})
	$('.goods_nav_li').css({
		color: '#fff'
	})
	$('.nav_list').css({
		top: '40px',
		display: 'none'
	})
	$('.nav_header').click(function() {
		$('.nav_list').slideToggle(1000)
	})

	//设置ajax接口 从数据库中拿取数据 并生成相应页面
	let goodsbox = $('.goods_box');
	$.ajax({
		type: 'get',
		url: 'http://localhost:1802/api/goodsList.php',
		success: function(data) {

			let goodsdata = JSON.parse(data);
			let content = '';
			goodsdata.map(function(obj) {

				return content += `<li class="goodsbox_li" data-guid="${obj.id}"><a href="#">
			 					<img src="${obj.imgurl2}" class="goodsbox_img">
			 					<p class="goodsbox_p0">${obj.title}</p>
			 					<p class="goodsbox_p1">${obj.title}</p>
			 					<p class="goodsbox_p2">
			 					<span>￥${obj.price}</span><del>${obj.oriPrice}</del>
			 					</p>
			 					
			 					</a>
			 					<button class="goodsbox_btn1 gb_btn">加入购物车</button>
			 					<button class="goodsbox_btn2 gb_btn">关注商品</button>
			 				</li>
			 					`
			})
			//将结构写入页面
			goodsbox.append(content);
			let list = $('.goodsbox_li')

			for(var i = 0; i < list.length; i++) {
				(function(i) {
					list[i].onclick = function(event) {

						var params = '';

						var goods = goodsdata[i]; //对象 用for in 遍历
						for(var key in goods) {
							params += key + '=' + encodeURI(goods[key]) + '&'
						}

						params = params.slice(0, -1);
						// location.href
						location.href = 'detail.html?' + params;
						event.stopPropagation();
						console.log(888);
					}

				})(i)
			}

		}

	})

})