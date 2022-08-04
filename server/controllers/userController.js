const User = require('../models/UserModel');
const AppError = require('./../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.updateMe = catchAsync(async (req, res, next) => {
    if (req.body.password || req.body.passwordConfirm) {
      next(
        new AppError(
          "This route is not for password updates. Please use /updatePassword",
          400
        )
      );
    }
  
    const filteredBody = filterObj(req.body, "name", "email");
    if (req.file) filteredBody.photo = req.file.filename;
  
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true,
    });
  
    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  });

  exports.deleteMe = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });
  
    res.status(204).json({
      status: "success",
      data: null,
    });
  });