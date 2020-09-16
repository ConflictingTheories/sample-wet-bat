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
  const Airport = require("../../../models/Airport")(DB);
  const seeds = require('../json/seeds.json');
  // Seed Airport Table
  return {
    seed: async () => {
      await DB.sync();
      seeds.airports && seeds.airports.map(async (x) => await Airport.create(x));
    },
  };
};
