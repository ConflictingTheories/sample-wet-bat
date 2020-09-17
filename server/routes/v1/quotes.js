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
  const Quote = require('../../models/Quote')(DB);

  // GET /
  router.get("/", (req, res) => {
    try {
      const quotes = await Quote.findAll();
      res.json(quotes.get());
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  router.get("/:id", (req, res) => {
    try {
      const { id } = req.params;
      // Fetch by User Id
      const quotes = await Quote.findAll({where:{salesId:id}});
      res.json(quotes.get());
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  return router;
};
