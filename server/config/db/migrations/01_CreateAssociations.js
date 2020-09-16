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
      // Add Foreign Keys & Relationships

      // quote -> hasOne Tour
      await _DB.addColumn("quotes", "tourId", {
        type: DataTypes.INTEGER,
        references: {
          model: "tours",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      // quote -> hasOne Destination
      await _DB.addColumn("quotes", "destId", {
        type: DataTypes.INTEGER,
        references: {
          model: "airports",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      // quote -> hasOne Departure
      await _DB.addColumn("quotes", "deptId", {
        type: DataTypes.INTEGER,
        references: {
          model: "airports",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      // quote -> hasOne lead
      await _DB.addColumn("quotes", "leadId", {
        type: DataTypes.INTEGER,
        references: {
          model: "leads",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      // quote -> hasOne sales person
      await _DB.addColumn("quotes", "salesId", {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });

      // tour -> hasOne Airport
      await _DB.addColumn("tours", "airportId", {
        type: DataTypes.INTEGER,
        references: {
          model: "airports",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });

    },
    down: async () => {
      // Remove Foreign Key Constraints
      await _DB.removeColumn("quotes", "tourId");
      await _DB.removeColumn("quotes", "destId");
      await _DB.removeColumn("quotes", "deptId");
      await _DB.removeColumn("quotes", "leadId");
      await _DB.removeColumn("quotes", "salesId");
      await _DB.removeColumn("tours", "airportId");
    },
  };
};
