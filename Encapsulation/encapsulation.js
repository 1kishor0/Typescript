"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(wheel, modelName) {
        this.wheel = wheel;
        this.modelName = modelName;
    }
    Vehicle.prototype.display = function () {
        console.log("Wheel: ".concat(this.wheel, ", Model Name: ").concat(this.modelName));
    };
    Vehicle.prototype.setWheel = function (wheel) {
        this.wheel = wheel;
    };
    Vehicle.prototype.getWheel = function () {
        return this.wheel;
    };
    return Vehicle;
}());
var VehicleName = /** @class */ (function (_super) {
    __extends(VehicleName, _super);
    function VehicleName(wheel, modelName, modelNo) {
        var _this = _super.call(this, wheel, modelName) || this;
        _this.modelNo = modelNo;
        return _this;
    }
    VehicleName.prototype.display = function () {
        console.log("Wheel: ".concat(this.getWheel(), ", Model Name: ").concat(this.modelName, ", Model No: ").concat(this.modelNo));
    };
    return VehicleName;
}(Vehicle));
var obj1 = new VehicleName("F74", "Toyota", 121323);
obj1.display();
