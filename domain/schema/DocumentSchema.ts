import * as mongoose from 'mongoose';

export const DocumentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    url: String,
    headline: String,
    content: [String],
    type: String
});
