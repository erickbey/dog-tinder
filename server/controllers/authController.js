const User = require('../models/UserModel');

exports.signup = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        breed: req.body.breed,
        about: req.body.about,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });
    
    res.status(200).json({
        status: 'success',
        data: {
            newUser
        }
    });
};