$(function() {
	//用cookie接收数据
	var params = location.search;

	params = params.slice(1);

	params = params.split('&');

	let goods = {};

	params.forEach(function(item) {

		var arr = item.split('=');

		goods[arr[0]] = decodeURI(arr[1]);

	})

	// 将所需数据对应插入页面

	$('.head_img').attr('src', goods.headImg);

	//设置价格保留两位小数
	let price = Number(goods.price).toFixed(2);

	//商品标题
	$('.goods_title').text(goods.title);

	//商品放大镜内的图片
	$('.sbImg').attr('src', goods.imgurl2);
	//标题
	$('.detail_c_m_title').text(goods.title);
	//价格
	$('.detail_c_m_span').text(price);
	//服务
	$('.serve_span').text(goods.serve);
	//小图片
	$('.small_img').attr('src', goods.imgurl2);

	console.log(goods)

	//添加购物车
	// 创建空数组
	var goodslist = [];

	var cookies = document.cookie.split('; ');
	cookies.forEach(function(item) {
		item = item.split('=');

		if(item[0] === 'goodslist') {
			goodslist = JSON.parse(item[1]);
		}
	});
	// 给按钮绑定事件
	let btn = $('.add_buyCar');
	btn.click(function() {
		$('.buycar_show').toggle(setTimeout(() => {
			$('.buycar_show').css({
				display: 'none'
			})
		}, 1000))

		var idx;
		console.log()
		var has = goodslist.some(function(item, i) {
			idx = i;
			return item.guid === goods.id;
		});

		if(has) {
			// 如果添加，数量增相应增加
			goodslist[idx].qty++;
		} else {
			// 如果未添加，便正常添加
			var imgurl = goods.imgurl2;
			var goodsname = goods.title;
			var price = goods.price;
			var guid = goods.id;
			let goodsobj = {
				guid: guid,
				imgurl: imgurl,
				name: goodsname,
				price: price,
				qty: 1
			}
			goodslist.push(goodsobj);
		}
		// cookie
		document.cookie = 'goodslist=' + JSON.stringify(goodslist);
		console.log(document.cookie)
	})

	//放大镜效果    从网上摘取的代码  存在一些bug
	//获取元素
	var box = $('.img_box')[0];
	//获取显示小图的div
	var small = $('.small_box')[0];
	//获取小图中的遮挡的div
	var mask = $('.mask')[0];
	//获取显示大图的div
	var big = $('.big_box')[0];
	//获取大div中的大图
	var imgObj = $('.bImg')[0];

	//显示遮挡层和显示大图的的层
	//鼠标进入事件
	box.onmouseover = function() {
		mask.style.display = "block";
		big.style.display = "block";
	};
	//鼠标离开事件
	box.onmouseout = function() {
		mask.style.display = "none";
		big.style.display = "none";
	};

	//为小层注册鼠标移动的事件
	small.onmousemove = function(e) {
		var left = e.clientX - mask.offsetWidth / 2; //横坐标
		var top = e.clientY - mask.offsetHeight / 2; //纵坐标
		//设置遮挡层的left和top
		var x = left - 50; //margin
		var y = top - 200; //margin

		x = x < 0 ? 0 : x; //如果横坐标小于0就设置为0
		y = y < 0 ? 0 : y; //如果纵坐标小于0就设置为0
		x = x > small.offsetWidth - mask.offsetWidth ? small.offsetWidth - mask.offsetWidth : x;
		y = y > small.offsetHeight - mask.offsetHeight ? small.offsetHeight - mask.offsetHeight : y;

		//设置遮挡层的定位值
		mask.style.left = x + "px";
		mask.style.top = y + "px";

		//设置大图的移动距离
		//大图的最大的移动距离
		var imgMaxMove = imgObj.offsetWidth - big.offsetWidth;
		//遮挡层的最大的移动距离
		var maskMaxMove = small.offsetWidth - mask.offsetWidth;
		//大图的横向移动的距离
		var imgMoveLeft = x * imgMaxMove / maskMaxMove;
		//大图的纵向移动的距离
		var imgMoveTop = y * imgMaxMove / maskMaxMove;

		//设置大图的left和top---移动的是margin-left和margin-top

		imgObj.style.marginLeft = -imgMoveLeft + "px";
		imgObj.style.marginTop = -imgMoveTop + "px";
	};

})