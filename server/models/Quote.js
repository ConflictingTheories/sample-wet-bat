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

const { Model, DataTypes } = require("sequelize");

// Pass in DB Handler Instance
module.exports = (DB) => {
  // Models
  const Tour = require("./Tour")(DB);
  const User = require("./Tour")(DB);
  const Lead = require("./Tour")(DB);
  const Airport = require("./Tour")(DB);

  class Quote extends Model {}
  Quote.init(
    {
      id: DataTypes.INTEGER,
      departureDate: DataTypes.DATE,
      returnDate: DataTypes.DATE,
      travellers: DataTypes.INTEGER,
      transport: DataTypes.ENUM("none", "rental", "own"),
      cost: DataTypes.FLOAT
    },
    { DB, modelName: "quote" }
  );
  // Relationships
  Quote.hasOne(Tour, { as: "tourId", foreignKey: "id" });
  Quote.hasOne(Lead, { as: "leadId", foreignKey: "id" });
  Quote.hasOne(Airport, { as: "deptId", foreignKey: "id" });
  Quote.hasOne(Airport, { as: "destId", foreignKey: "id" });
  Quote.hasOne(User, { as: "salesId", foreignKey: "id" });
  return Quote;
};
