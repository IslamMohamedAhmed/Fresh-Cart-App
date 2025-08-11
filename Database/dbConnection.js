import mongoose from 'mongoose';
export function connectDb() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/FreshCartApp');
        console.log('connection is successful!');
    }
    catch (err) {
        console.log(err);
    }
}