export default class SessionModel {
	static async create_session(client, user_agent, user_id) {
		try {
			let response = await client.query(
				`INSERT INTO user_sessions (
					session_user_agent, 
					user_id
				) VALUES (
					$1, 
					$2
				) 
				RETURNING *`,
				[user_agent, user_id]
			);
			return response.rows;
		} catch (error) {
			console.log(error + "");
		}
	}
}
