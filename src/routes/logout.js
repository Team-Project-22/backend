const express = require('express');

const router = express.Router();

router.route('./logout')
  .post(async(req, res) => {
        res.cookie('access_token', null);
        res.status = 204;
    }
)


module.exports = router;