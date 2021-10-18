import Pool from "pg-pool";

const opt = {
	database: "rest_api",
	user: "postgres",
	password: "new_password",
	port: 5432,
};

const pool = new Pool({
	connectionString:
		"postgres://postgres:new_password@localhost:5432/rest_api",
});

let id = "6";

async function postgres() {
	try {
		const client = await pool.connect();

		return client;
	} catch (error) {
		console.log("PG_ERROR:", error);
	}
}

// main();

export default postgres;
