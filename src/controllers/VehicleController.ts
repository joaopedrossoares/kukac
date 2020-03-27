import { Request, Response } from "express";
import vehicleService = require("../services/VehicleService");
import { constants } from "perf_hooks";

export let describeVehicle = (req: Request, res: Response) => {
    const model:string = req.body.model;
    const yearFactoring : string = req.body.yearFactoring;
    const quantityCarDoor: number = req.body.quantityCarDoor;
    const description: JSON = req.body.quantityCarDoor;
    
    const informations = JSON.stringify({
        "model": model,
        "yearFactoring": yearFactoring,
        "quantityCarDoor": quantityCarDoor,
        "description": description
    });

    res.send(vehicleService.saveDataVehicle(informations));
};