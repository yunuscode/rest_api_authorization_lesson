import { Router } from "express";
import HomeRouteController from "../controllers/HomeRouteController.js";

const HomeRoute = Router();

HomeRoute.get("/", HomeRouteController.HomeRouteGetController);

export default HomeRoute;
