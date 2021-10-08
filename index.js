import { config } from "dotenv";
config();

import server from "./src/server.js";

server(process.env.MODE);
