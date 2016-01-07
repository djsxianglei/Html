/**
 * Created by Administrator on 2015/12/21.
 */
window.onload = function(){
    var WIDTH = $("body").width();
    var HEIGHT = $("body").height();
    /*page1加载和拖动*/
    loading().then(function(){
        $(".swipe").show();
        $("#loading_canvas").hide();
        $(".arrowRight").show();
        $(".arrowRight").addClass("arrowRun");
        var page1 = $(".page1");
        var mx = '';
        page1.bind("touchstart",function(){
            if(mAudio == 1){
                if(audio.paused){
                    audio.play();
                }
            }
            event.preventDefault();
            var touch1 = event.touches[0];
            startX = touch1.pageX;
        });
        page1.bind("touchmove",function(){
            event.preventDefault();
            var touch1 = event.touches[0];
            moveX = touch1.pageX;
            mx = moveX-startX;
            page1.css({"left":mx+"px"});
        });
        page1.bind("touchend",function(){
            event.preventDefault();
            mx = startX - moveX;
            if(mx>150){
                page1.hide();
                $(".page6").show();
                $(".ig").transition({
                    opacity : 1
                },'1000','ease-in',function(){
                    $(".snake").transition({
                        opacity : 1
                    },'1000','ease-in',function(){
                        $(".glory").show();
                        $(".hand-in").show();
                        $(".glory").transition({
                            transform: 'translateX('+320+'px)'
                        },'1000','linear',function(){});
                        $(".hand-in").transition({
                            transform: 'translateX(-'+320+'px)'
                        },'1000','linear',function(){
                            setTimeout(function(){
                                $(".page6").hide();
                                $(".page5").show();
                                $(".page5_footer").transition({
                                    transform: 'translateY(-'+65+'px)'
                                },'500','linear',function(){});
                                $(".page5_title").transition({
                                    transform: 'translateY('+79+'px)'
                                },'500','linear',function(){
                                    $(".tenWord").transition({
                                        opacity:1
                                    },'400','ease-in',function(){
                                        $(".panelA").transition({
                                            opacity:1,
                                            width : "80%"
                                        },'1000','linear',function(){
                                            $(".panelB").transition({
                                                opacity:1
                                            },'1000','linear',function(){
                                                setTimeout(function(){
                                                    $(".panelA").transition({
                                                        opacity : 0,
                                                        scale : 0.3
                                                    },'600','linear',function(){});
                                                    $(".panelB").transition({
                                                        opacity : 0,
                                                        scale : 0.3
                                                    },'700','linear',function(){
                                                        $(".panelC").transition({
                                                            opacity : 1
                                                        },'1000','linear',function(){
                                                            $("#fragment_title").fragmentFly({
                                                                image_url:"./images/DSC03470-1.jpg",    //背景图路径，当前目录为元素所在的html目录
                                                                cut_dir:"x",    //可选"x"或"y"，默认均分x方向
                                                                ave_part:12,    //均分cut_dir方向，默认切割成12份
                                                                rm_part:[2,3]   //非cut_dir方向上随机切割，默认最小2份，最多3份
                                                            },{
                                                                anime_dir:"down",   //切割子元素动画运行方向，可选"up","down","left","right"，默认为down
                                                                path:[500,800],     //切割子元素动画路长，默认路径最短500px，最长800px
                                                                time:[500,1500],   //切割子元素动画时长，默认时长最短1000ms，最长1300ms
                                                                opacity:[0,1]       //切割子元素透明度变化，默认初始为1，结束为1(即无渐变)
                                                            });
                                                            setTimeout(function(){
                                                                $("#fragment_title").css({
                                                                    "border": "4px solid #023c91",
                                                                    "border-radius":"10px"
                                                                });
                                                                $(".panelD").transition({
                                                                    opacity : 1
                                                                },'1000','linear',function(){
                                                                    setTimeout(function(){
                                                                        $(".panelC").transition({
                                                                            opacity : 0,
                                                                            scale : 0.3
                                                                        },'600','linear',function(){});
                                                                        $(".panelD").transition({
                                                                            opacity : 0,
                                                                            scale : 0.3
                                                                        },'700','linear',function(){
                                                                            $(".panelE").show();
                                                                            $(".panelE").transition({
                                                                                opacity:1
                                                                            },'1000','linear',function(){
                                                                                $(".panelF").show();
                                                                                $(".panelF").transition({
                                                                                    opacity:1
                                                                                },'1000','linear',function(){
                                                                                    setTimeout(function(){
                                                                                        $(".page5").hide();
                                                                                        $(".page2").show();
                                                                                        var wordWave = new WaveWord($(".waveWord"));
                                                                                        wordWave.initPlay(">点击解锁<");
                                                                                    },2000);
                                                                                })
                                                                            });


                                                                        });
                                                                    },2000);
                                                                });
                                                            },1500);
                                                        });
                                                    });
                                                },2000);
                                            });
                                        });
                                    });
                                });
                            },1000);
                        });

                    });
                });
            }else{
                page1.animate({"left":"0"},200);
            }
        });
    });
    $(".page2-btn").click(function(){
        sound.play();
        var wordWave = new WaveWord($(".waveWord"));
        wordWave.stopPlay();
        $(".waveWord").hide();
        var doorTopHeight = $(".doorTop").height();
        var doorBottomHeight = $(".doorBottom").height();
        var inH = HEIGHT * 0.336;
        var inX = doorBottomHeight - inH;
        $(".doorTop").transition({
            top : '-' +doorTopHeight + 'px'
        },'1500','linear',function(){});
        $(".doorBottom").transition({
            bottom : '-'+ inX + 'px'
        },'1500','linear',function(){
            if(mAudio == 1){
                if(audio.paused){
                    audio.play();
                }
            }
            setTimeout(function(){
                $(".page2-btn").hide();
                typedWord($(".wordType p:nth-child(1)"),'尊敬的先生/女士：').then(function(){
                    return typedWord($(".wordType p:nth-child(2)"),'您好！');
                }).then(function(){
                    return typedWord($(".wordType p:nth-child(3)"),'在Terrans  Force（未来人类）发展的十年时光里，非常荣幸的得到您的信任与合作；希望在未来的十年发展规划里，能够继续得到您的认可与支持！现诚挚邀请您百忙之中参加Terrans  Force（未来人类）举办的十周年年会庆典活动！');
                }).then(function(){
                    var typedWordHeight = $(".wordType").height();
                    var typedWordTop = $(".wordType").offset().top;
                    var indH = typedWordHeight + typedWordTop + 30 + 'px';
                    $(".activitySite").css("top",indH);
                    var a = $(".activitySite").height();
                    var b = $(".activitySite").width();
                    console.log(a);console.log(b);
                    $(".activitySite").transition({
                        opacity : 1
                    },'2000','linear',function(){
                        /*page2加载和拖动*/
                        var page2 = $(".page2");
                        var mx = '';
                        page2.bind("touchstart",function(){
                            event.preventDefault();
                            var touch1 = event.touches[0];
                            startX = touch1.pageX;


                        });
                        page2.bind("touchmove",function(){
                            event.preventDefault();
                            var touch1 = event.touches[0];
                            moveX = touch1.pageX;
                            mx = moveX-startX;
                            page2.css({"left":mx+"px"});

                        });
                        page2.bind("touchend",function(){
                            event.preventDefault();
                            mx = startX - moveX;
                            if(mx>150){
                                page2.hide();
                                $(".page3-info").show();
                                $(".page3").show();
                                $(".page3-info").transition({
                                    opacity : 1
                                },'1000','linear',function(){
                                    $(".arrowLeft ").show();
                                    $(".arrowLeft ").addClass('arrowRun');
                                    $(".map").click(function(){
                                        location.href = "http://api.map.baidu.com/marker?location=31.323631,120.718211&title=%e9%87%91%e9%b8%a1%e6%b9%96%e6%96%b0%e7%bd%97%e9%85%92%e5%ba%97%e8%8b%8f%e5%9b%ad%e5%8e%85&content=%e5%b7%a5%e4%b8%9a%e5%9b%ad%e5%8c%ba%e6%97%ba%e5%a2%a9%e8%b7%af188%e5%8f%b7%e8%bf%91%e7%8e%b0%e4%bb%a3%e4%bc%91%e9%97%b2%e5%b9%bf%e5%9c%ba&output=html";
                                    });
                                });
                                //$(".page3").show();
                            }else{
                                page3.animate({"left":"0"},200);
                            }
                        });
                    });
                });
            },1000)



        });
    });
    /*page2加载和拖动*/
    var page3 = $(".page3");
    var mx = '';
    page3.bind("touchstart",function(){
        //event.preventDefault();
        var touch1 = event.touches[0];
        var mapHeight = $(".map").height();
        var mapWidth = $(".map").width();
        var mapOffTop = $(".map").offset().top;
        var mapOffLeft = $(".map").offset().left;
        var instanceX = mapOffLeft + mapWidth;
        var instanceY = mapOffTop + mapHeight;
        startX = touch1.pageX;
        startY = touch1.pageY;
        console.log(startY);
        if(startX > mapOffLeft && startX < instanceX && startY > mapOffTop && startY < instanceY){
            location.href = "http://api.map.baidu.com/marker?location=31.323631,120.718211&title=%e9%87%91%e9%b8%a1%e6%b9%96%e6%96%b0%e7%bd%97%e9%85%92%e5%ba%97%e8%8b%8f%e5%9b%ad%e5%8e%85&content=%e5%b7%a5%e4%b8%9a%e5%9b%ad%e5%8c%ba%e6%97%ba%e5%a2%a9%e8%b7%af188%e5%8f%b7%e8%bf%91%e7%8e%b0%e4%bb%a3%e4%bc%91%e9%97%b2%e5%b9%bf%e5%9c%ba&output=html";
        }

    });
    page3.bind("touchmove",function(){
        event.preventDefault();
        var touch1 = event.touches[0];
        moveX = touch1.pageX;
        mx = moveX-startX;
        page3.css({"left":mx+"px"});

    });
    page3.bind("touchend",function(){
        event.preventDefault();
        mx = startX - moveX;
        if(mx>150){
            page3.hide();
            $(".page7").show();
            $(".activity1").transition({
                opacity : 1
            },'800','linear',function(){
                $(".activity2").transition({
                    opacity : 1
                },'800','linear',function(){
                    $(".activity3").transition({
                        opacity : 1
                    },'800','linear',function(){
                        $(".activity4").transition({
                            opacity : 1
                        },'800','linear',function(){
                            $(".activity5").transition({
                                opacity : 1
                            },'800','linear',function(){
                                $(".activity6").transition({
                                    opacity : 1
                                },'800','linear',function(){
                                    $(".activity7").transition({
                                        opacity : 1
                                    },'800','linear',function(){
                                        $(".activity8").transition({
                                            opacity : 1
                                        },'800','linear',function(){
                                            $(".arrowRight").show();
                                            var page7 = $(".page7");
                                            var mx = '';
                                            page7.bind("touchstart",function(){
                                                event.preventDefault();
                                                var touch1 = event.touches[0];
                                                startX = touch1.pageX;
                                            });
                                            page7.bind("touchmove",function(){
                                                event.preventDefault();
                                                var touch1 = event.touches[0];
                                                moveX = touch1.pageX;
                                                mx = moveX-startX;
                                                page7.css({"left":mx+"px"});
                                            });
                                            page7.bind("touchend",function(){
                                                event.preventDefault();
                                                mx = startX - moveX;
                                                if(mx>150){
                                                    page7.hide();
                                                    $(".arrowRight").hide();
                                                    $(".page8").show();
                                                    $(".activity9").transition({
                                                        opacity : 1
                                                    },'800','linear',function(){
                                                        $(".activity10").transition({
                                                            opacity : 1
                                                        },'800','linear',function(){
                                                            $(".activity11").transition({
                                                                opacity : 1
                                                            },'800','linear',function(){
                                                                $(".activity12").transition({
                                                                    opacity : 1
                                                                },'800','linear',function(){
                                                                    $(".activity13").transition({
                                                                        opacity : 1
                                                                    },'800','linear',function(){
                                                                        $(".activity14").transition({
                                                                            opacity : 1
                                                                        },'800','linear',function(){
                                                                            $(".activity15").transition({
                                                                                opacity : 1
                                                                            },'800','linear',function(){
                                                                                $(".activity16").transition({
                                                                                    opacity : 1
                                                                                },'800','linear',function(){
                                                                                    $(".arrowRight").show();
                                                                                    var page8 = $(".page8");
                                                                                    var mx = '';
                                                                                    page8.bind("touchstart",function(){
                                                                                        event.preventDefault();
                                                                                        var touch1 = event.touches[0];
                                                                                        startX = touch1.pageX;
                                                                                    });
                                                                                    page8.bind("touchmove",function(){
                                                                                        event.preventDefault();
                                                                                        var touch1 = event.touches[0];
                                                                                        moveX = touch1.pageX;
                                                                                        mx = moveX-startX;
                                                                                        page8.css({"left":mx+"px"});
                                                                                    });
                                                                                    page8.bind("touchend",function(){
                                                                                        event.preventDefault();
                                                                                        mx = startX - moveX;
                                                                                        if(mx>150){
                                                                                            page8.hide();
                                                                                            $(".arrowRight").hide();
                                                                                            $(".page9").show();
                                                                                            $(".activity17").transition({
                                                                                                opacity : 1
                                                                                            },'800','linear',function(){
                                                                                                $(".activity18").transition({
                                                                                                    opacity : 1
                                                                                                },'800','linear',function(){
                                                                                                    $(".activity19").transition({
                                                                                                        opacity : 1
                                                                                                    },'800','linear',function(){
                                                                                                        $(".activity20").transition({
                                                                                                            opacity : 1
                                                                                                        },'800','linear',function(){
                                                                                                            $(".activity21").transition({
                                                                                                                opacity : 1
                                                                                                            },'800','linear',function(){
                                                                                                                $(".activity22").transition({
                                                                                                                    opacity : 1
                                                                                                                },'800','linear',function(){
                                                                                                                    $(".activity23").transition({
                                                                                                                        opacity : 1
                                                                                                                    },'800','linear',function(){
                                                                                                                        $(".arrowRight").show();
                                                                                                                        var page9 = $(".page9");
                                                                                                                        var mx = '';
                                                                                                                        page9.bind("touchstart",function(){
                                                                                                                            event.preventDefault();
                                                                                                                            var touch1 = event.touches[0];
                                                                                                                            startX = touch1.pageX;
                                                                                                                        });
                                                                                                                        page9.bind("touchmove",function(){
                                                                                                                            event.preventDefault();
                                                                                                                            var touch1 = event.touches[0];
                                                                                                                            moveX = touch1.pageX;
                                                                                                                            mx = moveX-startX;
                                                                                                                            page9.css({"left":mx+"px"});
                                                                                                                        });
                                                                                                                        page9.bind("touchend",function(){
                                                                                                                            event.preventDefault();
                                                                                                                            mx = startX - moveX;
                                                                                                                            if(mx>150){
                                                                                                                                $(".page9").hide();
                                                                                                                                $(".page10").show();
                                                                                                                                $(".liwu").transition({
                                                                                                                                    bottom : '16%'
                                                                                                                                },'2000','linear',function(){
                                                                                                                                    $(".jiang").transition({
                                                                                                                                        opacity : 1
                                                                                                                                    },'800','linear',function(){
                                                                                                                                        $(".arrowRight").show();
                                                                                                                                        var page10 = $(".page10");
                                                                                                                                        var mx = '';
                                                                                                                                        page10.bind("touchstart",function(){
                                                                                                                                            event.preventDefault();
                                                                                                                                            var touch1 = event.touches[0];
                                                                                                                                            startX = touch1.pageX;
                                                                                                                                        });
                                                                                                                                        page10.bind("touchmove",function(){
                                                                                                                                            event.preventDefault();
                                                                                                                                            var touch1 = event.touches[0];
                                                                                                                                            moveX = touch1.pageX;
                                                                                                                                            mx = moveX-startX;
                                                                                                                                            page10.css({"left":mx+"px"});
                                                                                                                                        });
                                                                                                                                        page10.bind("touchend",function(){
                                                                                                                                            event.preventDefault();
                                                                                                                                            mx = startX - moveX;
                                                                                                                                            if(mx>150){
                                                                                                                                                $(".page4").show();
                                                                                                                                            }else{
                                                                                                                                                page10.animate({"left":"0"},200);
                                                                                                                                            }
                                                                                                                                        });
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            }else{
                                                                                                                                page9.animate({"left":"0"},200);
                                                                                                                            }
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });

                                                                                                    });

                                                                                                });
                                                                                            });
                                                                                        }else{
                                                                                            page7.animate({"left":"0"},200);
                                                                                        }
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                }else{
                                                    page7.animate({"left":"0"},200);
                                                }
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
            //$(".page3").show();
        }else{
            page3.animate({"left":"0"},200);
        }
    });
    function loading(){
        var canvas = document.getElementById('loading_canvas');
        var context = canvas.getContext('2d');
        context.save();
        context.beginPath();
        context.fillStyle = "#3e3e3e";
        context.fillRect(0,0,canvas.width,canvas.height);
        context.closePath();
        context.restore();
        var num = 0;
        var dfdPlay = $.Deferred();
        t = setInterval(function(){
            if(num>100){
                clearInterval(t);
                dfdPlay.resolve();
            }else{
                context.clearRect(0,0,canvas.width,canvas.height);
                context.save();
                context.beginPath();
                context.fillStyle = "#3e3e3e";
                context.fillRect(0,0,canvas.width,canvas.height);
                context.closePath();
                context.restore();
                context.save();
                context.beginPath();
                context.fillStyle = "#b90000";
                var temWidth = canvas.width * num /100;
                context.fillRect(0,0,temWidth,canvas.height);
                context.closePath();
                context.fill();
                context.restore();
                num++;
            }
        },50);
        return dfdPlay;
    }
    /*打字*/
    function typedWord(obj,msg){
        var dfd = $.Deferred();
        var msgLen = msg.length;
        var index = 0;
        var interval = '';
        obj.text("");
        interval = setInterval(function(){
            if(index > msgLen){
                clearInterval(interval);
                dfd.resolve();
                index = 0;
            }else{
                obj.append(msg.charAt(index));
                index++;
            }
        },50);
        return dfd;
    }
};
/*文字波动*/
var WaveWord = function(obj){
    this.obj = obj;
    this.num = 0;
    this.txt = '';
    this.mes = new Array();
    this.mes[0] = -1;
    this.mes[1] = -4;
    this.mes[2] = -7;
    this.mes[3] = -10;
    this.mes[4] = -7;
    this.mes[5] = -4;
    this.mes[6] = -1;
    this.interval;
};
WaveWord.prototype = {
    initPlay : function(message){
        var _self = this;
        for(var i = 0;i<message.length;i++){
            _self.txt = _self.txt + "<span style='position:relative;' id='n"+i+"'>"+message.charAt(i)+"</span>";
        }
        _self.obj.html(_self.txt);
        this.interval = setInterval(function(){
            if(_self.num == -message.length){
                _self.num = 0;
            }
            _self.txt = "";
            for(i = 0 ; i < message.length ; i++){
                if(i + _self.num > -1 && i + _self.num < 7){
                    _self.txt = _self.txt+"<span style='position:relative;top:"+_self.mes[i+_self.num]+"px;'>"+message.charAt(i)+"</span>";
                }else{
                    _self.txt = _self.txt+"<span>"+message.charAt(i)+"</span>";
                }
            }
            _self.obj.html(_self.txt);
            _self.num --;
        },50);
    },
    stopPlay: function(){
        clearInterval(this.interval);
    }
};