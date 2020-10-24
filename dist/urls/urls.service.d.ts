import { Model } from 'mongoose';
import { Url } from './urls.model';
export declare class UrlsService {
    private urlModel;
    constructor(urlModel: Model<Url>);
    createUrl(url: String, slug: String): Promise<{
        err: boolean;
        data?: undefined;
    } | {
        data: string;
        err: boolean;
    }>;
    verifySlug(slug: String): Promise<Array<Url>>;
    getUrl(slug: String): Promise<Array<Url>>;
}
