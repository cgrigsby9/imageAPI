import { Request, Response, NextFunction } from "express";

export function validateQuery(req: Request, _res: Response, next: NextFunction): void {
  const { query } = req;
  const requiredParams = ["filename", "width", "height"];
  for (let i = 0; i < requiredParams.length; i++) {
    if (query[requiredParams[i]] === undefined) {
      req.body = "Error, Input file missing";
    }
  }
  next();
}

export default validateQuery;