import express from "express";
import { getAllIncidents, addIncident, getIncident, deleteIncident } from "../controllers/incident.controller.js";

const router = express.Router();

router.get("/", getAllIncidents);
router.post("/", addIncident);
router.get("/:id", getIncident);
router.delete("/:id", deleteIncident);

export default router;