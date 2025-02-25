import { Router } from "express";
import { getIndex, getPing } from "../controllers/index.routes";

const router = Router();

router.get("/", getIndex);
router.get("ping", getPing);

export default router;