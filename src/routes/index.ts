import {Router} from "express";
import urlRoutes from "@/routes/url.route.js";

const router = Router();

router.use("/url", urlRoutes);

export default router;