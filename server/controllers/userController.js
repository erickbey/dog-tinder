const User = require('../models/UserModel');
const AppError = require('./../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Checks the body for allowed fields to return values that do not change in update
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

// Gets the current users information
exports.getUser = catchAsync(async (req, res, next) => {
  let query = User.findById(req.user.id);

  const doc = await query;

  if(!doc) {
      return next(new AppError('No document found with that ID', 404))
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc
    },
  });
});

// Allows users to change certain aspects of their account (Note: NOT including their password)
exports.updateMe = catchAsync(async (req, res, next) => {
    if (req.body.password || req.body.passwordConfirm) {
      next(
        new AppError(
          "This route is not for password updates. Please use /updatePassword",
          400
        )
      );
    }
  
    // filter out fields we don't want the user to be able to change
    const filteredBody = filterObj(req.body, "name", "email", "age", "breed", "about");
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

// Allows users to delete their account (Note: Does not delete account from DB, sets the active field to false instead)
exports.deleteMe = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });
  
    res.status(204).json({
      status: "success",
      data: null,
    });
  });