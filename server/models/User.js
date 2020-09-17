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
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
      name: DataTypes.STRING,
      createdAt:DataTypes.DATE,
      updatedAt:DataTypes.DATE
    },
    { sequelize: DB, modelName: "user" }
  );

  return User;
};
