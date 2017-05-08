
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<?php
/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 2017/3/2
 * Time: 11:41
 */


function getMsg($msg){
	// if ($msg){
	// 	return $msg;
	// }
	// return 'abc';
		return $msg? $msg:'abc';
}
echo '----------------<br>';
$msg ='';
echo $msg;
echo '----------------<br>';

echo  getMsg($msg);


echo '----------------';


?>

</body>
</html>
