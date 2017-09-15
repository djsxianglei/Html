/**
 * Created by xianlei on 2016/12/27.
 */
function setMouseEvents(){
    if(isPointer()){//非ie内核触摸事件
        mouseEvents = {
            down:'pointerdown',
            move:'pointermove',
            up:'MSPointerUp',
        };
        return mouseEvents;
    }else if(isMSPointer()){//ie触摸事件
        mouseEvents = {
            down:'MSPointerDown',
            move:'MSPointerMove',
            up:'mouseup',
        };
        return mouseEvents;
    }else{
        if(isTouch()){
            //暂时不用处理
            mouseEvents = {
                down:'touchstart',
                move:'touchmove',
                up:'touchend',
            };
            return mouseEvents;
        }else{
            mouseEvents = {
                down:'mousedown',
                move:'mousemove',
                up:'mouseup',
            };
            return mouseEvents;
        }
    }
}
/*
 * Window.navigator.msPointerEnabled语句只会判断浏览器是否支持MSPointer相关的事件，
 * 而不会判断用户的设备是否支持触摸操作。目前只有在IE10上该对象不会返回undefined，
 * 其它版本的浏览器均视该对象不存在。如果你想判断用户的设备是否支持触摸操作，
 * 应该使用Window.navigator.msMaxTouchPoints，
 * 如果该对象存在并且返回的结果大于1，
 * 则表示设备支持触摸操作并且是支持多点触摸的。
 * */
function isPointer(){
    return window.navigator.pointerEnabled;
}
/*
 *是否支持触摸
 * */
function isTouch(){
    return Modernizr.touch;
}

function isMSPointer() {
    return window.navigator.msPointerEnabled;
}