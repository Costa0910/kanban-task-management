const express = require("express");
const router = express.Router();

const { User } = require("../db/models");
const { setTokenCookie, restoreUser } = require("../controllers/auth/auth");
const {
  validateSignup,
  validateLogin,
} = require("../controllers/utils/validateInput");

/* GET /api/user/login
  { credential, password } => { token }
  */

router.get("/login", validateLogin, restoreUser, async (req, res) => {
  const { user } = req;
  if (user) {
    setTokenCookie(res, user);
    return res.json({ user: user.toSafeObject() });
  }
  const { credential, password } = req.body;
  const newLogin = await User.login({ credential, password });
  if (!newLogin) {
    const err = new Error("Login failed");
    err.status = 401;
    err.title = "Login failed";
    err.errors = ["The provided credentials were invalid."];
    return res.status(401).json(err);
  }
  res.status(200).json({
    user: newLogin.toSafeObject(),
  });
});

/* POST /api/user/signup
  { username, email, password } => { token }
  */

router.post("/signup", validateSignup, async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.signUp({ email, password, username });
  if (user) {
    setTokenCookie(res, user);
    return res.json({ user: user.toSafeObject() });
  }

  const err = new Error("Login failed");
  err.status = 401;
  err.title = "Login failed";
  err.errors = ["The provided credentials were invalid."];
  return res.status(401).json(err);
});

module.exports = router;
