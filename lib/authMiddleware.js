import jwt from 'jsonwebtoken';

export const verifyToken = (handler) => {
  return async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from header

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Add user info to the request object
      return handler(req, res); // Proceed to the original handler
    } catch (err) {
      console.error(err);
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
  };
};
