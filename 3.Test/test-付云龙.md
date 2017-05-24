#一：
1.B
2.C
3.D
4.D
5.C
6.D
7.C
8.B
9.B
10.B

#二
1.
2.AB
3.ABC
4.ABC
5.AD

#三
1.对
2.错
3.对
4.错
5.对
6.对
7.错
8.错
9.对
10.对
11.对
12.错
13.对
14.对
15.对
16.错
17.错
18.对
19.对
20.对

#四
1.save();
2.strokeStyle;
3.prototype,`__proto__`;
4."use strict";
5.hasOwnProperty;
#五
1.答案： undefined,2,200,2；

    原因：1.1首先，在预解析的时候，

    function fn(a){
        var a;
        console.log(a)
        a = 2;
        console.log(a)
    }
    

    1.2.执行fn()的时候，因为没有传实参进去，所以首先是undefined，然后a = 2 ，再打印 2 ；
    1.3.执行fn(200)的时候，参数a = 200，故先打印200，接着a = 2, 再打印 2 ；
2.答案：x1y4z4;

    2.1 预解析
    
    var x;
    function add(n) {
            ​
        return n = n + 1;
    ​
    }
    function add(n) {
    ​
        return n = n + 3;
    ​
    }
    x = 1;
    //2.1.1此处add(x)实际是 return n = n +3
    y = add(x); =>4
    ​
    z = add(x); =>4
    ​
    
    ​
    console.log('x'+ x + 'y'+ y + 'z'+ z);
    console.log('x'+ 4 + 'y'+ 4 + 'z'+ 4); =>2.1.2 x1y4z4;
    
3.答案：11，1；

    3.1 解析
    
    var val
    function add() {
        console.log(val + 10);//=>3.1.2在自执行函数调用add(),来执行的时候，
                              //函数体内没有定义局部变量val，然后到全局去找val
                              //这时候val已经被赋值为1,所以打印11；
    }
    
    
    val = 1;
    (function () {
        var val = 20;
        add(); //=> 3.1.1此时再去执行外面的add()函数1 + 10 = 11
        val = 30;
    }());
    console.log(val);=>3.1.3全局变量的val为1；
    
4.答案：undefined
    
    4.1 预解析
    var a ;
        a = 20
        (function () {
            var a;
            if (false) {
               var a = 10; //4.1.1 因为if(false),所以这句话没有执行，
            }
            //=>4.1.2 这时候 a = undefined
            (function () {
                console.log(a);//=>4.1.3 这时候此函数体内部没有定义a,所以去它上面的作用域找a,
                                //在它外面的作用域中a =undefined
            }());
       }());
    