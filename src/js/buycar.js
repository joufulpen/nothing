window.addEventListener('DOMContentLoaded', function() {
	//用二阶段的cookie添加购物车实现效果
	// 获取元素
	var ocarList = document.getElementById('carList');
	var osubPrice = carList.nextElementSibling;
	var btnClear = document.getElementById('btnClear');
	
	var goodslist = JSON.parse(Cookie.get('goodslist'));
	console.log(goodslist)
	console.log(Array.from(goodslist))
	console.log(goodslist[1])
	console.log(Array.from(goodslist[1]))
	function render() {
		var ul = document.createElement('ul');
		var total = 0;
		ul.innerHTML = goodslist.map(function(item) {
			total += item.price * item.qty;
			return '<li data-guid="' + item.guid + '">' +
				'<img src="' + item.imgurl + '"/>' +
				'<h4>' + item.name + '</h4>' +
				'<p class="price">价格：<span>' + item.price + ' &times;' + item.qty + '</span></p>' +
				'<span class="btn-close">&times</span>'
			'</li>'
		}).join('\n');
		ocarList.innerText = '';
		ocarList.appendChild(ul);
		osubPrice.innerText = total.toFixed(2);
	}

	btnClear.onclick = function() {
		Cookie.remove(goodslist);
		ocarList.innerHTML = '';
		osubPrice.innerText = '0';
	}
	render();

	//事件委托，删除当前商品的效果
	ocarList.onclick = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.className === 'btn-close') {
			var currentLi = target.parentNode;
			var guid = currentLi.getAttribute('data-guid');
			for(var i = 0; i < goodslist.length; i++) {
				if(goodslist[i].guid === guid) {
					goodslist.splice(i, 1);
					Cookie.set('goodslist', JSON.stringify(goodslist));
					render();
					break;
				}
			}
		}
	}

})