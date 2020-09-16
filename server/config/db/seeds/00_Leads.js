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
  const Crypto = require("../../../lib/Crypto");
  const Lead = require("../../../models/Lead")(DB);
  const seeds = require("../json/seeds.json");
  // Random Data

  const count = 20;

  // Seed Users Table
  return {
    seed: async () => {
      await DB.sync();
      while (--count) {
        // Details (Random)
        const name = [
          Crypto.randomFrom(seeds.firstNames),
          Crypto.randomFrom(seeds.lastNames),
        ].join(" ");
        const email = name.split(" ").join(".").toLowerCase() + "@example.com";
        const city = Crypto.randomFrom(seeds.cities);
        const contactMethod = Crypto.randomFrom(seeds.contactMethods);
        const phone = "(555)-x0x-xx0x".replace(/x/, (x) =>
          Crypto.randomFrom("123456789".split(""))
        );
        // Make Lead
        await Lead.create({
          name: name,
          phone: phone,
          email: email,
          city: city,
          preferredContact: contactMethod,
        });
      }
    },
  };
};
