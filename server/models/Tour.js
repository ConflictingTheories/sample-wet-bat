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
  const Airport = require("./Airport")(DB);
  class Tour extends Model {}
  Tour.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      destination: DataTypes.STRING,
      description: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      createtAt:DataTypes.DATE,
      updatedAt:DataTypes.DATE
    },
    { sequelize: DB, modelName: "tour" }
  );
  // Relationships
  Tour.hasOne(Airport, { foreignKey: "id", as: "airportId" });

  return Tour;
};
