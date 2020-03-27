"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicleService = require("../services/VehicleService");
exports.describeVehicle = (req, res) => {
    const model = req.body.model;
    const yearFactoring = req.body.yearFactoring;
    const quantityCarDoor = req.body.quantityCarDoor;
    const description = req.body.quantityCarDoor;
    const informations = JSON.stringify({
        "model": model,
        "yearFactoring": yearFactoring,
        "quantityCarDoor": quantityCarDoor,
        "description": description
    });
    res.send(vehicleService.saveDataVehicle(informations));
};
//# sourceMappingURL=VehicleController.js.map