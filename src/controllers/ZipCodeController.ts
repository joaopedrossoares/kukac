import { Request, Response } from "express";
import ZipCodeService = require("../services/ZipCodeService");

export let getZipCodeInformations = (req: Request, res: Response) => {
    const stringifyZipCode = JSON.stringify(req.query);
    const zipCodeJson = JSON.parse(stringifyZipCode);
    const {zipcode1, zipcode2, zipcode3, zipcode4, zipcode5} = Object(zipCodeJson);
    res.send(ZipCodeService.getZipCodeInformations([zipcode1, zipcode2, zipcode3, zipcode4, zipcode5]));
};