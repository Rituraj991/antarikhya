import Event from "../models/eventSchema.js";

export const createEvent = async (req, res) => {
  try {
    const e = new Event(req.body);
    await e.save();
    res.status(201).json({ success: true, event: e });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getEvent = async (req, res) => {
  try {
    const e = await Event.findById(req.params.id);
    if (!e) return res.status(404).json({ success: false, message: "Event not found" });
    res.json(e);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getActiveEvents = async (req, res) => {
  try {
    const now = new Date();
    const events = await Event.find({
      isActive: true,
      startDate: { $lte: now },
      endDate: { $gte: now }
    }).sort({ startDate: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Event not found" });
    res.json({ success: true, event: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Event not found" });
    res.json({ success: true, message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
