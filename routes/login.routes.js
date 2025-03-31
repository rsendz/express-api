import { Router } from "express";
import { login, newUser, updateUser } from "../controllers/login.controllers.js";

const router = Router();

router.post("/login/", login);
router.post("/login/newUser", newUser);
router.put("/login/updateUser", updateUser);

export default router;