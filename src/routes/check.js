const express = require('express');
const User = require('../models/user');


const router = express.Router();

router.route('./check')
  .post(async(req, res) => {
        const {user} = res.locals;
        if(!user){
            res.status = 401;
            return;
        }
        req.body = user;
    })


module.exports = router;