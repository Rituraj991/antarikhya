export const authMiddleware = (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized. Please log in."
            });
        }
        next();
    } catch (error) {
        next(error);
    }
};
