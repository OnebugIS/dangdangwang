	var $buy_count = $('#buy_count');
	var $add_count = $('#num_add');
	var $del_count = $('#num_del');
	var buy = false;
	$add_count.on('click',function(){
		$buy_count.val(parseInt($buy_count.val())+1);
		isVal();
	});
	$del_count.on('click',function(){
		if(buy){
			$buy_count.val(parseInt($buy_count.val())-1);
		}
		isVal();
	});
	$buy_count.on('input',function(){
		isVal();
	});
	function isVal(){
		if($buy_count.val() == 1){
		$del_count.addClass('num_disabled');
		buy = false;
		}else{
			$del_count.removeClass('num_disabled');
			buy = true;
		}
	}
	
	var $go_cart = $('#part_buy_button');
	var $goodId = $('#goodsId');
	var $goodslist = [];
	var $goodsnum = [];
	$go_cart.on('click',function(){
		$goodslist.push($goodId.attr('goodId'));
		$goodsnum.push($buy_count.val());
		$.cookie('goodsId',$goodslist);
		$.cookie('goodsnum',$goodsnum);
		window.location.href = 'cart.html';
		return false;
	});