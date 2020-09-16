/*                                            *\
** ------------------------------------------ **
**           Sample - Weather SPA    	      **
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
  const { saltHashPassword } = require("../../../lib/Crypto");
  const Airport = require("../../../models/Airport")(DB);
  // Seed Airport Table
  return {
    seed: async () => {
      await DB.sync();
      await Airport.create({
        tag: "YYC",
        name: "Calgary International Airport",
      });
      await Airport.create({
        tag: "YYG",
        name: "Edmonton International Airport",
      });
    },
  };
};
