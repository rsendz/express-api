import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js"
import itemsRoutes from "./routes/items.routes.js"


const app = express();

const PORT = 3000;

app.use(express.json());
app.use(indexRoutes);
app.use(itemsRoutes);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
