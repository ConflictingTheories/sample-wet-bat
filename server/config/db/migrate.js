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

const { Model, DataTypes } = require("sequelize");

const DB = require("../../lib/Database");

// Migration DB Model
class Migration extends Model {}
Migration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    migration: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  },
  { sequelize: DB, modelName: "migration" }
);

// Run
module.exports = (async (args) => {
  const _DB = DB.getQueryInterface();

  // Default UP
  const direction = process.argv.slice(2)[0] == "down" ? "down" : "up";

  // create Migrations Table
  await _DB.createTable("migrations", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    migration: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  });

  // Run Migrations in Order of Name (Date)
  fs.readdir(path.join(__dirname, "migrations"), (err, files) => {
    if (err) console.error(err);
    else {
      // Sort
      const orderedFiles =
        direction === "up" ? files.sort() : files.sort().reverse();
      console.log("MIGRATIONS::",orderedFiles);
      // Run
      orderedFiles.reduce(async (_, file) => {
        try {
          console.log("--> Migrating::", file, " :: ", direction);
          // Store Migration in DB
          const done = await Migration.findOne({ where: { migration: file } });
          if (direction === "up" && !done) {
            await require(path.join(__dirname, "migrations", file))(DB).up();
            await Migration.create({
              migration: file,
              updatedAt: new Date(),
              createdAt: new Date(),
            });
          }
          // Delete Migration if Rolldown
          if (direction === "down" && done) {
            await require(path.join(__dirname, "migrations", file))(DB).down();
            await Migration.destroy({ where: { migration: file } });
          }
        } catch (e) {
          console.error(e);
        }
        console.log("--> Done::", file);
      }, "");
    }
  });
})();
