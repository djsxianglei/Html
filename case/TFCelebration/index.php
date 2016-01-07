<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>未来人类十周年庆典-邀请函</title>
    <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=1.0, user-scalable=no">
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="wrapper">
    <div class="music">
        <audio id="audio" autoplay="autoplay" loop="loop" preload="auto">
            <source src="images/music.mp3" type="audio/mpeg">
            <source src="images/music.ogg" type="audio/ogg">
            你的浏览器不支持audio标签
        </audio>
        <audio id="sound" preload="auto">
            <source src="images/sound.mp3" type="audio/mpeg">
            <source src="images/sound.ogg" type="audio/ogg">
            你的浏览器不支持audio标签
        </audio>
        <div id="toggle" onclick="toggleSound();"></div>
    </div>
    <div class="preload-img">
        <img src="images/doorBottom.png" />
        <img src="images/doorTop.png" />
        <img src="images/page2_bg.jpg" />
        <img src="images/page3_bg.jpg" />
        <img src="images/page4_bg.jpg" />
        <img src="images/DSC03470-1.jpg"/>
        <img src="images/DSC03782-1.jpg" />
        <img src="images/DSC_0433-1.jpg" />
        <img src="images/DSC_0081-1.jpg" />
        <img src="images/input_bg.jpg" />
        <img src="images/ig.png"/>
        <img src="images/snake.png"/>
        <img src="images/page5_title.png"/>
        <img src="images/page5_footer.png"/>
    </div>
    <article class="page1">
        <canvas id="loading_canvas"></canvas>
        <div class="swipe"></div>
    </article>
    <div class="page6">
        <div class="ig"></div>
        <div class="snake"></div>
        <div class="glory"></div>
        <div class="hand-in"></div>
    </div>
    <div class="page5">
        <div class="page5_title">
            <div class="tenWord"></div>
        </div>
        <div class="page5_footer"></div>
        <div class="panelA">
            <img src="images/DSC_0081-1.jpg" />
        </div>
        <div class="panelB">
            <img src="images/DSC_0433-1.jpg" />
        </div>
        <div class="panelC">
            <div id="fragment_title"></div>
            <!--<img src="images/DSC03470-1.jpg" />-->
        </div>
        <div class="panelD">
            <img src="images/DSC03782-1.jpg" />
        </div>
        <div class="panelE">
            <img src="images/DSC03394.jpg" />
        </div>
        <div class="panelF">
            <img src="images/DSC_0092.jpg" />
        </div>
    </div>
    <div class="page2">
        <div class="page2-btn"></div>
        <div class="doorTop"></div>
        <div class="doorBottom"></div>
        <div class="wordType">
            <p></p>
            <p style="text-indent: 44px;"></p>
            <p style="text-indent: 44px;"></p>
        </div>
        <div class="activitySite"></div>
        <div class="arrowRight"></div>
        <div class="waveWord"></div>
    </div>
    <div class="page3">
        <div class="page3-info">
            <a class="map" href="http://api.map.baidu.com/marker?location=31.323631,120.718211&title=%e9%87%91%e9%b8%a1%e6%b9%96%e6%96%b0%e7%bd%97%e9%85%92%e5%ba%97%e8%8b%8f%e5%9b%ad%e5%8e%85&content=%e5%b7%a5%e4%b8%9a%e5%9b%ad%e5%8c%ba%e6%97%ba%e5%a2%a9%e8%b7%af188%e5%8f%b7%e8%bf%91%e7%8e%b0%e4%bb%a3%e4%bc%91%e9%97%b2%e5%b9%bf%e5%9c%ba&output=html"></a>
            <div class="arrowRight"></div>
        </div>
    </div>
    <div class="page7">
        <div class="arrowRight" style="display:none;"></div>
        <div class="activity1 activity">
            <div class="activity_time">17:00-18:08</div>
            <div class="activity_name">员工签到/入场</div>
        </div>
        <div class="activity2 activity">
            <div class="activity_time">18:08-18:12</div>
            <div class="activity_name">开场视频</div>
        </div>
        <div class="activity3 activity">
            <div class="activity_time">18:12-18:15</div>
            <div class="activity_name">开场曲</div>
        </div>
        <div class="activity4 activity">
            <div class="activity_time">18:15-18:18</div>
            <div class="activity_name">开场表演1</div>
        </div>
        <div class="activity5 activity">
            <div class="activity_time">18:18-18:21</div>
            <div class="activity_name">主持人开场</div>
        </div>
        <div class="activity6 activity">
            <div class="activity_time">18:21-18:25</div>
            <div class="activity_name">总经理致辞</div>
        </div>
        <div class="activity7 activity">
            <div class="activity_time">18:25-18:30</div>
            <div class="activity_name">员工节目1</div>
        </div>
        <div class="activity8 activity">
            <div class="activity_time">18:30-18:45</div>
            <div class="activity_name">用餐</div>
        </div>
    </div>
    <div class="page8">
        <div class="arrowRight" style="display:none;"></div>
        <div class="activity9 activity">
            <div class="activity_time">18:45-18:50</div>
            <div class="activity_name">抽奖</div>
        </div>
        <div class="activity10 activity">
            <div class="activity_time">18:50-18:55</div>
            <div class="activity_name">员工节目2</div>
        </div>
        <div class="activity11 activity">
            <div class="activity_time">18:55-19:00</div>
            <div class="activity_name">主持人节目</div>
        </div>
        <div class="activity12 activity">
            <div class="activity_time">19:00-19:05</div>
            <div class="activity_name">抽奖</div>
        </div>
        <div class="activity13 activity">
            <div class="activity_time">19:05-19:10</div>
            <div class="activity_name">员工节目3</div>
        </div>
        <div class="activity14 activity">
            <div class="activity_time">19:10-19:30</div>
            <div class="activity_name">用餐</div>
        </div>
        <div class="activity15 activity">
            <div class="activity_time">19:30-19:35</div>
            <div class="activity_name">舞蹈表演</div>
        </div>
        <div class="activity16 activity">
            <div class="activity_time">19:35-19:45</div>
            <div class="activity_name">乐队表演</div>
        </div>
    </div>
    <div class="page9">
        <div class="arrowRight" style="display:none;"></div>
        <div class="activity17 activity">
            <div class="activity_time">19:45-19:50</div>
            <div class="activity_name">抽奖</div>
        </div>
        <div class="activity18 activity">
            <div class="activity_time">19:50-19:55</div>
            <div class="activity_name">员工节目4</div>
        </div>
        <div class="activity19 activity">
            <div class="activity_time">19:55-20:00</div>
            <div class="activity_name">舞蹈</div>
        </div>
        <div class="activity20 activity">
            <div class="activity_time">20:00-20:05</div>
            <div class="activity_name">抽奖</div>
        </div>
        <div class="activity21 activity">
            <div class="activity_time">20:05-20:10</div>
            <div class="activity_name">员工节目5</div>
        </div>
        <div class="activity22 activity">
            <div class="activity_time">20:10-20:25</div>
            <div class="activity_name">乐队表演</div>
        </div>
        <div class="activity23 activity">
            <div class="activity_time">20:25-20:30</div>
            <div class="activity_name">结束曲</div>
        </div>
    </div>
    <div class="page10">
        <div class="arrowRight" style="display:none;"></div>
        <div class="jiang"></div>
        <div class="liwu"></div>
    </div>
    <div class="page4">
        <form id="user" action="up.php" method="post">
            <p><input type="text" placeholder="公司名称" name="companyName"  required/> </p>
            <p><input type="number" placeholder="参加人数" name="joinNum" required/></p>
            <p><input type="text" placeholder="联系人" name="linkMan" required/></p>
            <p><input type="email" placeholder="电子邮箱" name="email"  required/></p>
            <p><input type="number" placeholder="手机" name="phone"  required/></p>
            <button class="submit"></button>
        </form>
    </div>
