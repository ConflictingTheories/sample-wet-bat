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
  class Quote extends Model {}
  Quote.init(
    {
      id: DataTypes.INTEGER,
      departureDate: DataTypes.DATE,
      returnDate: DataTypes.DATE,
      travellers: DataTypes.INTEGER,
      transport: DataTypes.ENUM('none','rental','own'),
      // Relationships
      //..

      // Tour
      //

      // Created By (Sales Person)
      //

      // Lead
      // 
    },
    { DB, modelName: "quote" }
  );
  return Quote;
};
