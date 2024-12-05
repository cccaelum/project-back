const admin = require("firebase-admin");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

  if (!token) {
    req.uid = null; 
    return next();
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.uid = decodedToken.uid;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    req.uid = null;
    next();
  }
};

module.exports = verifyToken;
