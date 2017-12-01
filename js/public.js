
function changenums(){
	var $cart_num1 = $('#tool_cart_count');
	var $cart_num2 = $('.cart_counts');
	var $cart_num3 = $('.s1 em');
	if($.cookie('goodsId')){
		var nums = 0;
		var arr = $.cookie('goodsnum').split(',');
		for(var i=0;i<arr.length;i++){
			nums+=parseInt(arr[i]);
		}
		$cart_num1.html(nums);
		$cart_num2.html(nums);
		$cart_num3.html(nums);
	}else{
		$cart_num1.html(0);
		$cart_num2.html(0);
		$cart_num3.html(0);
	}
}

changenums();
if($.cookie('username')){
	$('.login_link').css('display','none');
	$('#become').css('display','none');
	$('#zhuxiao').css('display','inline');
	$('#names').html($.cookie('username'));
	$('#zhuxiao').on('click',function(){
		$.cookie('username', '', { expires: -1 });
		$('.login_link').css('display','inline');
		$('#become').css('display','inline');
		$('#names').html('');
	});
}
//地点二级菜单！
	var $arrive = $('.arrive');	//地点
	var $arrive_one = $('.arrive_one');
	var $arriveList = $('#arrive_list');//地点列表
	var $curent_arr = $('#curent_arr');//目的地
	var $places = $('a',$arriveList);//所有地点
	$arrive.hover(function(){
		$arriveList.css('display','block');
		$arrive_one.addClass('hover');
	},function(){
		$arriveList.css('display','none');
		$arrive_one.removeClass('hover');
	});
	$places.on('click',function(){
		$curent_arr.html($(this).html());
		$arriveList.css('display','none');
		$arrive_one.removeClass('hover');
	});
//地点二级菜单结束！！	

//顶部二级菜单栏
	var $menu_btn = $('.tool_nav li:has(.menu_btn)');
	$menu_btn.hover(function(){
		$('ul',this).css('display','block');
		$('.menu_btn',this).addClass('hover');
	},function(){
		$('ul',this).css('display','none');
		$('.menu_btn',this).removeClass('hover');
	});
	
//顶部二级菜单结束	

//搜索框!!
var $text = $('.text');
var $select = $('.select');
$text.on('focus',function(){
	if($(this).prop('value')=='秋上新 领80元礼金'){
		$(this).prop('value','');
	}
});
$text.on('blur',function(){
	if($(this).prop('value')==''){
		$(this).prop('value','秋上新 领80元礼金');
	}
});
$text.on('input',function(){
	var $con = $(this).val();
	if(!$con){
		$('#sug_key').css('display','none');
	}else{
		$('#sug_key').css('display','block');
	}
	var url = 'https://suggest.taobao.com/sug?code=utf-8&q='+$con+'&_ksTS=1503478755097_902&callback=tb';
	loadScript(url);
});
$select.hover(function(){
	$('.select_pop',this).css({
		'height':'286px',
		'padding':'1px',
		'border-width':'1px'
	});
},function(){
	$('.select_pop',this).css({
		'height':'0',
		'padding':'0',
		'border-width':'0'
	});
});
		//搜索框结束
		







