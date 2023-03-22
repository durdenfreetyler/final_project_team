const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const knex = require("../knex/knex.js");

function authUser(req, email, password, done) {
  knex("users")
    .where({ email: email })
    .first()
    .then((user) => {
      if (!user) {
        return done(null, false, { message: "Incorrect email or password" });
      }

      if (user.password !== password) {
        return done(null, false, { message: "Incorrect email or password" });
      }

      return done(null, user);
    })
    .catch((err) => done(err));
}


module.exports = authUser

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",

//     },
//     authUser
//   )
// );
