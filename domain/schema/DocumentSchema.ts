import * as mongoose from 'mongoose';

export const DocumentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});
