import mongoose from "mongoose";

import "../models/UserModel.js";
import "../models/SessionModel.js";

export default async function database() {
	try {
		const db = await mongoose.connect(process.env.MONGO_URL);

		return db;
	} catch (error) {
		console.log("DATABASE ERROR", error + "");
	}
}
