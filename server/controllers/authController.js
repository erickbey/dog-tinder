const User = require('../models/UserModel');
const AppError = require('./../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
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
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new AppError('Please provide email and password', 400))
    }

    const user = await User.findOne({ email }).select('+password');

    if(!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401))
    }

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
});