// To create a new schema
const mongoose = require('mongoose');

// To hash the passwords
const crypto = require('crypto');

// To generate unique ID
const uuidv1 = require('uuid/v1');

// User schema
const userSchema = new mongoose.Schema({
       name: {
           type: String,
           trim: true,
           required: true,
           maxLength: 32
       },
       email: {
           type: String,
           trim: true,
           required: true,
           unique: 32
       },
       hashed_password: {
           type: String,
           required: true,
       },
       about: {
           type: String,
           trim: true
       },
       salt: String,
       role: {
           type: Number,
           default: 0,
       },
       history: {
           type: Array,
           default: []
       }
    },
    {timestamps: true}
);

// Virual fields
userSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });


// Adding encryptPassword method to userSchema
userSchema.methods = {
    encryptPassword: function (password) {
        if (!password) return '';

        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};

// Create and export new 'User' model based on 'userSchema'
module.exports = mongoose.model('User', userSchema);