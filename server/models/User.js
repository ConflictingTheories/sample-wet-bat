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
  class User extends Model {}
  User.init(
    {
      id: DataTypes.INTEGER,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    { DB, modelName: "user" }
  );
  
  //Relationships
  User.hasMany(Quote);

  return User;
};
