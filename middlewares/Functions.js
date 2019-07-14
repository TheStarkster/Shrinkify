const Links = require('../models/links')
const shortId = require('short-id');

module.exports = {
    handler: (req,res)=>{
        console.log("--------------------")
        const sid = shortId.generate()
        console.log("^^^^^^")
        const data = new Links({
            longUrl:req.params.longUrl,
            shortId:sid
        });
        console.log(data);
        data.save()
        .then(u=>{
            if(u){
                res.json({
                    u
                });
            }
        });
    }
}