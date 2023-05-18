"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function display() {
    var a = 10;
    var b = 30;
    console.log(a + b);
    var c;
    c = 10;
    console.log(c);
    c = true;
    console.log(c);
    c = "hello";
    console.log(c);
}
display();
display();
var users;
users = [];
var user1;
user1 = { userName: "Sakib", password: 10101 };
users.push(user1);
console.log(users);
var getRequest;
getRequest = "POST";
function requestHandler(RequestType) {
    console.log(RequestType);
}
requestHandler(getRequest);
