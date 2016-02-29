<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/22
 * Time: 11:14
 */
header('content-type:application/json;charset=utf-8');
$img = isset($_POST['img'])?$_POST['img']:'';
$attachDir = '/home0/data/wwwroot/images/company/1_0/editor/day_'.date('ymd');
if(!is_dir($attachDir)){
    $res = mkdir($attachDir,0777,true);
}
//获取图片date("YmdHis").mt_rand(1000,9999).'.'.$extension
list($type,$data) = explode(',',$img);
if(strstr($type,'image/jpeg')!==''){
    $ext = '.jpg';
}elseif(strstr($type,'image/gif')!==''){
    $ext = '.gif';
}elseif(strstr($type,'image/png')!==''){
    $ext = '.png';
}
//生成文件名
$name = date("YmdHis").mt_rand(1000,9999).$ext;
$photo = $attachDir.'/'.$name;
//生成文件
file_put_contents($photo,base64_decode($data),true);
//返回
$targetPath = 'http://img.terransforce.com/company/1_0/editor/day_'.date('ymd').'/'.$name;
$ret = array('img' => $targetPath);
echo json_encode($ret);