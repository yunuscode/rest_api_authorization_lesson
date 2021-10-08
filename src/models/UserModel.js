import pkg from "mongoose";

const { model, Schema } = pkg;

const UserSchema = new Schema(
	{
		name: {
			type: String,
			min: 2,
			max: 32,
			required: true,
		},
		username: {
			type: String,
			lowercase: true,
			required: true,
			unique: true,
			min: 5,
			max: 16,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	}
);

const User = new model("User", UserSchema);

export default User;
