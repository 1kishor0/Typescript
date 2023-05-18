function display(): void {

    let a: number = 10;
    let b: number = 30;

    console.log(a + b);

    let c: number | boolean | string;
    c = 10;
    console.log(c);
    c = true;
    console.log(c);
    c = "hello";
    console.log(c);

}

display();

display();
let users: object[];
users = [];
type user = { userName: string, password: number };

let user1: user;

user1 = { userName: "Sakib", password: 10101 };
users.push(user1);

console.log(users);


type RequestType = "GET" | "POST";

let getRequest: RequestType;
getRequest = "POST";

function requestHandler(RequestType: RequestType) {
    console.log(RequestType);

}

requestHandler(getRequest);
export { };