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
import * as colors from '!!../styles/colors.less';

// Auth Helper Class
class StyleHelper {
  // return Colors
  static getColors: any = () => {
      return lessToJs(colors);
  };
}

export default StyleHelper;
