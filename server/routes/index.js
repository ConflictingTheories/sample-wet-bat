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

// Third-party Libraries
const express = require("express");
const path = require("path");
const router = express.Router({ mergeParams: true });
const Error = require("../lib/Error");

module.exports = function (_) {

  router.use("*", express.static(__dirname + "/../build"));

  router.get("/", function (_, res) {
    try {
      res.sendFile(path.join(__dirname, "../build/", "index.html"));
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  router.get("/index", function (_, res) {
    try {
      res.sendFile(path.join(__dirname, "../build/", "index.html"));
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  return router;
};
