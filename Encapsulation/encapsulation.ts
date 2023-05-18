class Vehicle {
    private wheel: string;
    protected modelName: string;

    constructor(wheel: string, modelName: string) {
        this.wheel = wheel;
        this.modelName = modelName;
    }

    display(): void {
        console.log(`Wheel: ${this.wheel}, Model Name: ${this.modelName}`);
    }

    setWheel(wheel: string): void {
        this.wheel = wheel;
    }

    getWheel(): string {
        return this.wheel;
    }
}

class VehicleName extends Vehicle {
    private modelNo: number;

    constructor(wheel: string, modelName: string, modelNo: number) {
        super(wheel, modelName);
        this.modelNo = modelNo;
    }

    display(): void {
        console.log(`Wheel: ${this.getWheel()}, Model Name: ${this.modelName}, Model No: ${this.modelNo}`);
    }
}

let obj1 = new VehicleName("F74", "Toyota", 121323);
obj1.display();

export { };
