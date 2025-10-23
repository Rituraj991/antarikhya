import express from "express";
import {createRegistration, getAllRegistrations, getRegistrationsForEvent, deleteRegistration} from "../controllers/registrationController.js";

const router = express.Router();


router.post("/", createRegistration);                   
router.get("/", getAllRegistrations);                     
router.get("/event/:eventId", getRegistrationsForEvent);  
router.delete("/:id", deleteRegistration);             

export default router;
