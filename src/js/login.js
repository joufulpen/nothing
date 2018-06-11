$(function(){
	let logBtn = $('.login_btn');
	logBtn.click(function(){
		//获取内容
		let logUser = $('#login_user').val();
		let logPsd= $('#login_psd').val();
		$('.login_checkbox').append('<em></em>')
					
					$('em').css({
						height:'26px',
              			width:'300px',
              			lineHeight: '26px',
               			fontSize: '12px',
              			color:'red',
              			textAlign:'center',
              			position:'absolute',
              			top:'170px',
              			left:'33px'		
					})
		$.ajax({
			type: 'post',
			data: {
				logUser: logUser,
				logPsd: logPsd
			},
			url: 'http://localhost:1802/api/login.php',
			//					context:document.body,//该项可不写
			success: function(data) {
				if(data==='登录成功'){
					$('em').text('登录成功');
					setTimeout(()=>{
						console.log(11);
						window.open('../index.html');
					},50)
				}else{console.log(22)
					$('em').text('用户名或密码错误!');
					
				
				}
		

			}

		})
		
		
		
	})
	
	
	
	
	
	
})
 