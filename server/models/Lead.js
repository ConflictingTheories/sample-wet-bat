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
    const Quote = require('./Quote')(DB);

  class Lead extends Model {}
  Lead.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      city: DataTypes.STRING,
      preferredContact: DataTypes.ENUM("phone", "email", "sms"),
    },
    { DB, modelName: "lead" }
  );

  // Relationships
  Lead.hasMany(Quote)

  return Lead;
};
