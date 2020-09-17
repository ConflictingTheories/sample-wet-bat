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

import ApiHelper from "../helpers/apiHelper";

// GET /tours
export async function getAll() {
  return ApiHelper.get(`/tours`).then((tours: any) => {
    console.log(tours);
    return tours;
  });
}

// GET /tours/airports
export async function getAirports() {
  return ApiHelper.get(`/tours/airports`).then((airports: any) => {
    console.log(airports);
    return airports;
  });
}
