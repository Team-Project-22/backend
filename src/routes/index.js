const express = require('express');
const path = require('path');
const router = express.Router();


// 프론트의 메인 페이지를 띄워주는 코드
router.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/..`, 'artasy_frontend/build/index.html' ))
})

// 프론트의 페이지를 띄워주는 코드(메인페이지 제외 나머지 페이지들)
router.get('*', (req,res) => {
    res.sendFile(path.join(`${__dirname}/../../..`, 'artasy_frontend/build/index.html' ))
})

module.exports = router;