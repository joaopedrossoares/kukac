"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const palindrome = require("./controllers/PalindromeController");
const purchaseChange = require("./controllers/PurchaseChangeController");
const vehicle = require("./controllers/VehicleController");
const zipcode = require("./controllers/ZipCodeController");
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
exports.default = app;
//# sourceMappingURL=app.js.map