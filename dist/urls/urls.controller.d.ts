import { UrlsService } from './urls.service';
export declare class UrlsController {
    private UrlsService;
    constructor(UrlsService: UrlsService);
    createUrl(url: String, slug: String): Promise<Object>;
    redirectToUrl(params: any): Promise<{
        url: String;
    }>;
}
