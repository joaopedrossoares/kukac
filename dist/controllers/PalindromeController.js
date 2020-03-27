"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palindromeService = require("../services/PalindromeService");
exports.verify = (req, res) => {
    let min = Number(req.query.min);
    let max = Number(req.query.max);
    res.send([palindromeService.palindromeBetweenRange(min, max)]);
};
//# sourceMappingURL=PalindromeController.js.map