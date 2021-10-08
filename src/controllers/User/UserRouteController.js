import User from "../../models/UserModel.js";
import Validations from "../../modules/validations.js";
import { genCrypt } from "../../modules/bcrypt.js";

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

			// console.log(user);

			// console.log(username, name, password);
		} catch (error) {
			if (error.name === "MongoServerError" && error.code === 11000) {
				next(new Error("Username must be unique"));
			}
			next(error);
		}
	}
}
