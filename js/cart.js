if($.cookie('username')){
	$('#LoginFalse').css('display','none');
}
var $selectAll = $('#selectAll');
$selectAll.on('click',function(){
	$(this).toggleClass('check_on');
	$('.row1 a').toggleClass('check_on');
});
var goodsId = [];
var goodsnum = [];
var money = 0;
if($.cookie('username')){
	$('#LoginFalse').css('display','none');
}
if($.cookie('goodsId')){
	goodsId = $.cookie('goodsId').split(',');
	goodsnum = $.cookie('goodsnum').split(',');
	for(var i=0;i<goodsId.length;i++){
		createlist(goodsId[i],goodsnum[i]);
	}
	$('table').on('click','.row1 a',function(){
		$(this).toggleClass('check_on');
	});
	$('table').on('click','.row5 span',function(){
		$(this).closest('tr').remove();
		var index=$.inArray($(this).closest('tr').attr('goodsid'),goodsId);
		goodsId.splice(index,1);
		goodsnum.splice(index,1);
		$.cookie('goodsId',goodsId.toString());
		$.cookie('goodsnum',goodsnum.toString());
		changenums();
		money -= Number($(this).parents('tr').find('.allmoney').html());
		if(money<0){
			money=0;
		}
		$('#pay').html(money);
	});
	//减少数量
	$('table').on('click','.delete',function(){
		var count=$(this).next('input').prop('value');
		var danjia = $(this).parents('tr').find('.price_n').html();
		if(count!=1){
			count--;
			$(this).next('input').prop('value',count);
			$(this).parents('tr').find('.allmoney').html(count*danjia);
			var index = $.inArray($(this).parents('tr').attr('goodsid'),$.cookie('goodsId').split(','));
			var arr=$.cookie('goodsnum').split(',');
			arr[index] = count;
			$.cookie('goodsnum',arr.toString());
			changenums();
			money -= parseInt(danjia);
			if(money<0){
				money=0;
			}
			$('#pay').html(money);
		}
	});
	//增加数量
	$('table').on('click','.add',function(){
		var count=$(this).prev('input').prop('value');
		var danjia = $(this).parents('tr').find('.price_n').html();
		if(count!=99){
			count++;
			$(this).next('input').prop('value',count);
			$(this).parents('tr').find('.allmoney').html(count*danjia);
			var index = $.inArray($(this).parents('tr').attr('goodsid'),$.cookie('goodsId').split(','));
			var arr=$.cookie('goodsnum').split(',');
			arr[index] = count;
			$.cookie('goodsnum',arr.toString());
			changenums();
			money += parseInt(danjia);
			$('#pay').html(money);
			$(this).prev('input').prop('value',count);
		}
	});
	$('#jiesuan').on('click',function(){
		alert('您总共需要付'+$('#pay').html()+'元');
	});
}else{
	
}
function createlist(sid,num){
	var table = $('#goodsList');
	$.ajax({
		type:"get",
		url:"php/goods.php",
		async:true
	}).done(function(data){
		var arr = JSON.parse(data);
		var str = table.html();
		for(var i=0;i<arr.length;i++){
			if(arr[i][0]==sid){
				str += "<tr class='bb_none' goodsid="+arr[i][0]+">"+
						'<td class="row1">'+
							'<a href="javascript:;"></a>'+
						'</td>'+
						"<td class='row_img'>"+
							'<img src="'+arr[i][2]+'"width="80" height="80"/>'+
						'</td>'+
						"<td class='row_name'>"+
							'<div class="name">'+
								'<a href="javascript:;">'+arr[i][1]+'</a>'+
							'</div>'+
						'</td>'+
						"<td class='row3'>"+
							'<span class="price_n">'+arr[i][3]+'</span>'+
							"<span style='color:red'>限时抢</span>"+
						'</td>'+
						'<td class="row3">'+
							'<span class="amount">'+
								'<a href="javascirpt:;" class="delete">-</a>'+
								'<input type="text" value="'+num+'" id="counts" min="0" max="99"/>'+
								'<a href="javascirpt:;" class="add">+</a>'+
							'</span>'+
						'</td>'+
						"<td class='row4'>"+
							'<span class="red">¥<i class="allmoney">'+(arr[i][3]*num).toFixed(2)+'</i></span>'+
						'</td>'+
						'<td class="row5">'+
							'<span>'+
								'<a href="javascript:;">删除</a>'+
							'</span>'+
						'</td>'+
					'</tr>';
					money += Number((arr[i][3]*num).toFixed(2));
			}
		}
		table.html(str);
		$('#pay').html(money);
	});
	
	$.ajax({
		type:"get",
		url:"php/goods.php",
		async:true
	}).done(function(data){
		var arr = JSON.parse(data);
		var str = '';
		for(var i=0;i<arr.length;i++){
			 str += "<tr class='bb_none' goodsid="+arr[i][0]+">"+
						'<td class="row1">'+
							'<a href="javascript:;"></a>'+
						'</td>'+
						"<td class='row_img'>"+
							'<img src="'+arr[i][2]+'"width="80" height="80"/>'+
						'</td>'+
						"<td class='row_name'>"+
							'<div class="name">'+
								'<a href="javascript:;">'+arr[i][1]+'</a>'+
							'</div>'+
						'</td>'+
						"<td class='row3'>"+
							'<span class="price_n">'+arr[i][3]+'</span>'+
							"<span style='color:red'>限时抢</span>"+
						'</td>'+
						'<td class="row3">'+
							'<span class="amount">'+
								'<a href="javascirpt:;">-</a>'+
								'<input type="text" value="1" id="counts"/>'+
								'<a href="javascirpt:;">+</a>'+
							'</span>'+
						'</td>'+
						"<td class='row4'>"+
							'<span class="red">¥39.80</span>'+
						'</td>'+
						'<td class="row5">'+
							'<span>'+
								'<a href="javascript:;">删除</a>'+
							'</span>'+
						'</td>'+
					'</tr>';
		}
		table.html(str);
	});
}