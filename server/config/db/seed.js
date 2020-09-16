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

const fs = require("fs");
const path = require("path");
const DB = require("../../lib/Database");

// Run
module.exports = (async (args) => {
  fs.readdir(path.join(__dirname, "seeds"), (err, files) => {
    console.log("MIGRATIONS::",files);
    if (err) console.error(err);
    else {
      files.sort().map(async (file) => {
        await require(path.join(__dirname, "seeds", file))(DB).seed();
      })
    }
  });

})();
