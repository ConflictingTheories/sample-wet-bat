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

import lessToJs from 'less-vars-to-js';
import fs from 'fs';

// Auth Helper Class
class StyleHelper {

    // Return General File
   static getStyle: any = (path:string)=>{
    const paletteLess = fs.readFileSync(path, 'utf8');
    return lessToJs(paletteLess);
   }

   // return Colors
   static getColors: any = ()=>{
    const paletteLess = fs.readFileSync('../styles/colors.less', 'utf8');
    return lessToJs(paletteLess);
   }
}

export default StyleHelper