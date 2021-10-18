export default class UserModel {
	static async create_user(client, name, username, password, role) {
		try {
			let response = await client.query(
				`INSERT INTO users (
					user_name, 
					user_username, 
					user_password, 
					user_role
				) VALUES (
					$1, 
					$2, 
					crypt($3, gen_salt('bf', 10)),
					$4
				) 
				RETURNING *`,
				[name, username, password, role]
			);
			return response.rows;
		} catch (error) {
			console.log(error + "");
		}
	}
}
