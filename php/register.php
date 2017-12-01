<?php 
	header('content-type:text/html;charset=utf-8');
	
	if(isset($_POST['username'])){
		$name = $_POST['username'];
		$pwd = $_POST['pwd'];
		$tel = $_POST['tel'];
		$email = $_POST['email'];
		$conn=@mysql_connect('localhost','root','12345678') or die('呵呵，你连不上'.mysql_error());
		mysql_select_db('dangdang');
		mysql_query('SET NAMES UTF8');
		$arr = mysql_fetch_array(mysql_query('select max(id) from users'),MYSQL_NUM);
		$max = ++$arr[0];
		$sqlinsert="insert into users(id,username,password,tel,email) values({$max},'{$name}','{$pwd}','{$tel}','{$email}')";
		$a=mysql_query($sqlinsert);
		echo '<script>alert("注册成功");window.location.href="../cart.html";</script>';
	}else{
		$conn=@mysql_connect('localhost','root','12345678') or die('呵呵，你连不上'.mysql_error());
		mysql_select_db('dangdang');
		mysql_query('SET NAMES UTF8');
		$result = mysql_query('select * from users');
		$arr = array();
		for($i=0;$i<mysql_num_rows($result);$i++){
			$arr[$i]=mysql_fetch_array($result,MYSQL_NUM);
		}
		echo json_encode($arr);
	}
	mysql_close($conn);
?>