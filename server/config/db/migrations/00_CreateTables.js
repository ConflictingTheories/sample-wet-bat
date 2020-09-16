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
    up: () => {
      return Promise.all([
        // Users Table
        _DB.createTable("users", {
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
          createtAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        }),
        // Tours
        _DB.createTable("tours", {
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
          createtAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        }),
        // Quotes
        _DB.createTable("quotes", {
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
          createtAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        }),
        // Airports
        _DB.createTable("airports", {
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
        }),
        // Leads
        _DB.createTable("leads", {
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
          createtAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        }),
      ]);
    },
    down: () => {
      return Promise.all([
        _DB.dropTable("leads"),
        _DB.dropTable("airports"),
        _DB.dropTable("quotes"),
        _DB.dropTable("tours"),
        _DB.dropTable("users"),
      ]);
    },
  };
};
