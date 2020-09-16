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
  const Tour = require('./Tour')(DB);
  const Quote = require('./Tour')(DB);
  class Airport extends Model {}
  Airport.init(
    {
      id: DataTypes.INTEGER,
      tag: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    { DB, modelName: "airport" }
  );
  Airport.hasMany(Quote,{foreignKey: 'deptId', sourceKey:'id' });
  Airport.hasMany(Quote,{foreignKey: 'destId', sourceKey:'id' });
  Airport.hasMany(Tour,{foreignKey: 'airportId', sourceKey:'id' });
  
  return Airport;
};
