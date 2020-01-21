const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('token')
    if (!token) return res.status(400).json({ m: 'Auth Error '})

    try {
        const decoded = jwt.verify(token, 'randomString');
        req.user = decoded.user;
        next()
    } catch (e) {
        console.log(e);
        res.status(500).send({ m: 'Invalid token '})
    }
}