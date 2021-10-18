import express from "express";
import morgan from "morgan";
import path from "path";
import { addErrorHandler } from "./middlewares/errorHandler.js";
import database from "./modules/mongoose.js";
import routes from "./routes/routes.js";

import swaggerUi from "swagger-ui-express";
// import swaggerJson from "../docs/swagger.json";

import postgres from "./modules/pg.js";

const PORT = process.env.PORT || 80;
const __dirname = path.resolve();

async function server(mode) {
	const app = express();

	try {
		app.listen(PORT, () => console.log(`SERVER READY AT ${PORT}`));

		// middlewares
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(express.static(path.join(__dirname, "public")));
		// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

		if (mode == "dev") app.use(morgan("dev"));

		const client = await postgres();

		app.use(async (req, res, next) => {
			req.client = client;
			let response = await client.query(
				`SELECT * FROM user_sessions s JOIN users u ON s.user_id = u.user_id  WHERE s.user_id = 'c2579523-d2ce-43b7-9439-851aea69c48b';`
			);
			console.log(response.rows);
			next();
		});

		app.use(addErrorHandler);
	} catch (error) {
		console.log("SERVER ERROR:", error + "");
	} finally {
		routes(app);
	}
}

export default server;
