import Registration from "../models/registrationSchema.js";
import Event from "../models/eventSchema.js";

export const createRegistration = async (req, res) => {
  try {
    const { event: eventId, firstName, lastName, email, phone } = req.body;

    // if event exists
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ success: false, message: "Event not found" });

    // check capacity
    if (event.capacity && event.capacity > 0) {
      const count = await Registration.countDocuments({ event: eventId });
      if (count >= event.capacity) {
        return res.status(400).json({ success: false, message: "Event is full" });
      }
    }

    const reg = new Registration({ event: eventId, firstName, lastName, email, phone });
    await reg.save();
    res.status(201).json({ success: true, registration: reg });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getRegistrationsForEvent = async (req, res) => {
  try {
    const regs = await Registration.find({ event: req.params.eventId }).sort({ createdAt: -1 });
    res.json(regs);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllRegistrations = async (req, res) => {
  try {
    const regs = await Registration.find().populate("event").sort({ createdAt: -1 });
    res.json(regs);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteRegistration = async (req, res) => {
  try {
    const deleted = await Registration.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Registration not found" });
    res.json({ success: true, message: "Registration deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
