import "dotenv/config";
import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js"
import itemsRoutes from "./routes/items.routes.js"
import loginRoutes from "./routes/login.routes.js"
import item2Routes from "./routes/items2.routesmdb.js"
import morgan from "morgan";
import { connectDB } from "./utils/mongodb.js";

const app = express();

const PORT = 4000;

connectDB();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);
app.use(itemsRoutes);
app.use(loginRoutes);
app.use(item2Routes);



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
