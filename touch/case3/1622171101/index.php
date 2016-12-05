<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>苏太情太湖香米-正宗苏州地产大米</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Cache-Control" content="no-transform ">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection" content="telephone=no, email=no" />
<link href="css/index.css" rel="stylesheet"/>
<link href="css/main.css" rel="stylesheet"/>
<script src="js/jquery-1.9.1.min.js"></script>
</head>
<body>
<div class="one">
    <div class="content">
        <img class="lazy" data-original="images/rice_one1.jpg">
        <img class="lazy" data-original="images/rice_two.jpg">
        <img class="lazy" data-original="images/rice_three.jpg">
        <img class="lazy" data-original="images/rice_four.jpg">
        <img class="lazy" data-original="images/rice_five.jpg">
    </div>
    <a href="###" class="one_bottom">点击选购&nbsp;&nbsp;9.9包邮</a>

    <script type="text/javascript" src="js/jquery.lazyload.js"></script>
    <script>
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
        $(function(){
            $('.one_bottom').click(function(){
                $('.one').hide();
                $('.two').show();
            });
        });
    </script>
</div>
<div class="two" style="display:none;">
    <script src="js/icheck.min.js"></script>
    <script>
        $(document).ready(function(){
            $('.adress input').each(function(){
                var self = $(this),
                        label = self.next(),
                        label_text = label.text();

                label.remove();
                self.iCheck({
                    checkboxClass: 'icheckbox_sm-blue',
                    radioClass: 'radio_sm-blue',
                    insert: label_text
                });
            });
            $('.adress input').on('ifChecked', function(event){
                var payType = $('input[name="pay_method"]:checked').val();
                var num = $(this).val();
				//建行
				if(num == 1){
					$('input[name="other_money"]').val('20');
					$('#ricePrice').html('29.9');
				}else{
					$('input[name="other_money"]').val('0');
					$('#ricePrice').html('9.9');
				}
               
            });
        });
    </script>
    <!--头部-->
    <header class="header">
        <a href="#"><img src="images/rice_one.jpg"></a>
    </header>
    <div class="content_t_top">苏太情太湖香米</div>
    <div class="content_t_line"></div>
    <form class="formlist" action="http://www.leadnew.cn/index.php/Siit/suborder.html" id="form_submit">
        <input type="hidden" name="id" value="983"/>
        <input type="hidden" name="other_money" value="0"/>
        <ul class="write">
            <li class="adress">
                <div class="buy_left">配送</div>
                <div class="buy_right">
                    <div class="adress_z">
                        <input type="radio" id="adress-jzh" name="radio-adress" value="0" checked>
                        <label for="adress-jzh">江浙沪</label>
                    </div>
                    <div class="adress_z adress_j">
                        <input type="radio" id="adress-fjzh" name="radio-adress" value="1" >
                        <label for="adress-fjzh">非江浙沪</label><span class="red">+20元</span>
                    </div>
                </div>
            </li>
            <li class="addplus">
                <div class="buy_left">数量</div>
                <div class="buy_right">
                    <div class="add">
                        <input name="num" type="tel" value="1" class="buy_main_number" readonly="readonly" id="quantity">
                    </div>
                </div>
            </li>
        </ul>
        <div class="content_t_top" style="padding-top: 6px;">支付方式</div>
        <div class="content_t_line"></div>
        <ul class="write write_t pay_type">
			<li class="radiochose">
				<input class="regular-radio" id="radio-1-18" type="radio" name="pay_method" style="display:none;" value="12" checked="checked">
				<label for="radio-1-18" class="payselected">
					<img style="height:40px;" src="images/zfb_logo.png" alt="支付宝支付" p_price="">
				</label>
			</li>
			<li class="radiochose">
				<input class="regular-radio" id="radio-1-9" type="radio" name="pay_method" style="display:none;" value="14">
				<label for="radio-1-9" class="">
					<img style="height:40px;" src="images/wx_logo.png" alt="微信支付" p_price="">
				</label>
			</li>
                
          
        </ul>
        <div class="content_t_line"></div>
        <div class="write" id="tatal">
            共计：<i class="rice" id="ricePrice">9.9</i>元
        </div>
        <div class="content_t_line"></div>
        <ul class="write write_t">
            <li class="icons">
                <i>姓名 :</i>
                <input class="ui-input-b" type="text" id="name" name="contact" value="" placeholder="请输入您的姓名">
            </li>
            <li class="icons">
                <i>电话 :</i>
                <input class="ui-input-b" type="text" id="phone" name="mobile" maxlength="11" value="" placeholder="请输入您的电话">
            </li>
            <li class="icons">
                <i>详细地址 :</i>
                <input id="address" class="ui-input-b" type="text" name="address" value="" placeholder="输入家庭住址" style="padding-left:84px;">
            </li>
        </ul>
        <a class="buybutton" id="buysubmit" style="margin-bottom: 6px;">立即购买</a>
        <p style="font-size: 10px;text-align: left;width: 100%;color: rgb(243, 47, 47);padding: 0px 10px;line-height: 16px;">活动商品限购1件，同姓名、电话、相近地址视为同一用户，多购不发货。</p>
    </form>
    <!--加减-->
    <script type="text/javascript">
        var subBtn = $("#buysubmit");
        var phone = $("#phone");
        subBtn.click(function(){
            $(this).attr("disabled", "disabled");
            if($("#name").val()==""){
                alert("请输入姓名");
                subBtn.removeAttr("disabled");
                return false;
            }
            if($("#phone").val()==""){
                alert("请输入手机号码");
                subBtn.removeAttr("disabled");
                return false;
            }
            if(!testNumber(phone.val())){
                alert('手机号码错误');
                subBtn.removeAttr("disabled");
                return false;
            }
            if($("#address").val()==""){
                alert("请输入家庭住址");
                subBtn.removeAttr("disabled");
                return false;
            }
            $("#form_submit").submit();
        });
        //电话号码验证
        function testNumber(value){
            var a = /^(13|14|15|17|18)[0-9]{9}$/;
            return a.test(value);
        }
    </script>
</div>
</body>
</html>
