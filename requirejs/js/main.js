/**
 * Created by Administrator on 2016/1/7.
 */
/*
* 因为在requirejs.config()里引入只是为了给js文件名字长的起一个简洁的别名，而不是用来引入js文件，
* 在requirejs(['jquery', 'valedate']中写入'valedate'就可以找到valedate.js文件了
* */
requirejs.config({
    paths:{
        jquery:'jquery-2.1.4'
    }
});
requirejs(['jquery','validate'],function($,validate){
    console.log(validate.isEqual(1,2));
})