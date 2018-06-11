$(function() {
	//获取元素
	let regBtn = $('.reg_btn');
	let regTips = $('.reg_tips');
	let regPhone = $('#reg_phone');
	let regCode = $('#reg_code');
	let yanzhengma = $('.yanzhengma');
	let psd = $('#reg_psd');
	let psd2 = $('#reg_psd2');
	//随机验证码
	let randomMa = parseInt(Math.random() * 9000) + 1000;
	yanzhengma.text(randomMa);
	yanzhengma.css({
		lineHeight: '40px',
		color: '#fff',
		textAlign: 'center',
		fontSize: '18px',
		letterSpacing: '6px'
	})
	//！！！！！！！！！！！！！！！
	//设置每个输入框失去焦点后判断相应正则   但在加入正则后  导致注册功能失效 遂注册功能编写失败
	regPhone.blur(function() {
		let phone = $('#reg_phone').val();
		if(!/^1[3-8]\d{9}$/.test(phone)) {
			regTips.text('手机号码有误！请重新输入');

		} else {
			regTips.text('')
		}
	})
	regCode.blur(function() {
		let code = $('#reg_code').val();
		let yanzheng = yanzhengma.text();
		if(code !== yanzheng) {
			alert('验证码错误！请重新输入');

		}
	})
	psd.blur(function() {
		let psdval = $('#reg_psd').val();
		if(!/^\S{6,20}$/.test(psdval)) {
			alert('密码设置有误');

		}
	})
	psd2.blur(function() {
		let psdval = $('#reg_psd').val();
		let con_pwd = $('#reg_psd2').val();
		if(con_pwd != psdval) {
			alert('确认密码有误');

		}
	})

	regBtn.click(function() {
		console.log(888)
		let phone = $('#reg_phone').val();
		let psd = $('#reg_psd').val();
		$.ajax({
			type: 'post',
			data: {
				phone: phone,
				psd: psd
			},
			url: 'http://localhost:1802/api/register.php',

			success: function(data) {
				if(data === '该手机号码已注册!') {
					regTips.text(data);
					console.log(data)
				}
				if(data === '注册成功') {
					console.log(data)
					regTips.text(data);
					setTimeout(() => {
						console.log(66);
						window.open('login.html');
					}, 2000)

				}

			}

		})

	})

})