function getStyle(obj, name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj, false)[name];
    }
}
function toDou(n){	
	return n<10?"0"+n:""+n;	
}
function changeDis(obj1,obj2){
	obj1.css('display','block');
	obj2.css('display','none');
}
function tb(data){
var oUl = document.getElementById('keyword');
var arr = data.result;
var str = '';
arr.forEach(function(v){
	str+='<li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170823&ie=utf8&spm=a21bo.50862.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q='+v[0]+'">'+v[0]+'</a></li>';
	});
	oUl.innerHTML = str;
}
function loadScript(url){		//动态加载JS文件
var script = document.createElement("script");
script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}
function tb(data){
var oUl = document.getElementById('keyword');
var arr = data.result;
var str = '';
arr.forEach(function(v){
	str+='<li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170823&ie=utf8&spm=a21bo.50862.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q='+v[0]+'">'+v[0]+'</a></li>';
	});
	oUl.innerHTML = str;
}
//startMove(oDiv, {width: 400, height: 400})
function startMove(obj, json, fnEnd)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        var bStop=true;        //假设：所有值都已经到了
        
        for(var attr in json)
        {
            var cur=0;
            
            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);
            }
            else
            {
                cur=parseInt(getStyle(obj, attr));
            }
            
            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            
            if(cur!=json[attr])
                bStop=false;
            
            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else
            {
                obj.style[attr]=cur+speed+'px';
            }
        }
        
        if(bStop)
        {
            clearInterval(obj.timer);
                        
            if(fnEnd)fnEnd();
        }
    }, 30);
}
function selectRandom(lower,upper){		//该方法返回指定范围的随机数,两边都是闭区间
	var choices = upper - lower +1;
	return Math.floor(Math.random() * choices + lower);
}
function getItemsArr(o)	//用于获取属性名
	    {   
	        var tmpArr = [];
	        for(var item in o)
	        {
	            tmpArr.push(item);
	        }
	        return tmpArr;
	    }
	    function getItemName(idx,o)
	    {
	        return getItemsArr(o)[idx-1];
	    }
function pz(obj1,obj2,len){				//两圆之间的碰撞关系
	var X1 = obj1.offsetWidth/2+obj1.offsetLeft;
	var Y1 = obj1.offsetWidth/2+obj1.offsetTop;
	var X2 = obj2.offsetWidth/2+obj2.offsetLeft;
	var Y2 = obj2.offsetWidth/2+obj2.offsetTop;
	var reduceX = Math.abs(X1-X2);
	var reduceY = Math.abs(Y1-Y2);				
	var l = Math.round(Math.sqrt( Math.pow(reduceX,2) + Math.pow(reduceY,2)));//l是两圆心距离
	 if (l<len)
	 	{
			return true;
		}else{
			return false;
		}
}
function $(obj,oparent){		//获取元素，暂时封装
			var oParent = oparent || document;
			if (obj.substring(0,1) == '#'){
				var oElement = oParent.getElementById(obj.substring(1));
			}else if(obj.substring(0,1) == '.'){
				var oElement = oParent.getElementsByClassName(obj.substring(1));
			}else{
				var oElement = oParent.getElementsByTagName(obj);
			}
			return oElement;
		}
function stopPop(ev){	//兼容性处理冒泡事件
	if(ev.stopPropagation){
		ev.stopPropagation();
	}else{
		ev.cancelBubble = true;
	}
}
function drag(obj){	//对象拖拽封装
	obj.onmousedown = function(ev){
		var oEvent = ev || window.event;
		var disX = oEvent.clientX-obj.offsetLeft;
		var disY = oEvent.clientY-obj.offsetTop;
		if(obj.setCapture){
			obj.setCapture();
		}
		document.onmousemove = function(ev){
			var oEvent = ev || window.event;
			var l = oEvent.clientX - disX;
			var t = oEvent.clientY - disY;
			obj.style.left = l +'px';
			obj.style.top = t + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
			if(obj.releaseCapture){
				obj.releaseCapture();
			}
		}
	}		
}
function loadScript(url){		//动态加载JS文件
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}
function addEvent(obj,event,fn){	//事件绑定封装（兼容）
	if(obj.attachEvent){
		var e = '_' + event;
		obj[e] = obj[e] || [];	//如果该事件存在 那么不变，如果不存在，则赋予一个函数数组
		obj[e].push(fn);
		//在此 并非是逐条执行，而是每次只给一个onclick事件，没有执行，到函数最后的时候已经覆盖全部了
		obj['on'+event] = function(){	
			for(var i in obj[e]){
				obj[e][i].call(obj);
			}
		}
	}else{
		obj.addEventListener(event,fn,false);
	}
}
function removeEvent(obj,event,fn){//  事件绑定封装（兼容）
	if(obj.attachEvent){
		if(obj['_'+event]){
			for(var i in obj['_'+event]){
				if(obj['_'+event][i] == fn){
					obj['_'+event].splice(i,1);
					break;
				}
			}
		}
	}else{
		obj.removeEventListener(event,fn,false);
	}
}
function setCookie(key,value,day){
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	document.cookie = key + '=' + encodeURI(value) + ';expires=' + oDate;
}
function getCookie(key){
	var arrCookie = document.cookie.split('; ');
	for(var i = 0;i<arrCookie.length;i++){
		var newarr = arrCookie[i].split('=');
		if(newarr[0] == key){
			return decodeURI(newarr[1]);
		}
	}
	return false;
}
function delCookie(key){
	setCookie(key,'value',-1);
}
function Pythagorean(obj1,obj2){	//勾股定理封装
	var a = obj1.offsetLeft - obj2.offsetLeft;
	var b = obj1.offsetTop - obj2.offsetTop;
	return Math.sqrt(a*a+b*b);
}
function tostring(obj){//将对象转换成字符串。
	var arr=[];
	for(var i in obj){
		arr.push(i+'='+obj[i])
	}
	return arr.join('&');
}
			
function myAjax(obj){
	//设置默认参数
	var pro=new Promise(function(resolve,reject){
		obj.type=obj.type||'get';//默认就是get方式
		if(typeof obj.data!='string'){
			obj.data=tostring(obj.data);
		}else{
			obj.data=obj.data||'';
		}
		//1.获取ajax对象。
		var ajax=null;
		try{
			ajax=new XMLHttpRequest();
		}catch(e){
			ajax=new ActiveXObject('Microsoft.XMLHTTP');
		}
		//2.打开方式
		if(obj.type=='get' && obj.data){//get的数据放置在url后面。判断数据是否存在。
			obj.url=obj.url+'?'+obj.data;
		}
		ajax.open(obj.type,obj.url,true);
		
		//3.send发送，解析
		if(obj.type=='get'){
			ajax.send();
		}else{
			ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
			ajax.send(obj.data);//post数据放置在send里面
		}
		//4.事件
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4){//send解析完成
				if(ajax.status==200){//
					resolve(ajax.responseText)
				}else{
					reject(ajax.status);
				}
			}
		}
	});
	return pro;//返回promise对象then/catch
}




















