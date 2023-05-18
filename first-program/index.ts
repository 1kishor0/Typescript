let FirstName: string = 'hello world';
let age: number = 25;
console.log(FirstName, age);

//index.ts-----> compile> tsc.index.ts----->index.js---->"run"---> node index.js----->

function addNumber(param1: number, param2: number) {
    console.log(param1 + param2);
}
addNumber(100, 200);
export { };