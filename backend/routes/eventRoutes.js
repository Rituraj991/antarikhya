import express from "express";

import { createEvent, getAllEvents, getEvent, getActiveEvents, updateEvent, deleteEvent } from "../controllers/eventControllers.js";

const router = express.Router();

router.post("/", createEvent)
router.get("/", getAllEvents)
router.get("/", getEvent)
router.get("/", getActiveEvents)
router.put("/", updateEvent)
router.delete("/", deleteEvent)

export default router;