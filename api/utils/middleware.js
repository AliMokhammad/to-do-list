const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

exports.checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Verify the token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = decoded.user;
    next();
  });
};
