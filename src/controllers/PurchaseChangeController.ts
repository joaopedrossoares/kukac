import { Request, Response } from "express";
import PurchaseChangeService = require("../services/PurchaseChangeService");

export let purchaseChange = (req: Request, res: Response) => {
    let productPrice:number = Number(req.query.productPrice);
    let money:number = Number(req.query.money);
    res.send(PurchaseChangeService.calculatePurchaseChange(productPrice, money));
};