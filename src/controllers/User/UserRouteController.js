// import User from "../../models/UserModel.js";
import Validations from "../../modules/validations.js";
import { genCrypt } from "../../modules/bcrypt.js";
import { createToken } from "../../modules/jwt.js";
import Session from "../../models/SessionModel.js";

import UserModel from "../../models/UserModel.js";
import SessionModel from "../../models/SessionModel.js";

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

			console.log(username, name, password);

			const data = await UserModel.create_user(
				request.client,
				name,
				username,
				password,
				"user"
			);

			const [user] = await data;

			const [session] = await SessionModel.create_session(
				request.client,
				request.headers["user-agent"],
				user.user_id
			);

			console.log(session);

			const token = createToken({
				user_id: user.user_id,
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
