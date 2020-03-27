import Passengers from '../enums/Passengers'
import VehicleModel from '../enums/VehicleModel'

class Moto {
    
    _wheels: number;
    _passengers: Passengers;
    
    constructor() {
        this._wheels  = 2;
    }

    get wheels():number {
        return this._wheels;
    }

    get passengers() {
        return this._passengers;
    }

    set passenger(newPassengers:Passengers) {
        this._passengers = newPassengers;
    }

    public getAllInfo = () => {
        return JSON.stringify({
            "model": VehicleModel.MOTOCYCLE,
            "yearFactoring": null,
            "quantityCarDoor": null,
            "description": {}
        });
    }
}

export default Moto;