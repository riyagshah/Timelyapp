const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");


passport.use(new GoogleStrategy({
    clientID: "540186498803-80qis41sh470ockdc9smsddqj9qqdq9a.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, "user");
  }
));

module.exports = passport;