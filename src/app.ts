import express = require("express");
import palindrome = require("./controllers/PalindromeController");
import purchaseChange = require("./controllers/PurchaseChangeController");
import vehicle = require("./controllers/VehicleController");
import zipcode = require("./controllers/ZipCodeController");

const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints

app.get("/isPalindrome/", (req, res) => {
  palindrome.verify(req, res);
});

app.get("/purchaseChange/", (req, res) => {
  purchaseChange.purchaseChange(req, res);
});

app.post("/vehicle/", (req, res) => {
  vehicle.describeVehicle(req, res);
});

app.get("/zipcode/", (req, res) => {
  zipcode.getZipCodeInformations(req, res);
});

// export our app
export default app;