const AppError = require("../utils/appError");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
  
    // if (process.env.NODE_ENV === "development") {
    //   sendErrorDev(err, req, res, next);
    // } else if (process.env.NODE_ENV.trim() === "production") {
    //   let error = { ...err };
    //   error.message = err.message
  
    //   if (err.name === "CastError") error = handleCastErrorDB(err);
    //   if (err.code === 11000) error = handleDuplicateFieldsDB(err);
    //   if (err.name === 'ValidationError') error = handleValidationErrorDB(err);
    //   if (err.name === 'JsonWebTokenError') error = handleJWTError(err);
    //   if (err.name === 'TokenExpiredError') error = handleJWTExpiredError(err);
    //   sendErrorProd(error, req, res);
    // }
  };