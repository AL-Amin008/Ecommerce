// securityMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config/config'); // You should create a configuration file for secret keys

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden - Invalid token' });
    }
    req.user = user; // Attach the user information to the request object
    next();
  });
}

module.exports = {
  authenticateToken,
  // Add more middleware functions as needed
};
