const Links = require('../models/links')
const shortId = require('short-id');
const validUrl = require('valid-url');
module.exports = {
    handler: (req, res) => {
        const sid = shortId.generate()
        // const longUrl = req.body.txtlongUrl;
        const longUrl = req.body.txtlongUrl;
            const data = new Links({
                longUrl: longUrl,
                shortId: sid
            });
            data.save()
                .then(u => {
                    if (u) {
                        res.json({
                            u
                        });
                    }
                });

    }
}