import mongoose from "mongoose";


const table = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, "review text is required!!"],
        minLength: [2, "too short text for a review"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'products'
    },
    rate: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }
}, { timestamps: true });


export const reviewModel = mongoose.model('reviews', table);