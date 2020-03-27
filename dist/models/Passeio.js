"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleModel_1 = require("../enums/VehicleModel");
class Passeio {
    constructor() {
        this.getAllInfo = () => {
            return JSON.stringify({
                "model": VehicleModel_1.default.CAR,
                "yearFactoring": this._yearFactoring,
                "quantityCarDoor": this._quantityCarDoor,
                "description": this._description
            });
        };
        this._quantityCarDoor = 4;
    }
    get model() {
        return this._model;
    }
    get yearFactoring() {
        return this._yearFactoring;
    }
    set yearFactoring(newYearFactoring) {
        this._yearFactoring = newYearFactoring;
    }
    get quantityCarDoor() {
        return this._quantityCarDoor;
    }
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
    }
}
exports.default = Passeio;
//# sourceMappingURL=Passeio.js.map