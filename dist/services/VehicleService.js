"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conn = require("../connection/VehicleConnection");
const Passeio_1 = require("../models/Passeio");
const Moto_1 = require("../models/Moto");
const Passengers_1 = require("../enums/Passengers");
const VehicleModel_1 = require("../enums/VehicleModel");
exports.saveDataVehicle = (detailsVehicle) => {
    const jsonDetailsVehicle = JSON.parse(detailsVehicle);
    if (jsonDetailsVehicle.model === VehicleModel_1.default.CAR) {
        let passeio = new Passeio_1.default();
        passeio._model = jsonDetailsVehicle.model;
        passeio._description = jsonDetailsVehicle._description;
        passeio._yearFactoring = jsonDetailsVehicle._yearFactoring;
        conn.saveVehicleDataToJsonFile(JSON.parse(passeio.getAllInfo()));
    }
    else if (jsonDetailsVehicle.model === VehicleModel_1.default.MOTOCYCLE) {
        let moto = new Moto_1.default();
        moto._passengers = Passengers_1.default.ONE;
        conn.saveVehicleDataToJsonFile(JSON.parse(moto.getAllInfo()));
    }
};
//# sourceMappingURL=VehicleService.js.map