</div>
<script src="js/jquery-2.1.4.js" type="text/javascript"></script>
<script src="js/jquery.transit.js" type="text/javascript"></script>
<script src="js/jquery.fragmentFly.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>
<script>
    $(function(){
        var sn=location.hash;
        sn=sn.split('#')[1];
        if(sn != ""){
            if(sn == "mark"){
                $(".page1").hide();
                $(".page2").hide();
                $(".page4").hide();
                $(".page3").show();
                $(".page3-info").show();
                $(".page3-info").transition({
                    opacity : 1
                },'1000','linear',function(){

                });

            }
        }
    });
</script>
<script>
    var audio = document.getElementById("audio");
    var sound = document.getElementById('sound');
    var mAudio = 1;
    $("#toggle").addClass("toggle_pic");
    if(audio.paused){
        audio.play();
        $("#toggle").addClass("toggle_pic");
        $("#toggle").css('background-image','url(images/openMusic.png)');
    }
    function toggleSound(){
        var audio = document.getElementById("audio");
        if(audio.paused){
            audio.play();
            mAudio = 1;
            $("#toggle").addClass("toggle_pic");
            $("#toggle").css('background-image','url(images/openMusic.png)');
        }else{
            audio.pause();
            mAudio = 0;
            $("#toggle").removeClass("toggle_pic");
            $("#toggle").css('background-image','url(images/closeMusic.png)');
        }
    }
    document.addEventListener("WeixinJSBridgeReady",function(){
        WeixinJSBridge.invoke('getNetworkType',{}, function(e){
            if(mAudio == 1){
                audio.play();
            }
        })
    },false);
</script>
<script>
    $(function(){
        $("form").submit(function(e){
            var companyName = $("input[name='companyName']").val();
            var joinNum = $("input[name='joinNum']").val();
            var linkMan = $("input[name='linkMan']").val();
            var email = $("input[name='email']").val();
            var phone = $("input[name='phone']").val();
            if(companyName == ''){
                alert("公司名称不能为空！");
                return false;
            }
            if(!/^-?[1-9]\d*$/.test(joinNum)){
                alert("参加人数不能为空！或参加人数必须为整数！");
                return false;
            }
            if(linkMan == ''){
                alert("联系人不能为空！");
                return false;
            }
            if(!/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(email)){
                alert("电子邮箱不能为空！或电子邮箱不正确！");
                return false;
            }
            if(!/(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/.test(phone)){
                alert("电话号码不能为空！或者电话格式不正确");
                return false;
            }
            alert("报名已截止！");
            return false;
        });
    });


    $(function(){

    });
</script>
</body>
</html>