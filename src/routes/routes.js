import { handleErrorCheck } from "../middlewares/errorHandler.js";
import NotFoundMiddleware from "../middlewares/notFoundMiddleware.js";
import HomeRoute from "./HomeRoute.js";
import UserRoute from "./User/UserRoute.js";

export default function routes(app) {
	try {
		app.use("/users", UserRoute);
		app.use("/", HomeRoute);
	} finally {
		app.use(handleErrorCheck);
		app.use(NotFoundMiddleware);
	}
}
