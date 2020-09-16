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
        // tour -> hasOne Airport
        _DB.addColumn("tours", "airportId", {
          type: DataTypes.INTEGER,
          references: {
            model: "airports",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }),
        // quote -> hasOne Tour
        _DB.addColumn("quotes", "tourId", {
          type: DataTypes.INTEGER,
          references: {
            model: "tours",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }),
        // quote -> hasOne Destination
        _DB.addColumn("quotes", "destId", {
          type: DataTypes.INTEGER,
          references: {
            model: "airports",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }),
        // quote -> hasOne Departure
        _DB.addColumn("quotes", "deptId", {
          type: DataTypes.INTEGER,
          references: {
            model: "airports",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }),
        // quote -> hasOne lead
        _DB.addColumn("quotes", "leadId", {
          type: DataTypes.INTEGER,
          references: {
            model: "leads",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }),
        // quote -> hasOne sales person
        _DB.addColumn("quotes", "salesId", {
          type: DataTypes.INTEGER,
          references: {
            model: "users",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }),
      ]);
    },
    down: () => {
      // Remove Foreign Key Constraints
      return Promise.all([
        _DB.removeColumn("tours", "airportId"),
        _DB.removeColumn("quotes", "tourId"),
        _DB.removeColumn("quotes", "destId"),
        _DB.removeColumn("quotes", "deptId"),
        _DB.removeColumn("quotes", "salesId"),
        _DB.removeColumn("quotes", "leadId"),
      ]);
    },
  };
};
