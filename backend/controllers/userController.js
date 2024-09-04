const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { sendEmailNodemailer } = require('../util/sendmail');

const createToken = (_id) => {
    return jwt.sign({ _id }, 'malidupahasara' , { expiresIn: '3d' });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, token, profileImage:user.profileImage });    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

 