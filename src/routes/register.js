const Joi = require('joi');
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');


const router = express.Router();
// 회원가입 하는 코드
router.route('./register')
  .post(async(req, res) => {

    // 아이디(3자 이상, 20자 이하 알파벳)와 비밀번호의 조건 설정(문자열 들어가야함)
    const schema = Joi.object().keys({
      username: Joi.string().alphanum().min(3).max(20).required(),
      password: Joi.string().required(),
    });
    // 입력받은 데이터에 문제가 있으면 400번 에러 발생시킴.
    const result = schema.validate(req.body);
    if(result.error){
      res.status = 400;
      res.body = result.error;
      return;
    }


    // username, password를 받고, 만약 DB에 uesrname이 존재한다면 409 에러 발생시킴.
    const username = req.body.username;
    const password = req.body.password;
    try{
    const hash = await bcrypt.hash(password, 10); // 비밀번호 해시화
    if(findOne({where : username})){
      res.status = 409; //Conflict
      return;
    }
    // User정보 DB에 저장하고 홈페이지로 이동.
    User.create({
      username : req.body.username,
      password : hash
    })
    res.status(201).redirect('/');
  }catch(err){
    console.error(err);
  }})


module.exports = router;