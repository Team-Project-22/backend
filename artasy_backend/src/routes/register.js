const Joi = require('joi');
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');


const router = express.Router();

router.route('./register')
  .post(async(req, res) => {
    const schema = Joi.object().keys({
      username: Joi.string().alphanum().min(3).max(20).required(),
      password: Joi.string().required(),
    });
    const result = schema.validate(req.body);
    if(result.error){
      res.status = 400;
      res.body = result.error;
      return;
    }

    const username = req.body.username;
    const password = req.body.password;
    try{
    const hash = await bcrypt.hash(password, 10);
    if(findOne({where : username})){
      res.status = 409; //Conflict
      return;
    }

    User.create({
      username : req.body.username,
      password : hash
    })
    res.status(201).redirect('/');
  }catch(err){
    console.error(err);
  }})


module.exports = router;