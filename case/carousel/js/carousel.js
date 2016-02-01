/**
 * Created by Administrator on 2016/1/18.
 */
;(function($){
    var Carousel = function(poster){
        var self = this;
        this.poster = poster;
        this.posterItemMain = poster.find("ul.poster-list");
        this.nextBtn               = poster.find("div.poster-next-btn");
        this.prevBtn               = poster.find("div.poster-prev-btn");
        this.posterItems        =poster.find("li.poster-item");
        this.posterFirstItem  = this.posterItems.first();
        this.posterLastItem  = this.posterItems.last();
        this.rotateFlag   = true;
        //默认配置参数
        this.setting = {
            'width':1000,
            'height':270,
            'posterWidth':640,
            'posterHeight':270,
            'scale':0.9,
            'speed':500,
            "autoPLay":true,
            "delay":5000,
            "verticalAlign":"middle"
        };
        $.extend(this.setting,this.getSetting());
        //设置配置参数值
        this.setSettingValue();
        this.setPosterPos();
        //左旋转按钮
        this.nextBtn.click(function(){
            if(self.rotateFlag){
                self.rotateFlag = false;
                self.carouseRotate("left");
            }
        });
        this.prevBtn.click(function(){
            if(self.rotateFlag){
                self.rotateFlag = false;
                self.carouseRotate("right");
            }
        });
        //是否开启自动播放
        if(this.setting.autoPLay){
            this.autoPlay();
            this.poster.hover(function(){
                window.clearInterval(self.timer);
            },function(){
                self.autoPlay();
            });
        }

    }
    Carousel.prototype = {
        autoPlay : function(){
           var self = this;
           this.timer = window.setInterval(function(){
               self.nextBtn.click();
           },this.setting.delay) ;
        },
        //旋转
        carouseRotate:function(dir){
            var _this = this;
            var zIndexArr = [];
            if(dir === 'left'){
                //左旋转
				console.log(this.posterItems);
                this.posterItems.each(function(){
					console.log($(this));
                   var  self = $(this),
                        prev = self.prev().get(0)?self.prev():_this.posterLastItem,
                        width = prev.width(),
                        height = prev.height(),
                        zIndex = prev.css("zIndex"),
                        opacity = prev.css("opacity"),
                        left = prev.css("left"),
                        top = prev.css("top");
                    zIndexArr.push(zIndex);
                    self.animate({
                        width:width,
                        height:height,
                        opacity:opacity,
                        left:left,
                        top:top
                    },_this.setting.speed,function(){
                        _this.rotateFlag = true;
                    });
                });
                //zIndex需要单独保存再设置，防止循环时候设置再取的时候值永远是最后一个的zindex
                this.posterItems.each(function(i){
                    $(this).css("zIndex",zIndexArr[i]);
                });
            }else if(dir === 'right'){
                //左旋转
                this.posterItems.each(function(){
                    var  self = $(this),
                        next = self.next().get(0)?self.next():_this.posterFirstItem,
                        width = next.width(),
                        height = next.height(),
                        zIndex = next.css("zIndex"),
                        opacity = next.css("opacity"),
                        left = next.css("left"),
                        top = next.css("top");
                    zIndexArr.push(zIndex);
                    self.animate({
                        width:width,
                        height:height,
                        opacity:opacity,
                        left:left,
                        top:top
                    },_this.setting.speed,function(){
                        _this.rotateFlag = true;
                    });
                });
                //zIndex需要单独保存再设置，防止循环时候设置再取的时候值永远是最后一个的zindex
                this.posterItems.each(function(i){
                    $(this).css("zIndex",zIndexArr[i]);
                });
            }
        },
        //设置剩余的帧的位置关系
        setPosterPos:function(){
            var self = this;
            var sliceItems = this.posterItems.slice(1),
                level = Math.floor(sliceItems.size()/2),
                rightSlice = sliceItems.slice(0,level),
                leftSlice = sliceItems.slice(level);
            var rw = this.setting.posterWidth;
            var rh = this.setting.posterHeight;
            var gap = (this.setting.width-this.setting.posterWidth)/(2*level);
            var opacity = 1;
            rightSlice.each(function(index,elem){
                rw = rw * self.setting.scale;
                rh = rh * self.setting.scale;
                level--;
                opacity = opacity-0.2;
                $(this).css({
                    width : rw,
                    height : rh,
                    zIndex:level,
                    opacity : opacity,
                    left:self.setting.width-(level-index)*gap-rw,
                    top:self.setVerticalAlign(rh)
                });
            });
            rw = rw * self.setting.scale;
            rh = rh * self.setting.scale;
            opacity = opacity-0.2;
            leftSlice.each(function(index,elem){
                rw = rw / self.setting.scale;
                rh = rh / self.setting.scale;
                opacity = opacity + 0.2;
                level--;
                $(this).css({
                    width : rw,
                    height : rh,
                    zIndex:index,
                    opacity : opacity,
                    left:index*gap,
                    top:self.setVerticalAlign(rh)
                });
            })
        },
        //设置垂直排列对齐
        setVerticalAlign:function(height){
            var verticalType  = this.setting.verticalAlign,
                top = 0;
            if(verticalType === "middle"){
                top = (this.setting.height-height)/2;
            }else if(verticalType === "top"){
                top = 0;
            }else if(verticalType === "bottom"){
                top = this.setting.height-height;
            }else{
                top = (this.setting.height-height)/2;
            };
            return top;
        },
        //设置配置参数值去控制基本的属性
        setSettingValue:function(){
            this.poster.css({
                width:this.setting.width,
                htight:this.setting.height
            });
            this.posterItemMain.css({
                width:this.setting.width,
                height:this.setting.height
            });
            //计算上下切换按钮的宽度
            var w = (this.setting.width-this.setting.posterWidth)/2;
            //设置切换按钮的高度，层级关系
            this.nextBtn.css({
                width:w,
                height:this.setting.height,
                zIndex:Math.ceil(this.posterItems.size()/2)
            });
            this.prevBtn.css({
                width:w,
                height:this.setting.height,
                zIndex:Math.ceil(this.posterItems.size()/2)
            });
            this.posterFirstItem.css({
                width:this.setting.posterWidth,
                height:this.setting.posterHeight,
                left:w,
                top:0,
                zIndex:Math.floor(this.posterItems.size()/2)
            });
        },
        //获取人工配置参数
        getSetting:function(){
            var setting = this.poster.attr("data-setting");
            if(setting && setting!=""){
                return $.parseJSON(setting);
            }else{
                return {};
            }
        }

    };

    Carousel.init = function(posters){
        var _this_ = this;
        posters.each(function(){
            new _this_($(this));
        });
    };
    window['Carousel'] = Carousel;
})(jQuery);