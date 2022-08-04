module.exports = fn => {
    return (req, res, next) => {
       fn(req, res, next).catch(err => next(err));
    }
}

//removes the need to have a try catch block in all our controller functions
