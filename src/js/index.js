$(function() {
	//nav
	//给ul绑定事件 让每个li鼠标移入时出现内容 鼠标移出时内容消失
	//	let navUl = $('.nav_list');
	//	let navLi = $('.nav_list_li');

	let navShow = $('.nav_show');
	$(".nav_list").on("mouseover", "li", function() {
		navShow.css({
			display: 'block'
		})
	})
	$(".nav_list").on("mouseout", "li", function() {
		navShow.css({
			display: 'none'
		})
	})

	//从数据库拿取图片地址 生成页面
	let goods1 = $('.goods1');

	$.ajax({
		type: 'get',
		url: 'http://localhost:1802/api/index.php',
		
		success: function(data) {
			let imgdata = JSON.parse(data);

			let content = '';
			imgdata.map(function(obj) {

				return content += `<li class="goods1_li goods0_li"><a href="" target="_blank"><img class="goods1_img" src="${obj.imgurl}"></a></li>`
			})

			goods1.append(content);

			let list = $('.goods1_li')
			//设置鼠标移入移出事件 让页面上的图片出现移动动画效果

			$(".goods1").on("mouseover", "img", function() {
				$(this).animate({
					left: '-6px'
				});
			})
			$(".goods1").on("mouseout", "img", function() {
				$(this).animate({
					left: '0'
				});
			})

			//点击商品传参到详情页
			for(var i = 0; i < list.length; i++) {
				(function(i) {
					list[i].onclick = function() {
						

						var params = '';
						// 将data[i]对象遍历成字符串
						var goods = imgdata[i]; //对象 用for in 遍历
						for(var key in goods) {
							params += key + '=' + encodeURI(goods[key]) + '&'
						}

						params = params.slice(0, -1);
						// location.href设置路径
						location.href = 'html/detail.html?' + params;

					}

				})(i)
			}

		}

	})

	//===========
	let goods3 = $('.goods3');
	$.ajax({
		type: 'get',
		url: 'http://localhost:1802/api/index2.php',
	
		success: function(data) {
			let imgdata = JSON.parse(data);

			let content = '';
			imgdata.map(function(obj) {

				return content += `<li class="goods3_li goods0_li"><a target="_blank" href="#"><img class="goods3_img" src="${obj.imgurl}"></a></li>`
			})
			goods3.append(content);

			let list = $('.goods3_li');
			//设置鼠标移入移出事件 让页面上的图片出现移动动画效果

			$(".goods3").on("mouseover", "img", function() {
				$(this).animate({
					left: '-6px'
				});
			})
			$(".goods3").on("mouseout", "img", function() {
				$(this).animate({
					left: '0'
				});
			})

			//点击商品传参到详情页
			for(var i = 0; i < list.length; i++) {
				(function(i) {
					list[i].onclick = function() {

						var params = '';
						// 将data[i]对象遍历成字符串
						var goods = imgdata[i]; //对象 用for in 遍历
						for(var key in goods) {
							params += key + '=' + encodeURI(goods[key]) + '&'
						}
						
						params = params.slice(0, -1);
						// location.href设置路径
						location.href = 'html/detail.html?' + params;

					}

				})(i)
			}

		}

	})

	let contRight = $('.cont_right');
	$.ajax({
		type: 'get',
		url: 'http://localhost:1802/api/index3.php',
		
		success: function(data) {
			let imgdata = JSON.parse(data);

			let content = '';
			imgdata.map(function(obj) {

				return content += `<li class="goods5_li goods0_li"><a href="#" target="_blank"><img class="goods5_img" src="${obj.imgurl}"></a></li>`
			})
			contRight.append(content);
			let maxLi = $('.goods5_li').eq(1)
			let maxImg = $('.goods5_img').eq(1)
			maxLi.addClass('maxLi')
			maxImg.addClass('maxImg')

			let list = $('.goods5_li')
			//设置鼠标移入移出事件 让页面上的图片出现移动动画效果

			$(".cont_right").on("mouseover", "img", function() {
				$(this).animate({
					left: '-6px'
				});
			})
			$(".cont_right").on("mouseout", "img", function() {
				$(this).animate({
					left: '0'
				});
			})
			//点击商品传参到详情页
			for(var i = 0; i < list.length; i++) {
				(function(i) {
					list[i].onclick = function() {

						var params = '';
						// 将data[i]对象遍历成字符串
						var goods = imgdata[i]; //对象 用for in 遍历
						for(var key in goods) {
							params += key + '=' + encodeURI(goods[key]) + '&'
						}

						params = params.slice(0, -1);
						// location.href
						location.href = 'html/detail.html?' + params;

					}

				})(i)
			}
		}

	})

	let contRight1 = $('.cont_right1');
	$.ajax({
		type: 'get',
		url: 'http://localhost:1802/api/index4.php',
		
		success: function(data) {
			let imgdata = JSON.parse(data);

			let content = '';
			imgdata.map(function(obj) {

				return content += `<li class="goods6_li goods0_li"><a href="#" target="_blank"><img class="goods6_img" src="${obj.imgurl}"></a></li>`
			})
			contRight1.append(content);
			let maxLi = $('.goods6_li').eq(1)
			let maxImg = $('.goods6_img').eq(1)
			maxLi.addClass('maxLi')
			maxImg.addClass('maxImg')
			let list = $('.goods6_li')
			//设置鼠标移入移出事件 让页面上的图片出现移动动画效果

			$(".cont_right1").on("mouseover", "img", function() {
				$(this).animate({
					left: '-6px'
				});
			})
			$(".cont_right1").on("mouseout", "img", function() {
				$(this).animate({
					left: '0'
				});
			})

			//点击商品传参到详情页
			for(var i = 0; i < list.length; i++) {
				(function(i) {
					list[i].onclick = function() {

						var params = '';
						// 将data[i]对象遍历成字符串
						var goods = imgdata[i]; //对象 用for in 遍历
						for(var key in goods) {
							params += key + '=' + encodeURI(goods[key]) + '&'
						}

						params = params.slice(0, -1);
						// location.href设置路径
						location.href = 'html/detail.html?' + params;

					}

				})(i)
			}
		}

	})

	let contRight2 = $('.cont_right2');
	$.ajax({
		type: 'get',
		url: 'http://localhost:1802/api/index5.php',
	
		success: function(data) {
			let imgdata = JSON.parse(data);

			let content = '';
			imgdata.map(function(obj) {

				return content += `<li class="goods7_li goods0_li"><a href="#" target="_blank"><img class="goods7_img" src="${obj.imgurl}"></li>`
			})
			contRight2.append(content);
			let maxLi = $('.goods7_li').eq(1)
			let maxImg = $('.goods7_img').eq(1)
			maxLi.addClass('maxLi')
			maxImg.addClass('maxImg')

			let list = $('.goods7_li')
			//设置鼠标移入移出事件 让页面上的图片出现移动动画效果

			$(".cont_right2").on("mouseover", "img", function() {
				$(this).animate({
					left: '-6px'
				});
			})
			$(".cont_right2").on("mouseout", "img", function() {
				$(this).animate({
					left: '0'
				});
			})

			//点击商品传参到详情页

			for(var i = 0; i < list.length; i++) {
				(function(i) {
					list[i].onclick = function() {

						var params = '';
						// 将data[i]对象遍历成字符串
						var goods = imgdata[i]; //对象 用for in 遍历
						for(var key in goods) {
							params += key + '=' + encodeURI(goods[key]) + '&'
						}

						params = params.slice(0, -1);
						// location.href设置路径
						location.href = 'html/detail.html?' + params;

					}

				})(i)
			}
		}

	})

})