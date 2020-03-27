import fs = require('fs');

export let saveVehicleDataToJsonFile = (jsonData: JSON) => {
    fs.writeFile("vehicle.json", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});
}