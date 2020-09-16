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
  class Airport extends Model {}
  Airport.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tag: DataTypes.STRING,
      name: DataTypes.STRING,
      createtAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize: DB, modelName: "airport" }
  );
  return Airport;
};
