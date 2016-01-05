<?php
header('Content-Type: text/html; charset=UTF-8');
$companyName = $_POST['companyName'];
$joinNum = $_POST['joinNum'];
$linkMan = $_POST['linkMan'];
$email = $_POST['email'];
$phone = $_POST['phone'];
//连接数据库
$mysql_server_name="10.51.22.234:11201"; //数据库服务器名称
$mysql_username="weixin"; // 连接数据库用户名
$mysql_password="DMMrS8X52XJSupYs"; // 连接数据库密码
$mysql_database="weixin"; // 数据库的名字
// 连接到数据库
$conn=mysql_connect($mysql_server_name, $mysql_username,$mysql_password);
if(!$conn){
	$status = 1;
}
//选择数据库  
mysql_select_db($mysql_database) or die("121Unable to select database!");
mysql_query("set names 'utf8'"); 
$query = "INSERT INTO 
						tf_vip_info_record(
								companyName,
								joinNum,
								linkMan,
								email,
								phone
								) 
						VALUE(
						       '$companyName', 
							   '$joinNum',
							   '$linkMan',
							   '$email',
							   '$phone'
							 )";
//执行该查询  
$result = mysql_query($query) or die("Error in query: $query. ".mysql_error());
if($result){
	echo "<script>alert('恭喜你！vip信息记录成功');location.href='http://app.terransforce.com/TFCelebration/index.php#mark'</script>";
}else{
	echo "<script>alert('vip信息记录失败，请重试!');history.go(-1);</script>"; 
}


?>