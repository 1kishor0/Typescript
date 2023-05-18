class Vehicle {
    wheel: string;
    modelNo: number;

    constructor(wheel: string, modelNo: number) {
        this.wheel = wheel;
        this.modelNo = modelNo;

    }
    display(): void {
        console.log(this.wheel);
        console.log(this.modelNo);
    }

}
let obj1 = new Vehicle("Toyota", 1212);

obj1.display();
export{};