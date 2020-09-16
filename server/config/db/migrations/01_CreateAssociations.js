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
      await _DB.addColumn("quote", "tourId", {
        type: DataTypes.INTERGER,
        references: {
          model: "tour",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      // quote -> hasOne Destination
      await _DB.addColumn("quote", "destId", {
        type: DataTypes.INTERGER,
        references: {
          model: "airport",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      // quote -> hasOne Departure
      await _DB.addColumn("quote", "deptId", {
        type: DataTypes.INTERGER,
        references: {
          model: "airport",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      // quote -> hasOne lead
      await _DB.addColumn("quote", "leadId", {
        type: DataTypes.INTERGER,
        references: {
          model: "lead",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      // quote -> hasOne sales person
      await _DB.addColumn("quote", "salesId", {
        type: DataTypes.INTERGER,
        references: {
          model: "user",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });

      // tour -> hasOne Airport
      await _DB.addColumn("tour", "airportId", {
        type: DataTypes.INTERGER,
        references: {
          model: "airport",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });

    },
    down: async () => {
      // Remove Foreign Key Constraints
      await _DB.removeColumn("quote", "tourId");
      await _DB.removeColumn("quote", "destId");
      await _DB.removeColumn("quote", "deptId");
      await _DB.removeColumn("quote", "leadId");
      await _DB.removeColumn("quote", "salesId");
      await _DB.removeColumn("tour", "airportId");
    },
  };
};
