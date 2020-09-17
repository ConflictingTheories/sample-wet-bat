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
  const Quote = require("../../models/Quote")(DB);

  // GET /
  router.get("/", async (req, res) => {
    try {
      const quotes = await Quote.findAll();
      res.json(quotes);
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  // GET /:id
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      // Fetch by User Id
      const quotes = await Quote.findAll({ where: { salesId: id } });
      res.json(quotes);
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  // POST /create
  router.post("/create", async (req, res) => {
    try {
      const {
        departureDate,
        returnDate,
        travellers,
        transport,
        cost,
      } = req.body;
      // Fetch by User Id
      const quotes = await Quote.create({
        departureDate,
        returnDate,
        travellers,
        transport,
        cost,
      });
      res.json(quotes);
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  return router;
};
