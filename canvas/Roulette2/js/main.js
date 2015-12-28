/**
 * Created by Administrator on 2015/11/24.
 */
var canvasHeight = 500;
var canvasWidth = 500;
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
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
    var context = canvas.getContext('2d');
    bgColor(context);
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
                context.fillText(res,canvasWidth/2,canvasHeight/2);
                context.closePath();
                context.restore();
            }else{
                context.clearRect(0,0,500,500);
                bgColor(context);
                angle +=step;
                if(angle > 360){
                    angle -= 360;
                }
                context.save();
                context.beginPath();
                context.translate(canvasWidth/2,canvasHeight/2);
                context.rotate(angle*Math.PI/180);
                context.translate(-canvasWidth/2,-canvasHeight/2);
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
            cxt.moveTo(canvasWidth/2,canvasHeight/2);
            cxt.arc(canvasWidth/2,canvasHeight/2,outerR,i*2*Math.PI/10,(1+i)*2*Math.PI/10);
            cxt.fillStyle = color[i];
            cxt.fill();
            cxt.closePath();
            cxt.restore();
        }
        cxt.save();
        cxt.beginPath();
        cxt.arc(canvasWidth/2,canvasHeight/2,interR,0,2*Math.PI);
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
            cxt.translate(canvasWidth/2,canvasHeight/2);//移动选择位置
            cxt.rotate((i+1/2)*step);
            //cxt.translate(-canvasWidth/2,-canvasHeight/2);
            console.log(canvasWidth/2+(outerR + interR)/2);
            cxt.fillText(info[i],(outerR + interR)/2,0);
            cxt.restore();
       }
    }
    /*生成箭头*/
    function createArrow(cxt){
        cxt.save();
        cxt.beginPath();
        cxt.moveTo(canvasWidth,canvasHeight/2-5);
        cxt.lineTo(canvasWidth-70,canvasHeight/2-5);
        cxt.lineTo(canvasWidth-70,canvasHeight/2-15);
        cxt.lineTo(canvasWidth-80,canvasHeight/2);
        cxt.lineTo(canvasWidth-70,canvasHeight/2+15);
        cxt.lineTo(canvasWidth-70,canvasHeight/2+5);
        cxt.lineTo(canvasWidth,canvasHeight/2+5);
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
    /*两点间距离*/
    function dis(x1,y1,x2,y2){
        return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    }
    /*画布背景颜色*/
    function bgColor(cxt){
        cxt.save();
        cxt.beginPath();
        var linearGradient = cxt.createLinearGradient(0,500,500,0);
        linearGradient.addColorStop(0,'#5f85db');
        linearGradient.addColorStop(1,'#ff94c7');
        cxt.fillStyle = linearGradient;
        cxt.fillRect(0,0,context.canvas.width,context.canvas.height);
        cxt.closePath();
        cxt.restore();
    }

}