import { Router } from "express";
import validateSchema from "../middlewares/schemaValidationMiddleware";
import { userSchema } from "../schemas/User";
import userControllers from "../controllers/userControllers";

const userRoutes = Router();

userRoutes
  .post("signup", validateSchema(userSchema), userControllers.create)
  .post("signin", userControllers.signIn);

export default userRoutes;
