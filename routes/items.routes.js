import { Router } from "express";
import { getItems } from "../controllers/items.controllers.js";

const router = Router();

router.get("/items/", getItems);

export default router;