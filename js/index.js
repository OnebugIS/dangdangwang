
//主要首页部分开始！！

	//类型选项卡
	$('#A_menu>li').on('mouseover',function(){
		$(this).addClass('on').siblings('#A_menu>li').removeClass('on');
		$('#A_showList>li').eq($(this).index('#A_menu>li')).css('display','block').siblings('#A_showList>li').css('display','none');
	});
	$('.sec_typeA').on('mouseleave',function(){
		$('#A_menu>li').removeClass('on');
		$('#A_showList>li').css('display','none');
	});
	
	
	
	
	//结束！！！
	
	//轮播图
	var $A_box = $('.A_c');
	var $dots = $('dl li','.A_top');
	var $imgs = $('ul li img','.A_top');
	var $left = $('.left');
	var $right = $('.right');
	var Astop = false;
	var $num = 0;
	var A_timer = null;
	$dots.mouseover(function(){
		$(this).addClass('hover').siblings('dl li').removeClass('hover');
		if($(this).index()!=$num){
			small();
			$imgs.eq($num).fadeOut(300);
			$num = $(this).index();
			$imgs.eq($num).fadeIn(300);
		}
	});
	$A_box.hover(function(){
		clearInterval(A_timer);
	},function(){
		A_timer = setInterval(function(){
			tab(false);
		},5000);
	});
	$left.click(function(){
		tab(true);
	});
	$right.click(function(){
		tab(false);
	});
	A_timer = setInterval(function(){
		tab(false);
	},5000);
	function tab(n){
		small();
		$imgs.eq($num).fadeOut(300);
		n?$num--:$num++;
		if($num<0){
			$num = 7;
		}
		if($num>7){
			$num = 0;
		}
		$dots.eq($num).addClass('hover').siblings('dl li').removeClass('hover');
		$imgs.eq($num).fadeIn(300);
	}
	function small(){
		var small = $('ul','.A_bottom');
		if(Astop){
			small.eq(0).stop().fadeOut(300);
			small.eq(1).stop().fadeIn(300);
			Astop = false;
		}else{
			small.eq(0).stop().fadeIn(300);
			small.eq(1).stop().fadeOut(300);
			Astop = true;
		}
	}
	//轮播图结束
	
	//tab选项卡
		var $tabsBox = $('.A_r_center');
		var $tabs = $('.head_gg li');
		var $tabcs = $('.tab_content_gg>div');
		var tabtimer = setInterval(function(){
			tabsC();
		},5000);
		$tabsBox.hover(function(){
			clearInterval(tabtimer);
		},function(){
			tabtimer = setInterval(function(){
				tabsC();
			},5000);
		})
		$tabs.on('mouseover',function(){
			$(this).addClass('on').siblings().removeClass('on');
			$tabcs.eq($(this).index()).addClass('q').css('display','block').siblings().removeClass('q').css('display','none');
		});
		function tabsC(){
			$tabs.not('.on').addClass('on').siblings().removeClass('on');
			$tabcs.not('.q').addClass('q').css('display','block').siblings().removeClass('q').css('display','none');
		}
	//tab选项卡结束

	
	//B模块 week
		var $B_btns = $('.week_head li');
		var $B_shows = $('.week_con>li');
		$B_btns.on('mousemove',function(){
			$(this).addClass('on').siblings().removeClass('on');
			$B_shows.eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		
	//week结束
		
	//秒杀时间开始
		var $changeTime = $('#miaoshaTime span');
		var $changTime = $('#changeTime li');
		var starttime = new Date();
		var h = starttime.getHours();
		if(h>=0&&h<10){
			$changTime.find('a').removeClass('now');
			$changTime.eq(0).find('a').addClass('now');
		}else if(h>=10&&h<12){
			$changTime.find('a').removeClass('now');
			$changTime.eq(1).find('a').addClass('now');
		}else if(h>=12&&h<17){
			$changTime.find('a').removeClass('now');
			$changTime.eq(2).find('a').addClass('now');
		}else if(h>=17&&h<22){
			$changTime.find('a').removeClass('now');
			$changTime.eq(3).find('a').addClass('now');
		}
		starttime.setHours(starttime.getHours()+1);
		setInterval(function(){
	    	var nowtime = new Date();
	    	var time = starttime - nowtime;
	    	var hour = parseInt(time / 1000 / 60 / 60 % 24);
	    	var minute = parseInt(time / 1000 / 60 % 60);
	    	var seconds = parseInt(time / 1000 % 60);
	    	$changeTime.eq(0).html(toDou(hour));
	    	$changeTime.eq(1).html(toDou(minute));
	    	$changeTime.eq(2).html(toDou(seconds));
		}, 1000);
	//秒杀时间结束	
	
	//tab切换
		E_tab('#tt1');
		E_tab('#tt2');
		function E_tab(id){
			var $E_boxs = $(id+' .con .tabs');
			var $E_tabs = $(id+' .head li');
			$E_tabs.on('mouseover',function(){
				$(this).addClass('on').siblings().removeClass('on');
				$($E_boxs).eq($(this).index()).css('display','block').siblings().css('display','none');
			});
		};
		var $bang_headers = $('.bang_header li');
		var $E_ts = $('.tab');
		$bang_headers.on('mouseover',function(){
			$(this).addClass('on').siblings().removeClass('on');
			$E_ts.eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		bang('#bang1');
		bang('#bang2');
		function bang(id){
			$(id+' .bar').on('mouseover',function(){
				$(this).css('display','none').siblings($(id+' .bar')).css('display','block');
				$(id+' .item').eq($(this).index(id+' .bar')).css('display','block').siblings(id+' .item').css('display','none');
			});
		}
		
	//tab切换结束	
		
	
	//电梯
	
		var $dianti = $('#siderleft');
		var $d_btns = $('li',$dianti);
		var $d_list = $('.fix_screen_list');
		var $fixTop = $('#fixTop');
		$d_btns.hover(function(){
			$(this).addClass('on').css('width','auto').siblings().removeClass('on').css('width','38px');
			$d_list.css('width','auto');
		},function(){
			$d_btns.removeClass('on').css('width','38px');
		});
		$(window).on('scroll',function(){
			$(this).scrollTop()>800?$fixTop.css('display','block'):$fixTop.css('display','none');
			$(this).scrollTop()>1900?$('.fix_box').removeClass('broaden').addClass('reduce'):$('.fix_box').removeClass('reduce').addClass('broaden');
			$('.dianti').each(function(index,value){
				if($(window).scrollTop()<$(this).offset().top+200){
					$d_btns.eq($(this).index('.dianti')).addClass('on').siblings().removeClass('on');
					return false;
				}
			});
		});
		$d_btns.on('click',function(){
        	$('html,body').animate({scrollTop:$('.dianti').eq($(this).index()).offset().top-200}, 500);
			$d_btns.eq($(this).index()-1).addClass('on').siblings().removeClass('on');
		});
		
	//电梯结束	
		
		
	
	//右侧栏
		$('.siderbar_t a').hover(function(){
			$(this).find('span').css('display','block').animate({
				'left':'-79px'
			},300)
		},function(){
			$(this).find('span').css('display','none').animate({
				'left':'0'
			},300);
		})
		$('.code2s').hover(function(){
			$('.code2b').css('display','block');
		},function(){
			$('.code2b').css('display','none');
		});
		
		$('.back_top').hover(function(){
			$(this).find('span').css('display','block').animate({
				'left':'-79px'
			},300);
		},function(){
			$(this).find('span').css('display','none').animate({
				'left':'0'
			},300);
		})
		$('.back_top').on('click',function(){
			$('html,body').animate({scrollTop:0}, 500);
		});
		
		//置顶搜索栏
		
		
		var $fixText = $('#topText');
		$fixText.on('focus',function(){
			if($(this).prop('value')=='秋上新 领80元礼金'){
				$(this).prop('value','');
			}
		});
		$fixText.on('blur',function(){
			if($(this).prop('value')==''){
				$(this).prop('value','秋上新 领80元礼金');
			}
		});
		
		
		
		
//数据区
$.ajax({
	type:"get",
	url:"php/goods.php",
	async:true
}).done(function(data){
	var arr = JSON.parse(data);
	var str = $('.miaosha_con').html();
	for(var i=0;i<10;i++){
		str+="<li class='info'>"+
				'<a href="javascript:;" class="pic"><img src="'+arr[i][2]+'"/></a>'+
				'<div class="line">'+
					"<span class='bar'></span><span class='numBg'></span></div>"+
				'<div class="miaosha_num">已秒杀21%</div>'+
				'<div class="goodName">'+
					'<a href="javascript:;">'+arr[i][1]+'</a>'+
				'</div><div class="price">秒杀价：¥'+
					'<span>'+arr[i][3]+'</span>'+
					'<span class="del">139</span>'+
				'</div>'+
			'</li>';
	}
	$('.miaosha_con').html(str);
});


$.ajax({
	type:"get",
	url:'http://127.0.0.1/dangdang/php/miaosha.php',
	async:true
}).done(function(data){
	var arr = JSON.parse(data);
	var str = $('.miaosha_con').html();
	for(var i=0;i<5;i++){
		str+="<li class='info'>"+
				'<a href="javascript:;" class="pic"><img src="'+arr[i].url+'"/></a>'+
				'<div class="line">'+
					"<span class='bar'></span><span class='numBg'></span></div>"+
				'<div class="miaosha_num">已秒杀21%</div>'+
				'<div class="goodName">'+
					'<a href="javascript:;">'+arr[i].titile+'</a>'+
				'</div><div class="price">秒杀价：'+
					'<span>'+arr[i].price+'</span>'+
					'<span class="del">139</span>'+
				'</div>'+
			'</li>';
	}
	console.log(str);
	$('.miaosha_con').html(str);
});
$.ajax({
	type:"get",
	url:'http://127.0.0.1/dangdang/php/share.php',
	async:true
}).done(function(data){
	var arr = JSON.parse(data);
	var str = $('.loves_con ul').html();
	for(var i=0;i<6;i++){
		str+="<li>"+
				'<a href="javascript:;" class="pic"><img src="'+arr[i].url+'"/></a>'+
				'<div class="line">'+
					"<span class='bar'></span><span class='numBg'></span></div>"+
				'<div class="goodName">'+
					'<a href="javascript:;">'+arr[i].title+'</a>'+
					'<span>'+arr[i].price+'</span>'+
				'</div>'+
			'</li>';
	}
	console.log(str);
	$('.loves_con').html(str);
});
/*ajax({
	type:'get',
	url:'http://127.0.0.1/dangdang/php/share.php',
	success:function(data) {
		var arr=JSON.parse(data);
		var arr='<ul>';
		for (var i=0;i<arr.length;i++) {
			html+='<li>'+
			'<img src="'+arr[i].src+'">'+
			'<p>'+arr[i].title+'</p>'+
			'<span>'+arr[i].price+'</span>'+
			'</li>';
		}
		html+='</ul>';
		document.querySelector('#loves').innerHTML=html;
	}
})*/
var kaiguan = true;
var count = 7;
$(window).on('scroll',function(){
	if($(window).scrollTop()>4600 && kaiguan && count!=0){
		kaiguan = false;
		$.ajax({
			type:"get",
			url:"php/goods.php",
			async:true
			}).done(function(data){
				var arr = JSON.parse(data);
				var str = $('#loves ul').html();
				for(var i=0;i<arr.length;i++){
				str+='<li class="cli" goodsid="'+arr[i][0]+'">'+
					'<a href="javascript:;" class="pic">'+
						'<img src="'+arr[i][2]+'"/>'+
					'</a>'+
					'<p class="name"><a href="javascript:;">'+arr[i][1]+'</a></p>'+
					'<p class="price">'+
						'<span class="price_r">¥<span>'+arr[i][3]+'</span></span>'+
					'</p></li>';
				}
				setTimeout(function(){
					kaiguan = true;
				},300);
				count--;
				$('#loves ul').html(str);
			});
	}
});
var $goodslist = $.cookie('goodsId')?$.cookie('goodsId'):[];
var $goodsnum = $.cookie('goodsnum')?$.cookie('goodsnum'):[];
$('#loves ul').on('click','.cli',function(){
	if(!Array.isArray($goodslist)){
		$goodslist = $goodslist.split(',');
		$goodsnum = $goodsnum.split(',');
	}
	var index = $.inArray($(this).attr('goodsid'),$goodslist);
	if(index==-1){
		$goodslist.push($(this).attr('goodsid'));
		$goodsnum.push(1);
		$.cookie('goodsId',$goodslist.toString());
		$.cookie('goodsnum',$goodsnum.toString());
		changenums();
		alert('添加商品成功！快去购物车看看吧');
	}else{
		$goodsnum[index]++;
		$.cookie('goodsId',$goodslist.toString());
		$.cookie('goodsnum',$goodsnum.toString());
		alert('商品数量加一');
		changenums();
	}
	
	return false;
});		
		
		
		
		
		
		
		
		
		
		
		
		
		
//轮播图
function lunbo(id){
	$(id).flexslider({
		animation: "slide",
		pauseOnHover:true,
		start:function(slider){
			slider.find('.flex-control-nav li:first-child a').addClass('on');
		},
		before:function(slider){
			var items=slider.find('.flex-control-nav li');
			var num = items.has('.on').index()+1;
			if(num==items.length){
				num=0;
			}
  			items.find('a').removeClass('on');
  			items.eq(num).find('a').addClass('on');
		}
 	});
}
lunbo('#A_roll');
lunbo('#E_roll');		
lunbo('#F_roll');
lunbo('#J_roll');	
		
		









