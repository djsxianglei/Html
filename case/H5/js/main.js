/**
 * Created by Administrator on 2015/12/15.
 */
window.onload=function(){
    var WIDTH = $("body").width();
    var HEIGHT = $("body").height();
    /*文字波动*/
   // WaveWord($(".loading_phone"),"接电话啦~接电话了~");
    var wordWave = new WaveWord($(".loading_phone"));
    wordWave.initPlay("接电话啦~接电话了~");
    /*摇头*/
    $(".loading_icon").addClass("shookHead");
    /*加载圈*/
    loading().then(function(){
        $(".loading").hide();
        $(".loading_icon").removeClass("shookHead");
        wordWave.stopPlay();
        $(".page1").show();
        $(".page1_btn").addClass("phone_rang");
    });

    $(".page1_btn").click(function(){
        $(".page1").hide();
        $(".page1_btn").removeClass("phone_rang");
        $(".page2").show();
        $(".page2_video").css({
            width : WIDTH * 4 + 'px',
            height : HEIGHT * 4 + 'px'
        });
        $(".page2_video").addClass("page2Wh6");
        setTimeout(function(){
            $(".page2_video").removeClass("page2Wh6");
            $(".page2_video").css("background-image","url('./images/ganrao.jpg')");
            $(".page2_video").css({
                width : WIDTH * 5 + 'px',
                height : HEIGHT + 'px'
            });
            $(".page2_video").addClass("page2Ganrao");
            setTimeout(function(){
                $(".page2_video").removeClass("page2Ganrao");
                $(".page2_video").css("display","none");
                $(".unlock_page").css("display","block");
            },1200);
        },1200);
    });
    var unlock_time = new unlockTime($(".unlock_time"));
    unlock_time.getTimeHtml();
    var unlock_date = new unlockTime($(".unlock_date"));
    unlock_date.getDateHtml();
    $(".unlock_tips").addClass("page3Unlock");
    setTimeout(function(){
        var unLock = $(".unlock_tips_wrap");
        var uiObj = $(".unlock_info");
        var mx = '';
        unLock.bind("touchstart",function(){
            event.preventDefault();
            var touch1 = event.touches[0];
            startX = touch1.pageX;
        });
        unLock.bind("touchmove",function(){
            event.preventDefault();
            var touch1 = event.touches[0];
            moveX = touch1.pageX;
            mx = moveX-startX;
            uiObj.css({"left":mx+"px"});
        });
        unLock.bind("touchend",function(){
            event.preventDefault();
            mx = moveX-startX;
            if(mx>330){
                weiChatPage();
            }else{
                uiObj.animate({"left":"0"},200);
            }
        });
    },500);
    function weiChatPage(){
        $(".weiChat").show();
        $(".unlock_info").addClass("page_unlock");
        setTimeout(function(){
            $(".unlock_page").hide();
            var chat = weiChat();
            chat.wx_input_bar().then(function(){
                return chat.wx_msg($(".wh_msg_1"));
            }).then(function(){
                return chat.wx_msg($(".wh_msg_2"));
            }).then(function(){
                return chat.wx_msg($(".wh_msg_3"));
            }).then(function(){
                $(".wx_input_bar").hide();
                $(".wx_keyboard").show();
                return chat.typed_word($(".kb_text_1"),"真的假的？");
            }).then(function(){
                $(".btn_send").show();
            });
            $(".btn_send").click(function(){
                var btn_sends = $("input[name='btn_sends']").val();
                if(btn_sends == 1){
                    $(".wx_box").scrollTop(480);
                    chat.wx_msg($(".user_msg_1")).then(function(){
                        return chat.wx_msg($(".wh_msg_4"));
                    }).then(function(){
                        $(".wx_box").scrollTop(580);
                        return chat.wx_msg($(".wh_msg_5"));
                    }).then(function(){
                        $(".kb_text_1").html("");
                        return chat.typed_word($(".kb_text_1"),"这么好！要准备啥？");
                    }).then(function(){
                        $("input[name='btn_sends']").val("2");
                    });
                }else if(btn_sends == 2){
                    $(".wx_box").scrollTop(820);
                    $(".kb_text_1").html("");
                    chat.wx_msg($(".user_msg_2")).then(function(){
                        return chat.wx_msg($(".wh_msg_6"));
                    });
                    $('.btn_send').attr('disabled',"true");
                }

            });
            $(".wh_msg_item_6").click(function(){
                $(".weiChat").hide();
                $(".result_page").show();
                $(".result_title").transition({
                    opacity : 1
                },'1000','linear',function(){});
            });
        },100);
    }

    function loading(){
        var canvas = document.getElementById('loading_canvas');
        canvas.height = $(".loading_progress").height();
        canvas.width = $(".loading_progress").width();
        var context = canvas.getContext('2d');
        context.save();
        context.beginPath();
        context.arc(canvas.width/2,canvas.height/2,100,0,2*Math.PI);
        context.closePath();
        context.fillStyle = "#ffffff";
        context.fill();
        context.restore();
        context.save();
        context.beginPath();
        context.arc(canvas.width/2,canvas.height/2,90,0,2*Math.PI);
        context.closePath();
        context.fillStyle = "#cdcdcd";
        context.fill();
        context.restore();
        var rots = 1;
        var dfdPlay = $.Deferred();
        t = setInterval(function(){
            if(rots>100){
                clearInterval(t);
                dfdPlay.resolve();
            }else{
                context.save();
                context.clearRect(0,0,canvas.width,canvas.height);
                context.beginPath();
                context.arc(canvas.width/2,canvas.height/2,100,0,2*Math.PI);
                context.closePath();
                context.fillStyle = "#ffffff";
                context.fill();
                context.restore();
                context.save();
                context.beginPath();
                context.arc(canvas.width/2,canvas.height/2,90,0,2*Math.PI);
                context.closePath();
                context.fillStyle = "#cdcdcd";
                context.fill();
                context.restore();
                var rot = rots*2*Math.PI/100;
                context.beginPath();
                context.arc(canvas.width/2,canvas.height/2,101,rot,0,true);
                context.lineTo(canvas.width/2+79,canvas.height/2);
                context.arc(canvas.width/2,canvas.height/2,89,0,rot);
                context.closePath();
                context.fillStyle = "#4dd65d";
                context.fill();
                var process = rots+'%';
                $(".loading_text").html(process);
                rots++;
            }
        },50);
        return dfdPlay;
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
/*图片振动*/
var rattleImage = function(obj){
    this.obj = obj;
    this.rector = -3;
    this.top = obj.position().top;
    this.left = obj.position().left;
    this.a = 1;
    this.interval;
};
rattleImage.prototype = {
    initPlay : function(){
        var _self = this;
        this.interval = setInterval(function(){
            if (_self.a == 1){
                _self.obj.css({
                    top : _self.top + _self.rector
                });
            }else if (_self.a == 2){
                _self.obj.css({
                    left : _self.left + _self.rector
                });
            }else if (_self.a == 3){
                _self.obj.css({
                    top : _self.top
                });
            }else{
                _self.obj.css({
                    left : _self.left
                });
            }
            if(_self.a<4){
                _self.a += 1;
            }else{
                _self.a = 1;
            }
        },50);
    },
    stopPlay: function(){
        clearInterval(this.interval);
    }
};
var unlockTime = function(obj){
    this.obj = obj;
    this.html = '';
    this.leftHours = '';
    this.rightHours = '';
    this.leftMinutes = '';
    this.rightMinutes = '';
    this.leftMonth = '';
    this.rightMonth = '';
    this.leftDay = '';
    this.rightDay = '';
    this.week = '';
};
unlockTime.prototype = {
    getTimeNumber : function(){
        _self = this;
        var CurTime = new Date();
        var hours = CurTime.getHours();
        var minutes = CurTime.getMinutes();
        var month = CurTime.getMonth() + 1;
        var day = CurTime.getDate();
        _self.week = CurTime.getDay();
        _self.leftHours = parseInt(hours/10);
        _self.rightHours = parseInt(hours%10);
        _self.leftMinutes = parseInt(minutes/10);
        _self.rightMinutes = parseInt(minutes%10);
        _self.leftMonth = parseInt(month/10);
        _self.rightMonth = parseInt(month%10);
        _self.leftDay = parseInt(day/10);
        _self.rightDay = parseInt(day%10);
    },
    getTimeHtml : function(){
        _self = this;
        _self.getTimeNumber();
        var leftHoursPos = '-'+ _self.leftHours * 72 + 'px 0px';
        var rightHoursPos = '-'+ _self.rightHours * 72 + 'px 0px';
        var leftMinutesPos = '-'+ _self.leftMinutes * 72 + 'px 0px';
        var rightMinutesPos ='-'+ _self.rightMinutes * 72 + 'px 0px';
        _self.obj.find('span:nth-child(1)').css('background-position',leftHoursPos);
        _self.obj.find('span:nth-child(2)').css('background-position',rightHoursPos);
        _self.obj.find('span:nth-child(3)').css('background-position',"-720px 0px");
        _self.obj.find('span:nth-child(4)').css('background-position',leftMinutesPos);
        _self.obj.find('span:nth-child(5)').css('background-position',rightMinutesPos);
    },
    getDateHtml : function(){
        _self = this;
        _self.getTimeNumber();
        var leftMonthPos = '-'+ _self.leftMonth * 80 + 'px 0px';
        var rightMonthPos = '-'+ _self.rightMonth * 80 + 'px 0px';
        var leftDayPos = '-'+ _self.leftDay * 80 + 'px 0px';
        var rightDayPos = '-'+ _self.rightDay * 80 + 'px 0px';
        _self.obj.find('span:nth-child(1)').css("background-position",leftMonthPos);
        _self.obj.find('span:nth-child(2)').css("background-position",rightMonthPos);
        _self.obj.find('span:nth-child(3)').css("background-position","-800px 0px");
        _self.obj.find('span:nth-child(4)').css("background-position",leftDayPos);
        _self.obj.find('span:nth-child(5)').css("background-position",rightDayPos);
        _self.obj.find('span:nth-child(6)').css("background-position","-880px 0px");
        switch (_self.week){
            case 0 :
                _self.obj.find('span:nth-child(7)').css("background-position","-1440px 0px");
                break;
            case 1 :
                _self.obj.find('span:nth-child(7)').css("background-position","-960px 0px");
                break;
            case 2 :
                _self.obj.find('span:nth-child(7)').css("background-position","-1040px 0px");
                break;
            case 3 :
                _self.obj.find('span:nth-child(7)').css("background-position","-1120px 0px");
                break;
            case 4 :
                _self.obj.find('span:nth-child(7)').css("background-position","-1200px 0px");
                break;
            case 5 :
                _self.obj.find('span:nth-child(7)').css("background-position","-1280px 0px");
                break;
            case 6 :
                _self.obj.find('span:nth-child(7)').css("background-position","-1360px 0px");
                break;
        }
    }
};

function weiChat(){

    /*下方input输入框由出现*/
    function inputBar(){
        var dfd = $.Deferred();
        var input_bar = $(".wx_input_bar");
        var instanceY = - input_bar.height();
        input_bar.transition({
            transform: 'translateY('+instanceY+'px)'
        },'400','linear',function(){
            setTimeout(function(){
                dfd.resolve();
            },1000);
        });
        return dfd;
    }
    /*文字出现*/
    function msg(obj){
        var dfd = $.Deferred();
        obj.transition({
            opacity : 1
        },'400','linear',function(){
            setTimeout(function(){
                dfd.resolve();
            },1000);
        });
        return dfd;
    }
    /*打印文字*/
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
        },100);
        return dfd;
    }
    return  {
        wx_input_bar : function(){
            return inputBar();
        },
        wx_msg : function(obj){
            return msg.apply(null,arguments);
        },
        typed_word : function(obj,msg){
            return typedWord.apply(null,arguments);
        }
    };

};
