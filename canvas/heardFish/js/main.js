/**
 * Created by Administrator on 2015/11/25.
 */
/*
* 定义全局变量，如果在自定义的函数中重新定义该变量并赋值，则全局变量得不到该值，所以定义的全局变量一般不要重新定义
* */
var canvasWidth = 800;
var canvasHeight = 600;
var lastTime = Date.now();
var curTime = 0;
var bgPic = new Image();
var context1;
var context2;
var ane;
document.body.onload = function () {
    init();
    gameLoop();
    /*初始化*/
    function init(){
        var canvas1 = document.getElementById('canvas1');
        canvas1.height = canvasHeight;
        canvas1.width = canvasWidth;
        context1 = canvas1.getContext('2d');
        var canvas2 = document.getElementById('canvas2');
        canvas2.height = canvasHeight;
        canvas2.width = canvasWidth;
        context2 = canvas2.getContext('2d');
        bgPic.src = './images/background.jpg';
        drawBackground();
        console.log(context2.globalCompositeOperation);
        context2.globalCompositeOperation = 'destination-over';
        ane = new aneObj();
        ane.init();
    }
    /**/
    function gameLoop(){
       window.requestAnimationFrame(gameLoop);
    }
};
/*canvas2画布背景*/
function drawBackground(){
    bgPic.onload = function(){
        context2.drawImage(bgPic,0,0,canvasWidth,canvasHeight);
    }
}
/**/
var aneObj = function(){
    this.x = [];
    this.len = [];
    this.num = 50;
};
aneObj.prototype.init = function(){
        context2.save();
        context2.strokeStyle = '#3b154e';
        context2.lineCap = 'round';
        context2.globalAlpha = 0.6;
        context2.lineWidth = 20;
        for(var i = 0;i<this.num;i++){
            context2.beginPath();
            this.x[i] = 16*i +20*Math.random();
            this.len[i] =canvasHeight - (200 + 50*Math.random());
            context2.moveTo(this.x[i],canvasHeight);
            context2.lineTo(this.x[i],this.len[i]);
            //context2.closePath();
            context2.stroke();
        }
        context2.restore();
}
