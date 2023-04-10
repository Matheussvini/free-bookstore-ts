import { NextFunction, Request, Response } from "express";
import { SignInType, SignUpType } from "../@types/users";
import httpStatus from "http-status";
import userServices from "../services/userServices";

async function create(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body as SignUpType;

  try {
    await userServices.create({ name, email, password } as SignUpType);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}

async function signIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as SignInType;
  try {
    const token = await userServices.signIn({ email, password });
    return res.send({ token });
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  signIn,
};
