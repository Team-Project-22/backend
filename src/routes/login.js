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
        // username이나 password를 입력하지 않았을때 401 에러 반환
        if(!username || !password){
            res.status = 401;
            return;
        }
        try{
            const user = await User.findOne({where : username});
            // 계정이 DB에 존재하지 않으면 401 에러 처리
            if(!user){
                res.status = 401;
                return;
            }

            // 비밀번호 비교해서 틀리면 401 에러 반환 맞으면 id와 username을 가지고 jwt 토큰 반환.
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
            const data = JSON.stringify(user); // 직렬화

            const token = jwt.sign( // 토큰 발행
                {
                    _id : data._id,
                    username : data.username,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn : "7d",
                },
            )
            res.cookie('access_token', token, { // 7일가는 access_token 발행
                maxAge : 1000 * 60 * 60 * 24 * 7,
                httpOnly : true,
            });
        }catch(err){ // 내부서버 에러.
            res.status = 500;
            console.error(err);
        }
    }
)

module.exports = router;