import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user.js";
import { checkUsersession } from "../Middlewares/auth.js";

// create router
const userRouter = Router();

// Define Routes
userRouter.post('/register', register);

userRouter.post('/login',login);

userRouter.get('/profile', checkUsersession, profile);

userRouter.get('/logout', checkUsersession, logout)


// export Router
export default userRouter;