import User from "../../models/UserModel.js";
import Validations from "../../modules/validations.js";
import { genCrypt } from "../../modules/bcrypt.js";
import { createToken } from "../../modules/jwt.js";
import Session from "../../models/SessionModel.js";

export default class UserRouteController {
	static async UserHomeGetController(request, response, next) {
		try {
			response.status(200).json({
				ok: true,
				message: "OK",
			});
		} catch (error) {
			next(error);
		}
	}
	static async UserSignUpPostController(request, response, next) {
		try {
			const { username, name, password } =
				await Validations.SignUpValidation(request.body);

			const user = await User.create({
				name,
				username,
				password: await genCrypt(password),
			});

			const session = await Session.create({
				user_id: user._id,
				user_agent: request.headers["user-agent"],
			});

			const token = createToken({
				session_id: session._id,
			});

			response.status(200).json({
				ok: true,
				message: "User created successfully",
				data: {
					token,
				},
			});
		} catch (error) {
			if (error.name === "MongoServerError" && error.code === 11000) {
				next(new Error("Username must be unique"));
				return;
			}
			next(error);
		}
	}
}
