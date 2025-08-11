import mongoose from "mongoose";


const table = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "this name was used before"],
        trim: true,
        required: [true, "name of brand is required!!"],
        minLength: [2, "too short name for a brand"]
    },
    slug: {
        lowercase: true,
        type: String,
        required: true
    },
    logo: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }
}, { timestamps: true });


export const brandModel = mongoose.model('brands', table);