var Vehicle = /** @class */ (function () {
    function Vehicle(wheel, modelNo) {
        this.wheel = wheel;
        this.modelNo = modelNo;
    }
    Vehicle.prototype.display = function () {
        console.log(this.wheel);
        console.log(this.modelNo);
    };
    return Vehicle;
}());
var obj1 = new Vehicle("Toyota", 1212);
obj1.display();
