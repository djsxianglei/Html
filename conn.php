<?php
//�������ݿ�
$conn=mysql_connect("10.51.22.234:11201","weixin","DMMrS8X52XJSupYs") or die(mysql_error());
mysql_select_db("weixin",$conn) or die(mysql_error());
mysql_query("set names 'utf8'"); //ʹ��utf8���ı���;
//include("log_visiter.php");
?>