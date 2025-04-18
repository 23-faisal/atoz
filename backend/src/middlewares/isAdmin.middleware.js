const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "Forbidden: You do not have permission to access this resource.",
    });
  }
};
export default isAdmin;
