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
const { catch } = require("../../config/db/migrate");
const router = express.Router({
  mergeParams: true,
});
const Error = require("../../lib/Error");

module.exports = (DB) => {
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
  router.post("/login", (req, res) => {
    try {
      res.json({ msg: "logged-in" });
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
