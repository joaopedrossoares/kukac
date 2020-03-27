import VehicleModel from '../enums/VehicleModel'  
interface IVehicle {
    model: VehicleModel;
    yearFactoring : string;
    quantityCarDoor: number;
    description: JSON;

}

export default IVehicle