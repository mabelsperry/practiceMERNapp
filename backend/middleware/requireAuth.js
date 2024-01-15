const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {

    // Verify authentication
    const { authorization } = req.headers()

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required.'})
    }

    const token = authorization.split(' ')[1]

    try {
        
    } catch (error) {

    }

}