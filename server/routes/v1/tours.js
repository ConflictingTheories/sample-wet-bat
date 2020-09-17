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
  const Tour = require("../../models/Tour")(DB);
  const Airport = require("../../models/Airport")(DB);

  // GET /  -- Get Tours
  router.get("/", async (req, res) => {
    try {
      const tours = await Tour.findAll();
      res.json(tours);
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  // GET /airports -- Return Airports
  router.get("/airports", async (_, res) => {
    try {
      const airports = await Airport.findAll();
      res.json(airports);
    } catch (e) {
      Error.setError("Error", 500, e);
      Error.sendError(res);
    }
  });

  return router;
};
