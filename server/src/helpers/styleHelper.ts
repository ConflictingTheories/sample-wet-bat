/*                                            *\
** ------------------------------------------ **
**         	Sample - Wet Bat PoC     	      **
** ------------------------------------------ **
**  Copyright (c) 2020 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

import lessToJs from "less-vars-to-js";

// Auth Helper Class
class StyleHelper {
  // Return General File
  static getStyle: any = (path: string) => {
    const paletteLess = require(path);
    return lessToJs(paletteLess);
  };

  // return Colors
  static getColors: any = () => {
    const paletteLess = require("../styles/colors.less");
    return lessToJs(paletteLess);
  };
}

export default StyleHelper;
