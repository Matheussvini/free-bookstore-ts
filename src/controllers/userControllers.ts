import { NextFunction, Request, Response } from "express";
import { SignInType, SignUpType } from "../@types/users";
import httpStatus from "http-status";

async function create(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body as SignUpType;

  try {
    await userServices.create({ name, email, password } as SignUpType);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}


export default {
    create,
}