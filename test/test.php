<?php
/**
 * Created by PhpStorm.
 * User: Freed
 * Date: 2017/2/23
 * Time: 20:06
 */


    $arr = array('q','w','e','r','o','t','y','y',);
    for($i=0;$i<count($arr);$i++){
        echo $arr[$i].'--1--';
    }
    echo '<br>';
    foreach($arr as $value){
        echo $value.'--2--';
    }
    echo '<br>';

    foreach($arr as $key => $value){
        echo $key.'=>'.$value.'<br>';
    }
