/**
 * Created by Freed on 2017/2/13.
 */
var str = 1487572974;
		str = str * 1000;//秒转为毫秒
var date = new Date(str);
var hour = date.getHours();
var mins = date.getMinutes();
var second = date.getSeconds();
console.log(date)
console.log(hour)
console.log(mins)
console.log(second)