"use strict";
function myBase() {
    let a = 10;
    let b = 20;
    let c = 30;
    let d = 40;
    return (a + b + c + d);
}
myBase();
document.getElementById("hello").innerHTML = myBase();
