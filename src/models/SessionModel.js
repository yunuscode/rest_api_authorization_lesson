import pkg from "mongoose";

const { model, Schema, Types } = pkg;

const SessionSchema = new Schema(
	{
		user_id: {
			type: Types.ObjectId,
			ref: "User",
			required: true,
		},
		user_agent: {
			type: String,
			required: true,
			max: 100,
		},
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	}
);

const Session = new model("Session", SessionSchema);

export default Session;
