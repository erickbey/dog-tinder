const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name is required'],
        trim: true,
        maxLength: [40, 'A users name can have up to only 40 characters'],
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    breed: {
        type: String,
        reqiured: true,
        trim: true,
        maxLength: [40, "dog breed can only be 40 characters"]
    },
    about: {
        type: String,
        maxLength: [500, "Your bio is too long. Try making it a little shorter"]
    },
    email: {
        type: String,
        required: [true, 'An email is required'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']        
    },
    photos: {
        type: [String]
    },
    likes: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'User'
             }
         ]
    },
    dislikes: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'User'
             }
         ]
    },
    password: {
        type: String,
        required: true, 
        minlength: 8, 
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            // This only works on CREATE and SAVE
            validator: function(el) {
                return el === this.password
            },
            message: 'Passwords do not match'
        }
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

// Saves the password as a hashed string in out DB
userSchema.pre('save', async function(next) {
    // Only runs if the password is modified
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    // Deletes the passwordConfirm field
    this.passwordConfirm = undefined;
    next();
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
});

userSchema.pre(/^find/, function(next) {
    this.find({ active: { $ne: false } });
    next();
});


// Compares the incoming password with the saved password
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if(this.passwordChangedAt) {
        const changedTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

        return JWTTimestamp < changedTimeStamp;
    };

    return false;
};


const User = mongoose.model('User', userSchema);

module.exports = User;