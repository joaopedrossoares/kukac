import IVehicle from '../interfaces/IVehicle';
import VehicleModel from "../enums/VehicleModel";

class Passeio implements IVehicle {
    
    _model: VehicleModel;
    _yearFactoring : string;
    _quantityCarDoor: number;
    _description: JSON;
    
    constructor() {
        this._quantityCarDoor  = 4;
    }

    get model():VehicleModel {
        return this._model;
    }

    get yearFactoring() {
        return this._yearFactoring;
    }

    set yearFactoring(newYearFactoring:string) {
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


    public getAllInfo = () => {
        return JSON.stringify({
            "model": VehicleModel.CAR,
            "yearFactoring": this._yearFactoring,
            "quantityCarDoor": this._quantityCarDoor,
            "description": this._description
        });
    }
}

export default Passeio;