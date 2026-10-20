import { Router } from "express";
import { LogController } from "../controllers/log.controller.js";

const router = Router();

router.get("/test", LogController.test);

export default router;