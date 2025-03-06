import { Router } from "express";
import { getItems, getItem, postItem, putItem, deleteItem } from "../controllers/item2.controllersmdb.js";

const router = Router();

router.get("/items2/", getItems);
router.get("/items2/:id", getItem);
router.post("/items2/", postItem);
router.put("/items2/:id", putItem);
router.delete("/items2/:id", deleteItem);

export default router;