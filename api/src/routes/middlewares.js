const middlewares = {};
//Para ver si se esta logueado
//Me parece que ya viene con passport
middlewares.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(403).json({ Error: "Login required" });
};
//Para ver si el usuario es un admin
middlewares.isAuthenticatedAndAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role == "admin") {
    return next();
  }

  return res.status(403).json({ Error: "Admin level access required" });
};

middlewares.createUser = (req, res, next) => {
  let { nombre, rol, email, contrasena } = req.body;
};
module.exports = middlewares;

