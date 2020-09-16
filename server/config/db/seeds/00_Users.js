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
  const User = require("../../../models/User")(DB);
  const count = 5;
  // Seed Users Table
  return {
    seed: async () => {
      await DB.sync();
      while (--count) {
        const name = [
          Crypto.randomFrom(seeds.firstNames),
          Crypto.randomFrom(seeds.lastNames),
        ].join(" ");
        const username = name.split(" ").join(".").toLowerCase();
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
