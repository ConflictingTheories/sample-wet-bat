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

const { DataTypes } = require("sequelize");

module.exports = (DB) => {
  const _DB = DB.getQueryInterface();
  return {
    up: async () => {
      // Users Table
      await _DB.createTable("users", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        salt: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });

      // Tours
      await _DB.createTable("tours", {
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
      });

      // Quotes
      await _DB.createTable("quotes", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        departureDate: DataTypes.DATE,
        returnDate: DataTypes.DATE,
        travellers: DataTypes.INTEGER,
        transport: DataTypes.ENUM("none", "rental", "own"),
        cost: DataTypes.FLOAT,
      });

      // Airports
      await _DB.createTable("airports", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        tag: DataTypes.STRING,
        name: DataTypes.STRING,
      });

      // Leads
      await _DB.createTable("leads", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        city: DataTypes.STRING,
        preferredContact: DataTypes.ENUM("phone", "email", "sms"),
      });
    },
    down: async () => {
      await _DB.dropTable("leads");
      await _DB.dropTable("airports");
      await _DB.dropTable("quotes");
      await _DB.dropTable("tours");
      await _DB.dropTable("users");
    },
  };
};
