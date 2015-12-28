/**
 * Created by Administrator on 2015/11/24.
 */
var info = ["一等奖","二等奖","三等奖","四等奖","五等奖","六等奖","七等奖","八等奖","九等奖","十等奖"];
var color = [];
var step = 2*Math.PI/10;
var outerR = 150;//轮盘的大小
var interR = 50;//内存空白圆的大小
var beginAngle = 50;//旋转起来时默认开始旋转的度数，度数越大旋转的初始速度越大
var radio = 0.95;//旋转速度衰减系数，影响选择时间
var t = null;
window.onload = function(){
    for(var i=0;i<10;i++){
        color.push(getColor());
    }
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var linearGradient = context.createLinearGradient(0,500,500,0);
    linearGradient.addColorStop(0,'#5f85db');
    linearGradient.addColorStop(1,'#ff94c7');
    context.fillStyle = linearGradient;
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
    context.translate(250,250);
    createArrow(context);
    createRoulette(context);
    var btn = document.getElementById('btn');
    btn.onclick = function(){
        if(t){
            return false;
        }
        var step = beginAngle + Math.random()*10;
        var angle = 0;
        t = setInterval(function(){
            step *=radio;
            if(step <= 0.1){
                clearInterval(t);//停止转动
                t = null;
                var pos = Math.ceil(angle/36);
                var res = info[10-pos];
                context.save();
                context.beginPath();
                context.font = '23px 微软雅黑';
                context.fillStyle = '#f00';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(res,0,0);
                context.closePath();
                context.restore();
            }else{
                context.clearRect(-250,-250,500,500);
                angle +=step;
                if(angle > 360){
                    angle -= 360;
                }
                context.save();
                context.beginPath();
                context.rotate(angle*Math.PI/180);
                createRoulette(context);
                context.closePath();
                context.restore();
                createArrow(context);
            }
        },50)
    }
    /*生成大转盘*/
    function createRoulette(cxt){
        for(var i = 0;i<10;i++){
            cxt.save();
            cxt.beginPath();
            cxt.moveTo(0,0);
            cxt.arc(0,0,outerR,i*2*Math.PI/10,(1+i)*2*Math.PI/10);
            cxt.fillStyle = color[i];
            cxt.fill();
            cxt.closePath();
            cxt.restore();
        }
        cxt.save();
        cxt.beginPath();
        cxt.arc(0,0,interR,0,2*Math.PI);
        cxt.fillStyle = '#ffffff';
        cxt.fill();
        cxt.closePath();
        cxt.restore();
        for(var i = 0;i<10;i++){
            cxt.save();
            cxt.beginPath();
            cxt.fillStyle = '#000';
            cxt.font = '15px 微软雅黑';
            cxt.textAlign = 'center';
            cxt.textBaseline = 'middle';
            cxt.rotate((1/4+i+1/4)*step);
            cxt.fillText(info[i],(outerR + interR)/2,0);
            cxt.restore();
        }
    }
    /*生成箭头*/
    function createArrow(cxt){
        cxt.save();
        cxt.beginPath();
        cxt.moveTo(170,0);
        cxt.lineTo(180,15);
        cxt.lineTo(180,5);
        cxt.lineTo(250,5);
        cxt.lineTo(250,-5);
        cxt.lineTo(180,-5);
        cxt.lineTo(180,-15);
        cxt.closePath();
        cxt.fillStyle = 'black';
        cxt.fill();
        cxt.restore();
    }

    /*生成随机颜色*/
    function getColor(){
        var random = function(){
            return Math.floor(255*Math.random());
        }
        return 'rgb('+random()+','+random()+','+random()+')';

    }

}