/**
 * Created by xianglei on 2015/11/23.
 */
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
/*获取当前时间一小时以后的时间*/
var endTime = new Date();
endTime.setTime(endTime.getTime()+3600*1000);
var curShowTimeSeconds = 0;
var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];
window.onload = function(){
    var canvas = document.getElementById('canvas');
    WINDOW_WIDTH = document.body.clientWidth
    WINDOW_HEIGHT = document.body.clientHeight

    MARGIN_LEFT = Math.round(WINDOW_WIDTH /10);
    RADIUS = Math.round(WINDOW_WIDTH * 4 / 5 / 114)-1

    MARGIN_TOP = Math.round(WINDOW_HEIGHT /5);
    canvas.height = WINDOW_HEIGHT;
    canvas.width = WINDOW_WIDTH;
    var context = canvas.getContext("2d");
    curShowTimeSeconds = getCurrentShowTimeSeconds();
    setInterval(function(){
        render(context);
        update();
    },50);
    /*渲染*/
    function render(cxt){
        //将画布清空
        cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
        var hours = parseInt(curShowTimeSeconds/3600);
        var minutes = parseInt((curShowTimeSeconds - hours*3600)/60);
        var seconds = parseInt(curShowTimeSeconds % 60);
        renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
        renderDigit(MARGIN_LEFT + 16*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
        renderDigit(MARGIN_LEFT + 31*(RADIUS+1),MARGIN_TOP,10,cxt);
        renderDigit(MARGIN_LEFT + 40*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
        renderDigit(MARGIN_LEFT + 55*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
        renderDigit(MARGIN_LEFT + 71*(RADIUS+1),MARGIN_TOP,10,cxt);
        renderDigit(MARGIN_LEFT + 80*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
        renderDigit(MARGIN_LEFT + 95*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);
        for(var i = 0;i<balls.length;i++){
            cxt.beginPath();
            cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI);
            cxt.closePath();
            cxt.fillStyle = balls[i].color;
            cxt.fill();
        }
    }
    /*渲染数字*/
    function renderDigit( x , y , num , cxt ){
        cxt.fillStyle = "rgb(0,102,153)";
        for(var i = 0;i<digit[num].length;i++){
            for(j = 0;j<digit[num][i].length;j++){
               if(digit[num][i][j] == 1){
                   cxt.beginPath();
                   cxt.arc(x+2*(RADIUS+1)*j+RADIUS+1,y+2*(RADIUS+1)*i+RADIUS+1,RADIUS,0,2*Math.PI);
                   cxt.closePath();
                   cxt.fill();
               }
            }
        }
    }
    /*得到设定时间与当前时间时间差
    * 返回是s
    * */
    function getCurrentShowTimeSeconds(){
        var curTime = new Date();
        var ret = endTime.getTime() - curTime.getTime();
        ret = Math.round(ret/1000);//round() 方法可把一个数字舍入为最接近的整数。
        return ret >= 0 ? ret:0;
    }
    /*时间变化*/
    function update(){
        var nextShowTimeSeconds = getCurrentShowTimeSeconds();
        var nextHours = parseInt(nextShowTimeSeconds/3600);
        var nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600)/60);
        var nextSeconds = parseInt(nextShowTimeSeconds % 60);
        var curHours = parseInt( curShowTimeSeconds / 3600);
        var curMinutes = parseInt( (curShowTimeSeconds - curHours * 3600)/60 );
        var curSeconds = curShowTimeSeconds % 60;
        if(nextSeconds != curSeconds){
            if(parseInt(nextHours/10)!=parseInt(curHours/10)){
                addBalls(MARGIN_LEFT,MARGIN_TOP,parseInt(curHours/10));
            }
            if(parseInt(nextHours%10)!=parseInt(curHours%10)){
                addBalls(MARGIN_LEFT + 16*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
            }
            if(parseInt(nextMinutes/10)!=parseInt(curMinutes/10)){
                addBalls(MARGIN_LEFT + 40*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes/10));
            }
            if(parseInt(nextMinutes%10)!=parseInt(curMinutes%10)){

                addBalls(MARGIN_LEFT + 55*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes%10));
            }
            if(parseInt(nextSeconds/10)!=parseInt(curSeconds/10)){
                addBalls(MARGIN_LEFT + 80*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds/10));
            }
            if(parseInt(nextSeconds%10)!=parseInt(curSeconds%10)){
                addBalls(MARGIN_LEFT + 95*(RADIUS+1),MARGIN_TOP,parseInt(nextSeconds%10));
            }



            curShowTimeSeconds = nextShowTimeSeconds;

        }
        updateBalls();
    }
    /*小球自由落体运动*/
    function updateBalls(){
        for(var i = 0;i<balls.length;i++){
            balls[i].x += balls[i].vx;
            balls[i].y += balls[i].vy;
            balls[i].vy += balls[i].g;
            if( balls[i].y >= WINDOW_HEIGHT-RADIUS ){
                balls[i].y = WINDOW_HEIGHT-RADIUS;
                balls[i].vy = - balls[i].vy*0.75;
            }
        }
        var cnt = 0;
        for(var i = 0;i<balls.length;i++){
            if((balls[i].x+RADIUS)>0 && (balls[i].x-RADIUS)<WINDOW_WIDTH){
                balls[cnt++] = balls[i];
            }
        }
        while (balls.length > Math.min(300,cnt)){
            balls.pop();
            //pop() 方法用于删除并返回数组的最后一个元素。
        }
    }
    /*当数字改变时生成小球*/
    function addBalls(x,y,num){
        for(var i=0;i<digit[num].length;i++){
            for(var j=0;j<digit[num][i].length;j++){
                if(digit[num][i][j]==1){
                    var aBall={
                        x:x+2*(RADIUS+1)*j+RADIUS+1,
                        y:y+2*(RADIUS+1)*i+RADIUS+1,
                        g:1.5 +Math.random(),
                        vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,//pow() 方法可返回 x 的 y 次幂的值
                        vy:-5,
                        color:colors[Math.floor(Math.random()*colors.length)]//floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数
                    };
                    //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
                    balls.push(aBall);
                }
            }
        }
    }

};