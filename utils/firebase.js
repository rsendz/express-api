import "dotenv/config";
import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import itemsRoutes from "./routes/items.routes.js";
import items2Routes from "./routes/items2.routes.js";
import items3Routes from "./routes/items3.routes.js";
import loginRoutes from "./routes/login.routes.js";
import morgan from "morgan";
import { connectDB } from "./utils/mongodb.js";

const app = express();

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);
app.use(itemsRoutes);
app.use(items2Routes);
app.use(items3Routes);
app.use(loginRoutes);

app.listen(5000, console.log("http://localhost:5000"));