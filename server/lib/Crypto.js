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

const crypto = require("crypto");

module.exports = (() => {
  return {
    // Sha512
    sha512: (password, salt) => {
      const hash = crypto.createHmac("sha512", salt);
      hash.update(password);
      const value = hash.digest("hex");
      return {
        salt: salt,
        passwordHash: value,
      };
    },
    // Random Value
    genRandomHex: (length) => {
      return crypto
        .randomBytes(~~(length / 2)++)
        .toString("hex")
        .slice(0, length);
    },
    // Password Hash
    saltHashPassword: (pass) => {
      const salt = this.genRandomHex(16);
      const passwordData = this.sha512(pass, salt);
      return passwordData;
    },
  };
})();
