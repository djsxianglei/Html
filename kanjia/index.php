<?php

?>

<!DOCTYPE>
<!-- saved from url=(0034)http://www.terransforce.com/gsync/ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=1.0, user-scalable=no">
<meta charset="utf-8">
<style type="text/css">
* { font-family: microsoft yahei, 'Raleway', sans-serif; margin: 0; padding: 0; list-style-type: none; }

body, ul, li {
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 14px;
    }
a{
text-decoration:none;
}
img{
	margin:auto;
	}
#main{
	-moz-transform:scale(1);
	-webkit-transform:scale(2); 
	-o-transform:scale(3);
	
	-moz-transform-origin:top left;
	-webkit-transform-origin:top left;
	-o-transform-origin:top left;
	}
form{
	min-height:240px;
	width: 90%;
    margin: 0 auto;
}
input{
    height: 60px;
    width: 80%;
    margin-top: 26px;
    border: 1px solid #626262;
    background-color: #111414;
	padding-left:20px;
	color:#fff;
	font-size: 26px;
    line-height: 60px;
}
</style>

</head>
<body>
<div id="main" style="width: 640px; text-align: center; transform: matrix(1.171875, 0, 0, 1.171875, 0, 0);">
<div style="background: url(./images/content_bg.jpg);height:100%;">
	<form method="post" enctype="multipart/form-data" action="">
		<div style="padding-top:10px;"><h1 style="color:#fff;">NTF门票检票系统</h1></div>
		<p><input type="text" name="cdkey" placeholder="兑换码" required /></p>
		<p style="width:80%;margin:0 auto;height:60px;">
			<input type="submit" value="查询" style="width: 42%;padding: 0px;float: left;cursor: pointer;" />
			<a href="http://192.168.1.112/checkpiao/index.php?id=<?php if(isset($data['0']))echo $data['0'];?>" style="width: 42%;margin-left: 10%;display: inline-block;height: 60px;margin-top: 26px;border: 1px solid #626262;background-color: #111414;padding-left: 20px;color: #fff;font-size: 26px;line-height: 60px;float: left;" >兑换</a>
		</p>
	</form> 
	<div class="msg">
		<?php if(isset($data['7'])){?>
			<?php if($data['7'] == '0'){?>
				<p><h1 style="color:#ffffff;">兑换信息</h1></p>
				<p style="color:#fff;">兑换码:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['1'];?>"  /></p>
				<?php if($data['2']){?><p style="color:#fff;">价　格:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['2'];?>" /></p><?php }?>
				<?php if($data['3']){?><p style="color:#fff;">场　次:<span style="display:inline-block;width: 80%;margin-top: 10px;background-color: #111414;color:#fff;font-size: 16px;line-height: 22px;"><?php echo $data['3'];?></span></p><?php }?>
				<?php if($data['4']){?><p style="color:#fff;">数　量:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['4'];?>" /></p><?php }?>
				<?php if($data['5']){?><p style="color:#fff;">姓　名:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['5'];?>" /></p><?php }?>
				<?php if($data['6']){?><p style="color:#fff;">电　话:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['6'];?>" /></p><?php }?>
			<?php }else{?>
				<p><h1 style="color:#ffffff;">兑换信息</h1></p>
				<p style="color:#C74343;margin-top:10px;">不好意思，该兑换码已经兑换！</p>
				<p style="color:#C74343">兑换时间:<?php echo date("Y-m-d H:i:s",$data['8']);?></p>
				<p style="color:#fff;">兑换码:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['1'];?>"  /></p>
				<?php if($data['2']){?><p style="color:#fff;">价　格:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['2'];?>" /></p><?php }?>
				<?php if($data['3']){?><p style="color:#fff;">场　次:<span style="display:inline-block;width: 80%;margin-top: 10px;background-color: #111414;color:#fff;font-size: 16px;line-height: 22px;"><?php echo $data['3'];?></span></p><?php }?>
				<?php if($data['4']){?><p style="color:#fff;">数　量:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['4'];?>" /></p><?php }?>
				<?php if($data['5']){?><p style="color:#fff;">姓　名:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['5'];?>" /></p><?php }?>
				<?php if($data['6']){?><p style="color:#fff;">电　话:<input style="border:0px;margin-top:10px;" type="text" value="<?php echo $data['6'];?>" /></p><?php }?>
			<?php }?>
		<?php }?>
	</div>
</div>

</div>
<script type="text/javascript" src="./images/jquery-1.11.1.min.js"></script> 
<script type="text/javascript">
$(document).ready(function(){
	var num=$(window).width();
	num=num/640;
	$('#main').css('transform','matrix('+num+', 0, 0, '+num+', 0, 0)');
})
$(window).resize(function() {
	var num=$(window).width();
	num=num/640;
	$('#main').css('transform','matrix('+num+', 0, 0, '+num+', 0, 0)');
});
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
WeixinJSBridge.call('hideOptionMenu');
});
</script>
</body></html>