import * as mongoose from 'mongoose';
import {DocumentSchema} from "./DocumentSchema";

export const GroupDocumentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    objectId: Number,
    documents: [DocumentSchema]
});
