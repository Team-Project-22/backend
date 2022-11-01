const express = require('express');
const User = require('../models/user');


const router = express.Router();


// 로그인 된 상태인지 체크하는 코드
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