import { StudentAge as age, StudentName as name } from "./module";


function getStudent(): void {
    console.log(`Name is ${name} and age is ${age}`);
}

getStudent();