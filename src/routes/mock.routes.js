import { Router } from "express";
import { MockController } from "../controllers/mock.controller.js";

const router = Router();

router.get("/users", MockController.getUsers);
router.get("/couriers", MockController.getCouriers);
router.get("/orders", MockController.getOrders);
router.get("/deliveries", MockController.getDeliveries);

router.post("/seed", MockController.seed);
router.post("/seed/users", MockController.seedUsers);
router.post("/seed/deliveries", MockController.seedDelivery);

export default router;