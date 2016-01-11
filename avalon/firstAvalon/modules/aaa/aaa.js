/**
 * Created by Administrator on 2016/1/11.
 */
define(['avalon','text!./aaa.html'],function(avalon,aaa){
   avalon.templateCache.aaa = aaa;
    avalon.define({
        $id : "aaa",
        username : "司徒正美"
    });
    avalon.vmodels.root.page = "aaa";
});