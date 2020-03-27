"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PurchaseChangeService = require("../services/PurchaseChangeService");
exports.purchaseChange = (req, res) => {
    let productPrice = Number(req.query.productPrice);
    let money = Number(req.query.money);
    res.send(PurchaseChangeService.calculatePurchaseChange(productPrice, money));
};
//# sourceMappingURL=PurchaseChangeController.js.map