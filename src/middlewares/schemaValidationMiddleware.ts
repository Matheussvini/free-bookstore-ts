import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import errors from "../errors/index.js";

function validateSchema(schema: ObjectSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw errors.conflictError(error.message);
    }
    next();
  };
}

export default validateSchema;