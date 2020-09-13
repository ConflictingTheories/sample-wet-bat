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

const cryptoUtils = require('../lib/Crypto');
const DB = require('../lib/Database');
// Seed DB
module.exports = () => {
  // Users
  (async () => {
    await DB.sync();
    const saltedPass = cryptoUtils.saltHashPassword('password')
    const jane = await User.create({
      username: "janedoe",
      password: saltedPass.passwordHash,
      salt: saltedPass.salt
    });
    console.log(jane.toJSON());
  })();
  
};