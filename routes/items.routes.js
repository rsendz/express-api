import { Router } from "express";
import { getItems, getItem, postItem, putItem, deleteItem } from "../controllers/items.controllers.js";
import { validateJWT } from "../utils/jwt.js";

const router = Router();

router.get("/items/", validateJWT, getItems);
router.get("/items/:id", validateJWT, getItem);
router.post("/items/", validateJWT, postItem);
router.put("/items/:id", validateJWT, putItem);
router.delete("/items/:id", validateJWT, deleteItem);

export default router;