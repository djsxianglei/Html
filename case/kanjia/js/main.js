
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
$(function(){
    $("header div:nth-child(3) p span:first-child").click(function(){
        $(".box").css('display','block');
    });
    $(".sure").click(function(){
		alert("dffs");
		$(".box").hide();
       $(".box").css('display','none');
    });
    $("header div:nth-child(3) p span:last-child").click(function(){
       $("header div:nth-child(3) p").hide();
       $("header div:nth-child(3) div").show();
    });
    $("header div:nth-child(3) div div:last-child span:first-child").click(function(){
        alert("邀请好友");
    });
    $("header div:nth-child(3) div div:last-child span:last-child").click(function(){
        alert("立即购买");
    });
	$(".more").click(function(){
		alert("加载更多");
	});
});