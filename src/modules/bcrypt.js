import { genSalt, hash, compare } from "bcrypt";

export async function genCrypt(password) {
	const SALT = await genSalt(10);
	return await hash(password, SALT);
}

export async function compareCrypt(password, crypt) {
	return await compare(password, crypt);
}
