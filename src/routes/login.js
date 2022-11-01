const Joi = require('joi');
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


const router = express.Router();

router.route('./login')
  .post(async(req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        if(!username || !password){
            res.status = 401;
            return;
        }
        try{
            const user = await User.findOne({where : username});
            // 계정이 존재하지 않으면 에러 처리
            if(!user){
                res.status = 401;
                return;
            }
            const query = 'SELECT password FROM '
            const vaild = await bcrypt.compare(password, User.findOne(
                {
                    attributes : password,
                    where: username
                }
            ));
            if(!vaild){
                res.status = 401;
                return;
            }
            const data = JSON.stringify(user);
            const token = jwt.sign(
                {
                    _id : data._id,
                    username : data.username,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn : "7d",
                },
            )
            res.cookie('access_token', token, {
                maxAge : 1000 * 60 * 60 * 24 * 7,
                httpOnly : true,
            });
        }catch(err){
            res.status = 500;
            console.error(err);
        }
    }
)

module.exports = router;