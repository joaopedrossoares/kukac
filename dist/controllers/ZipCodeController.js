"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZipCodeService = require("../services/ZipCodeService");
exports.getZipCodeInformations = (req, res) => {
    const stringifyZipCode = JSON.stringify(req.query);
    const zipCodeJson = JSON.parse(stringifyZipCode);
    const { zipcode1, zipcode2, zipcode3, zipcode4, zipcode5 } = Object(zipCodeJson);
    res.send(ZipCodeService.getZipCodeInformations([zipcode1, zipcode2, zipcode3, zipcode4, zipcode5]));
};
//# sourceMappingURL=ZipCodeController.js.map