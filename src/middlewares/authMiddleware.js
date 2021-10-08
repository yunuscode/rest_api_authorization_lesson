import { checkToken } from "../modules/jwt.js";
import Session from "../models/SessionModel.js";

export default async function AuthMiddleware(request, response, next) {
	try {
		if (!request.headers["authorization"]) {
			throw new response.error(403, "Token is not defined");
		}

		const data = checkToken(request.headers["authorization"]);

		console.log(data);

		if (!data) {
			throw new response.error(403, "Token doesn't match");
		}

		const session = await Session.findOne({
			_id: data.session_id,
		}).populate("user_id");

		request.user = session.user_id;

		next();
	} catch (error) {
		next(error);
	}
}
