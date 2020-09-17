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

module.exports = (DB) => {
  const Tour = require("../../../models/Tour")(DB);
  const seeds = require("../json/seeds.json");
  // Seed Airport Table
  return {
    seed: async () => {
      await DB.sync();
      seeds.tours &&
        seeds.tours.map(async (x) => {
          await Tour.create({
            destination: x.destination,
            description: x.description,
            startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            endDate: new Date(Date.now() + 24 * 24 * 60 * 60 * 1000),
          });
          await Airport.create(x);
        });
    },
  };
};
