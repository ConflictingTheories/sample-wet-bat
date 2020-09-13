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

const express = require('express');
const router = express.Router({
    mergeParams: true
});

module.exports = (DB) => {

    // GET /auth  (TODO -- Add Middleware)
    router.get('/', (req, res) => {
        // Setup Response
        let status = {
            is_authorized: true,
            status: 200,
            msg: "Success: Authorized!"
        };
        // Return
        res.json(status);
    });

    // POST /auth/login  (TODO -- Add Middleware)
    router.post('/login', (req, res) => {
        res.json({msg:'logged-in'});
    });

    // POST /auth/login (TODO -- Add Middleware)
    router.post('/logout', (req, res) => {
       res.json({msg:'logged-out'});
    });

    return router;
}