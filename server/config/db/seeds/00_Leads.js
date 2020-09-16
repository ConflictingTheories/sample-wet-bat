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
  const { randomFrom } = require("../../../lib/Crypto");
  const Lead = require("../../../models/Lead")(DB);
  const seeds = require("../json/seeds.json");
  // Seed Leads Table
  return {
    seed: async () => {
      await DB.sync();
      let count = 20;
      while (--count) {
        // Details (Random)
        const name = [
          randomFrom(seeds.firstNames),
          randomFrom(seeds.lastNames),
        ].join(" ");
        const email = name.split(" ").join(".").toLowerCase() + "@example.com";
        const city = randomFrom(seeds.cities);
        const contactMethod = randomFrom(seeds.contactMethods);
        const phone = "(555)-x0x-xx0x".replace(/x/, (x) =>
          randomFrom("123456789".split(""))
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
