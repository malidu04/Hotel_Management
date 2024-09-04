const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

 const Schema = mongoose.Schema;

 const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      profileImage: {
        type: String,
      },
      resetKey: {
        type: String,
      },
 });

 userSchema.static.signup = async function (
    email,
    password,
    firstName,
    lastName,
    address,
    contactNumber
 ) {

    const profileImage = '';

    if(!email || !password) {
        throw Error('All feilds must be filled');
    }
    if(!validator.isEmail(email)){
        throw Error('Email not valid');
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

    const exists = await this.findOne({ email });

    if(exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        password: hash,
        firstName,
        lastName,
        address,
        contactNumber,
        profileImage
    });

    return user;
 };

 userSchema.static.login = async function (email, password) {
    if(!email || !password) {
        throw Error('All feild msut be filled');
    }

    const user = await this.findOne({ email });
    if(!user) {
        throw Error('Incorrect Email');
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        throw Error('Incorrect Password');
    }
        
    return user;

    };
 
    module.exports = mongoose.model('User', userSchema);