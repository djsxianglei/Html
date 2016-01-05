/**
 * Created by Administrator on 2016/1/5.
 */
/**
 * 切换页面
 * 模拟镜头效果
 * @return {[type]} [description]
 */
function changePage(element,effect,callback){
    element.addClass(effect).one("animationend webkitAnimationEnd",function(){
        callback && callback();
    });
}

/*
 * 中间调用
 * */
var Christmas = function(){
    //页面容器元素
    var pA = $(".page-a");
    var pB = $(".page-b");
    var pC = $(".page-c");
    //切换
    $("#page").on("change",function(e){
        var pageName = e.target.value;
        switch (pageName){
            case 'page-b':
                changePage(pA,'effect-out',function(){
                   new pageB();
                });
                break;
            case 'page-c':
                changePage(pC,'effect-in',function(){
                    new pageC();
                })
        }
    });

};

$(function(){
    Christmas();
});