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
  const Lead = require('../../models/Lead')(DB);

  // GET /
  router.get("/", (req, res) => {
    try {
     let leads = await Lead.findAll();
      res.json(leads.get());
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  return router;
};
