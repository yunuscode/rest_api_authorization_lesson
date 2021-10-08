import { sign, verify } from "jsonwebtoken";

export function createToken(data) {
	return sign(data, process.env.SECRET_KEY);
}

export function checkToken(token) {
	try {
		return verify(token, process.env.SECRET_KEY);
	} catch (error) {
		return false;
	}
}
