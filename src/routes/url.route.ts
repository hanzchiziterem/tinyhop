import {Router} from "express";

const router = Router();

//@todo: Add controller url later
router.post("/short", (req, res) => {});
router.get("/:shortId", (req, res) => {});
router.get("/stats/:shortId", (req, res) => {});

export default router;