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
  const { saltHashPassword, randomFrom } = require("../../../lib/Crypto");
  const User = require("../../../models/User")(DB);
  const seeds = require("../json/seeds.json");
  // Seed Users Table
  return {
    seed: async () => {
      await DB.sync();
      let count = 5;
      while (--count) {
        const name = [
          randomFrom(seeds.firstNames),
          randomFrom(seeds.lastNames),
        ].join(" ");
        console.log(name);
        const username = name.split(" ").join(".").toLowerCase();
        console.log(username);
        const saltedPass = saltHashPassword("password");
        const doe = await User.create({
          username: username,
          password: saltedPass.passwordHash,
          salt: saltedPass.salt,
          name: name,
        });
        console.log(doe.toJSON());
      }
    },
  };
};
