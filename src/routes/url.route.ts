import {Router} from "express";
import {urlController} from "@/routes/container.js";
const router = Router();

//@todo: Add controller for stats later

router.post("/short", urlController.createShortURL);
router.get("/stats/:shortId", (req, res) => {});

export default router;