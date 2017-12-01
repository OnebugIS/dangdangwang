
		var $username = $('#username');
		var $email = $('#email');
		var $tel = $('#tel');
		var $ispassword = $('#ispwd');
		var $password = $('#pwd');
		var $sub = $('#mysubmit');
		var bstop = [false,false,false,false,false];
		var $oinput = $('.isV');
		var regs = [/^[a-z0-9\_-]{5,10}$/,/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,/^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,/^[a-z0-9_-]{6,18}$/];
		//获取焦点时显示提示
		$oinput.on('focus',function(){
			$(this).next('span').css('display','block');
		});
		$oinput.on('blur',function(){
			$(this).next('span').css('display','none');
		});
		
		//给所有待输入的文本框进行校验
		$oinput.not(':last').each(function(v){
			$(this).on('input',function(){
				var str = $(this).val();
				if(regs[v].test(str)){
					bstop[v] = true;
					$(this).css('border-color','#e6e6e6');
					$(this).nextAll('i').removeClass('error').addClass('ok');
				}else{
					bstop[v] = false;
					$(this).nextAll('i').removeClass('ok').addClass('error');
				}
			});
		});
		$ispassword.on('input',function(){
			var str = $(this).val();
			if($password.val()==str){
				bstop[4] = true;
				$(this).css('border-color','#e6e6e6');
				$(this).nextAll('i').removeClass('error').addClass('ok');
			}else{
				bstop[4] = false;
				$(this).nextAll('i').removeClass('ok').addClass('error');
			}
		});
		//提交表单时
		$sub.on('click',function(ev){
			for(var i=0;i<bstop.length;i++){		//如果有一条不通过 则报错
				if(bstop[i]==false){
					$oinput.eq(i).css('border-color','red');
					return false;
				}
			}
			$.post('php/register.php',function(d){
				var usernames = [];
				var emails = [];
				var tels = [];
				JSON.parse(d).forEach(function(v){
					usernames.push(v[1]);
					emails.push(v[4]);
					tels.push(v[3]);
				});
				if($.inArray($username.val(),usernames)!=-1){
					alert('用户已存在');
				}else if($.inArray($email.val(),emails)!=-1){
					alert('邮箱已存在');
				}else if($.inArray($tel.val(),tels)!=-1){
					alert('手机号已存在');
				}else{
					$.cookie('username',$username.val());
					$('#myform').submit();	
				}
			});
		});
		
		
