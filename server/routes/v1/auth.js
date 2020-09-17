/*                                            *\
** ------------------------------------------ **
**           Sample - Wet Bat PoC     	      **
** ------------------------------------------ **
**  Copyright (c) 2020 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

const express = require("express");
const router = express.Router({
  mergeParams: true,
});
const Error = require("../../lib/Error");
const Crypto = require("../../lib/Crypto");

module.exports = (DB) => {
  const User = require("../../models/User")(DB);

  // GET /auth  (TODO -- Add Middleware)
  router.get("/", (req, res) => {
    try {
      // Setup Response
      let status = {
        is_authorized: true,
        status: 200,
        msg: "Success: Authorized!",
      };
      // Return
      res.json(status);
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  // POST /auth/login  (TODO -- Add Middleware)
  router.post("/login", async (req, res) => {
    try {
      console.log(req);
      const { password, username } = req.body;
      const user = await User.findOne({ where: { username } });
      if (user) {
        const saltedPass = Crypto.sha512(password, user.get("salt"));
        if (saltedPass.passwordHash === user.get("password")) {
          const ret = user.get();
          delete ret.password;
          delete ret.salt;
          
          // TODO: Set Session / Cookies
          //

          res.json({ msg: "logged-in", user: ret });
        }
      } else {
        Error.setError("Unauthorized", 401, {});
        Error.sendError(res);
      }
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  // POST /auth/login (TODO -- Add Middleware)
  router.post("/logout", (req, res) => {
    try {
      res.json({ msg: "logged-out" });
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  return router;
};
