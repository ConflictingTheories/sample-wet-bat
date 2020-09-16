/*                                            *\
** ------------------------------------------ **
**           Sample - Weather SPA    	      **
** ------------------------------------------ **
**  Copyright (c) 2020 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

module.exports = (DB) => {
  const Crypto = require("../../../lib/Crypto");
  const Lead = require("../../../models/Lead")(DB);

  const firstNames = [
    "Harry",
    "Jim",
    "Moe",
    "Molly",
    "Ferris",
    "John",
    "Jane",
    "Philippe",
    "Marco",
    "Jared",
    "Shannon",
  ];
  const lastNames = [
    "Potsworth",
    "Johnson",
    "Flanders",
    "Brown",
    "Dawson",
    "Thompson",
    "Lee",
    "Ruiz",
    "Green",
    "Amlin",
    "Barrager",
  ];
  const cities = ["Calgary", "Edmonton", "Vancouver"];
  const contacts = ["phone", "email", "sms"];
  // Seed Users Table
  return {
    seed: async () => {
      await DB.sync();
      let count = 100;
      while (--count) {
        const name = [
          Crypto.randomFrom(firstNames),
          Crypto.randomFrom(lastNames),
        ].join(" ");
        
        const email = [
          name.split(" ").join(".").toLowerCase(),
          "@example.com",
        ].join("");
 
        const city = Crypto.randomFrom(cities);
        const contactMethod = Crypto.randomFrom(contacts);
        const phone = Crypto.slice(10, (buffer) => {
          return buffer.map((x) => parseInt(x) % 9).join("");
        });    

        const doe = await Lead.create({
          name: name,
          phone: phone,
          email: email,
          city: city,
          preferredContact: contactMethod,
        });
      }
    },
  };
};
