import Joi from "joi";

export default class Validations {
	static async SignUpValidation(data) {
		return await Joi.object({
			name: Joi.string()
				.min(2)
				.max(32)
				.required()
				.trim()
				.error(new Error("Name is invalid")),
			username: Joi.string()
				.required()
				.regex(/^(?=.{5,16}$)(?![_])(?!.*[_]{2})[a-zA-Z0-9_]+(?<![_])$/)
				.error(new Error("Username is invalid")),
			password: Joi.string()
				.required()
				.min(4)
				.error(new Error("Password is invalid")),
		}).validateAsync(data);
	}
}
