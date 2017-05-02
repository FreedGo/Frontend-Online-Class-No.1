<?php
/**
 * Created by PhpStorm.
 * User: Freed
 * Date: 2017/2/28
 * Time: 21:56
 */
//$name = $_GET['name'];
//$pw = $_GET['pw'] ;
$name = $_POST['name'];
$pw = $_POST['pw'];
if ($name == '张三'&&$pw == '123'){
    echo '成功!';
}else{
    echo '账号或密码错误';
    echo $name.$pw;
}

?>