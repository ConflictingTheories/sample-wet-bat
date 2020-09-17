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

module.exports = (DB) => {
  const Lead = require("../../models/Lead")(DB);

  // GET /
  router.get("/", async (req, res) => {
    try {
      const leads = await Lead.findAll();
      res.json(leads);
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  return router;
};
