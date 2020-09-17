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

// GET /quotes
export async function getAll() {
  return ApiHelper.get(`/quotes`).then((quotes: any) => {
    console.log(quotes);
    return quotes;
  });
}

// GET /quotes/:id
export async function getByUserId(id:number) {
  return ApiHelper.get(`/quotes/${id}`).then((quotes: any) => {
    console.log(quotes);
    return quotes;
  });
}
