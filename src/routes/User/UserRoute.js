import { Router } from "express";
import UserRouteController from "../../controllers/User/UserRouteController.js";
import User from "../../models/UserModel.js";

const UserRoute = Router();

UserRoute.post("/sign_up", UserRouteController.UserSignUpPostController);
UserRoute.get("/", UserRouteController.UserHomeGetController);

export default UserRoute;
