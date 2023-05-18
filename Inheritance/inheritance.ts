class Vehicle {
    wheel: string;
    modelName: string;

    constructor(wheel: string, modelName: string) {
        this.wheel = wheel;
        this.modelName = modelName;

    }
    display(): void {
        console.log(`wheel${this.wheel},${this.modelName}`);

    }

}

class vehicleName extends Vehicle {

    modelNo: number;
    constructor(wheel: string, modelName: string, modelNo: number) {
        super(wheel, modelName);
        this.modelNo = modelNo;
    }
    display(): void {
        console.log(`wheel: ${this.wheel},Model Name: ${this.modelName},Model No: ${this.modelNo}`);
    }

}

let obj1 = new vehicleName("F74", "Toyota", 121323);
obj1.display();
export { };