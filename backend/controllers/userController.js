const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    // Arg 1 (Payload): anything not sensitive can go here
    // Arg 2 (Secret): Loaded from .env
    // Arg 3 (Options)
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// Login User
const loginUser = async (req, res) => {
    const { email, password }= req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }    
}

// Sign Up User
const signUpUser = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.signup(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {loginUser, signUpUser}