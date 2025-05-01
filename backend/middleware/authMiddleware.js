const authenticate = (req, res, next) => {
    const token = req.headers["authorization"];
  
    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }
  
  
    next(); 
  };
  
  module.exports = authenticate;
  