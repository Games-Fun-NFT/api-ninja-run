const res = require("express/lib/response")

exports.index = async (req, res) => {
    res.status(200).send('ok')
}