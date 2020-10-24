import * as mongoose from 'mongoose';
export declare const UrlSchema: mongoose.Schema<any>;
export interface Url extends mongoose.Document {
    id: String;
    url: String;
    slug: String;
}
