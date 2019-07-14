const router = require('express').Router();
const Functions = require('../Middlewares/Functions');

router.get('/',(req,res) => res.send('Welcome To Shrinkify Api Make Post Request To this url'));
//Login Paths..
router.post('/',(req,res) => Functions.handler(req,res));

module.exports = router;