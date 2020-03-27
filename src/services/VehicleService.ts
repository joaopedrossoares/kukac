import conn = require('../connection/VehicleConnection');
import Passeio from "../models/Passeio";
import Moto from "../models/Moto";
import Passenger from "../enums/Passengers";
import VehicleModel from "../enums/VehicleModel";

export let saveDataVehicle = (detailsVehicle: string) => {
    const jsonDetailsVehicle = JSON.parse(detailsVehicle);
    if(jsonDetailsVehicle.model === VehicleModel.CAR){
        let passeio = new Passeio();
        passeio._model = jsonDetailsVehicle.model;
        passeio._description = jsonDetailsVehicle._description;
        passeio._yearFactoring = jsonDetailsVehicle._yearFactoring;
        conn.saveVehicleDataToJsonFile(JSON.parse(passeio.getAllInfo()));        
    } else if (jsonDetailsVehicle.model === VehicleModel.MOTOCYCLE) {
        let moto = new Moto();
        moto._passengers = Passenger.ONE;
        conn.saveVehicleDataToJsonFile(JSON.parse(moto.getAllInfo()));        
    }
}