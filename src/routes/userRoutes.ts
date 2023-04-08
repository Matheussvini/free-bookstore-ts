import { Router } from 'express';
import validateSchema from '../middlewares/schemaValidationMiddleware';
import { userSchema } from '../schemas/User';


const userRoutes = Router();

userRoutes
    .post("signup", validateSchema(userSchema), userControllers.create);
    // .post("signin", userControllers.signin);

export default userRoutes;