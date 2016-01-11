/**
 * Created by Administrator on 2016/1/11.
 */
require.config({//第一块，配置
    baseUrl : '',
    paths : {//别名
        jquery : 'vendor/jquery/jquery-2.1.4',
        avalon : 'vendor/avalon/avalon',
        text : 'vendor/require/text',
        domReady : 'vendor/require/domReady',
        css : 'vendor/require/css'
    },
    //优先加载模块
    priority : ['text','css'],
    shim : {
        jquery : {
            exports :  'jQuery'
        },
        avalon : {
            exports : 'avalon'
        }
    }
});
require(['avalon','domReady'],function(){//第二块，添加根vm(处理公用部分)
    avalon.log('加载avalon完毕，开始构建根vm与加载其他模块');
    avalon.templateCache.empty = '&nbsp;';
    avalon.define({
        $id:'root',
        header:"这是根模块，用于放置其他模块都共用的东西，比如用户名",
        footer:"页脚消息",
        page:'empty'
    });
    avalon.scan(document.body);
    require(['../../modules/aaa/aaa'],function(){//第三块，加载其他模块
        avalon.log('加载其他完毕');
    });
});