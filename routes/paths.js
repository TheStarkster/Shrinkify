const router = require('express').Router();
const Functions = require('../Middlewares/Functions');

// router.get('/',(req,res) => res.redirect('login'));
//Login Paths..
router.post('/:longUrl',(req,res) => Functions.handler(req,res));
router.post('/a/:d',(req,res) => {
    res.json({
        a: req.param.d
    })
});

module.exports = router;