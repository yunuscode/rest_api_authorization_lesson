import { Router } from "express";
import UserRouteController from "../../controllers/User/UserRouteController.js";

const UserRoute = Router();

UserRoute.get("/", UserRouteController.UserHomeGetController);

export default UserRoute;
