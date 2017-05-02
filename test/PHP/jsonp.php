<?php
/**
 * Created by PhpStorm.
 * User: Freed
 * Date: 2017/3/5
 * Time: 20:09
 */
$name = $_GET['name'];
$pw = $_GET[pw];
$arr = array(
    'type'=>'teacher',
    'sex'=>'man',
    'level'=>'24'
);
if ($name=='zhangsan'&&$pw =='123'){
    echo 'foo('. json_encode($arr).')';
}else{
    echo '错误';
}