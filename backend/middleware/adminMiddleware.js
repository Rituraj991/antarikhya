import Admin from "../models/adminSchema.js";

export const adminMiddleware = async (req, res, next) => {
  try {
    const username = req.body.username || req.query.username || req.headers.username;

    if (!username) {
      return res.status(403).json({
        success: false,
        message: "Forbidden. Admins only. Username missing.",
      });
    }
    const adminUser = await Admin.findOne({ username });
    if (!adminUser) {
      return res.status(403).json({
        success: false,
        message: "Forbidden. Admins only.",
      });
    }

    req.admin = adminUser;

    next();
  } catch (error) {
    next(error);
  }
};
