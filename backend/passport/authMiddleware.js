const checkAuthenticated = (req, res, next) => {
  console.log("req.isAuthenticated", req.isAuthenticated());
  console.log("req", req)
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

// const checkLoggedIn = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return res.redirect("/dashboard");
//   }
//   next();
// };

module.exports = { checkAuthenticated };


//