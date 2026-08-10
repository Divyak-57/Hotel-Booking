import express from "express";

import {
    getRooms,
    getRoomById,
    createRoom
} from "../controllers/roomController.js";

const router = express.Router();

router.get("/", getRooms);

router.get("/:id", getRoomById);

router.post("/", createRoom);

export default router;
