"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.saveVehicleDataToJsonFile = (jsonData) => {
    fs.writeFile("vehicle.json", jsonData, function (err) {
        if (err) {
            console.log(err);
        }
    });
};
//# sourceMappingURL=VehicleConnection.js.map