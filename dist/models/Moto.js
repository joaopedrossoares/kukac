"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleModel_1 = require("../enums/VehicleModel");
class Moto {
    constructor() {
        this.getAllInfo = () => {
            return JSON.stringify({
                "model": VehicleModel_1.default.MOTOCYCLE,
                "yearFactoring": null,
                "quantityCarDoor": null,
                "description": {}
            });
        };
        this._wheels = 2;
    }
    get wheels() {
        return this._wheels;
    }
    get passengers() {
        return this._passengers;
    }
    set passenger(newPassengers) {
        this._passengers = newPassengers;
    }
}
exports.default = Moto;
//# sourceMappingURL=Moto.js.map