import { Request, Response } from "express";
import palindromeService = require("../services/PalindromeService");

export let verify = (req: Request, res: Response) => {
    let min:number = Number(req.query.min);
    let max:number = Number(req.query.max);
    res.send([palindromeService.palindromeBetweenRange(min, max)]);
};