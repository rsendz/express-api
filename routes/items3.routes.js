import { Router } from "express";
import {
  getItems,
  getItem,
  postItem,
  putItem,
  deleteItem,
} from "../controllers/items3.controllers.js";

const router = Router();

router.get("/items3/", getItems);
router.get("/items3/:id", getItem);
router.post("/items3/", postItem);
router.put("/items3/:id", putItem);
router.delete("/items3/:id", deleteItem);

export default router;

