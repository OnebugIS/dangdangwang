
var $startLogin = $('.start');//账号密码登录按钮
var $quickLogin = $('.quick');//二维码登录按钮
var $pwdlogin = $('#pwd_login');//账号密码登录界面
var $codelogin = $('#code_login');//二维码登录界面
var $startTip = $('.startTip');//账号提示
var $quickTip = $('.quickTip');//二维码提示	
$startLogin.on('click',function(){
	changeDis($quickLogin,$startLogin);
	changeDis($codelogin,$pwdlogin);
	$quickTip.css('display','inline');
	$startTip.css('display','none');
});
$quickLogin.on('click',function(){
	changeDis($startLogin,$quickLogin);
	changeDis($pwdlogin,$codelogin);
	$quickTip.css('display','none');
	$startTip.css('display','inline');
});


var $username = $('.user');	//用户名
var $pass = $('.pass');	//密码
var $pwd = $('.password');
var $usernamelogin = $('#usernamelogin');
var $password = $('.password');
var $del = $('.text_del');
$username.on('input',function(){
	if($(this).val()!=''){
		$del.css('display','block');
	}else{
		$del.css('display','none');
	}
});
$del.on('click',function(){
	$username.val('');
	$pass.val('');
	$del.css('display','none');
});
$username.on('focus',function(){
	if($(this).val()=='邮箱/昵称/手机号码'){
		$(this).val('');
	}
	$usernamelogin.css('border-color','#646464');
	$('#liDivErrorMessage').css('display','block');
});
$username.on('blur',function(){
	if($(this).val()==''){
		$(this).val('邮箱/昵称/手机号码');
	}
	$usernamelogin.css('border-color','');
	$('#liDivErrorMessage').css('display','none');
});

$pass.on('focus',function(){
	$password.css('border-color','#646464');
	$('#login_password_error').css('display','block');
});
$pass.on('blur',function(){
	$password.css('border-color','');
	$('#login_password_error').css('display','none');
});

var $autologin = $('#autologin');
var $auto_tip = $('#auto_tip');
$autologin.on('change',function(){
	if($(this).prop('checked')){
		$auto_tip.html('请勿在公用电脑上勾选此选项');
	}else{
		$auto_tip.html('七天内自动登录');
	}
});

var $sharelist = $('#shareMore');
var $showShareMore = $('#showShareMore');
$showShareMore.on('click',function(){
	$sharelist.fadeToggle();
});


var $loginBtn = $('#loginBtn');
$loginBtn.on('click',function(){
	$.post('php/register.php',function(d){
		var usernames = [];
		var emails = [];
		var tels = [];
		var passwords = [];
		JSON.parse(d).forEach(function(v){
			usernames.push(v[1]);
			emails.push(v[4]);
			passwords.push(v[2]);
			tels.push(v[3]);
		});
		var arr = [];
		var index = null;
		arr.push(usernames,emails,tels);
		arr.forEach(function(v){
			if($.inArray($username.val(),v)!=-1){
				index = $.inArray($username.val(),v);
				return false;
			}
		});
		if(index!=-1 && $pass.val()==passwords[index]){
			if($autologin.prop('checked')){
				$.cookie('username',usernames[index]);
			}
			window.location.href = 'cart.html';
		}else{
			alert('不存在该用户');
			$pass.val('');
		}
	});
});

