import mongoose from "mongoose";


const table = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "name of user is required!!"],
    },
    email: {
        type: String,
        trim: true,
        required: [true, "name of user is required!!"],
        unique: [true, "this email is used before!!"],
    },
    password: {
        required: true,
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }

}, { timestamps: true });


export const userModel = mongoose.model('users', table);
