import * as mongoose from 'mongoose';

export const UrlSchema = new mongoose.Schema({
    url: {type: String, required: true},
    slug: {type: String, required: true}
})

export interface Url extends mongoose.Document{
    id: String;
    url: String;
    slug: String;
}