/**
 * Created by Freed on 2017/2/13.
 */

function Fn() {
    return Fn
};
fn = new Fn();
console.log(fn instanceof Fn);