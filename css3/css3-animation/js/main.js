/**
 * Created by Administrator on 2015/12/24.
 */
$(function(){
    $("body").click(function(){
        $(".img1").css({
            "-webkit-transform": "translateZ(80px)"
        });
    });

    $(".img1").transition({
        opacity : 1,
        height : 334 + 'px',
        width : 640 + 'px'
    },'2000','ease-in-out', function () {
        $(".img1").css({
            "-webkit-transform": "translateZ(-160px)"
        });
        setTimeout(function(){
            $("#fragment_title").fragmentFly({
                image_url:"./images/DSC03782-1.jpg",    //背景图路径，当前目录为元素所在的html目录
                cut_dir:"x",    //可选"x"或"y"，默认均分x方向
                ave_part:12,    //均分cut_dir方向，默认切割成12份
                rm_part:[2,3]   //非cut_dir方向上随机切割，默认最小2份，最多3份
            },{
                anime_dir:"down",   //切割子元素动画运行方向，可选"up","down","left","right"，默认为down
                path:[500,800],     //切割子元素动画路长，默认路径最短500px，最长800px
                time:[1000,3000],   //切割子元素动画时长，默认时长最短1000ms，最长1300ms
                opacity:[0,1]       //切割子元素透明度变化，默认初始为1，结束为1(即无渐变)
            });
            setTimeout(function(){
                $(".img3").transition({
                    opacity : 1
                },'50','linear',function(){
                    $(".img3").css({
                        "-webkit-transform": "rotateX(0deg) translateZ(80px)"
                    });
                    /*$(".img3").css({
                        "-webkit-transform-origin" : "right",
                        "-webkit-transform": "rotateY(50deg)"
                    });*/
                    return;
                    setTimeout(function(){
                        $(".panelA").transition({
                            opacity : 0,
                            scale : 0.3
                        },'1000','linear',function(){});
                        $(".panelB").transition({
                            opacity : 0,
                            scale : 0.3
                        },'1100','linear',function(){});
                        $(".panelC").transition({
                            opacity : 0,
                            scale : 0.3
                        },'1200','linear',function(){
                            $(".panelD").transition({
                                opacity : 1
                            },'50','linear',function(){
                                $(".triangle").css({
                                    "-webkit-transform" : "rotateY(360deg)"
                                });
                                setTimeout(function(){
                                    $(".image5").transition({
                                        opacity : 1,
                                        height : 378 + 'px',
                                        width: 640 + 'px'
                                    },'3000','linear',function(){
                                        $(".image5").css({
                                            "-webkit-transform" : "rotateZ(360deg)"
                                        });
                                        setTimeout(function(){
                                            $(".image6").transition({
                                                opacity : 1
                                            },'50','linear',function(){
                                                $(".image6").css({
                                                    "-webkit-transform" : "rotateY(-10deg)"
                                                });
                                            });
                                        },3000);
                                    });
                                },6000);
                            });
                        });
                    },4000);
                });
            },3000);
        },2000);
    });
});