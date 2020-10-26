"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UrlsService = class UrlsService {
    constructor(urlModel) {
        this.urlModel = urlModel;
    }
    async createUrl(url, slug) {
        const newUrl = new this.urlModel({ url, slug });
        const doesExist = await this.verifySlug(slug);
        if (doesExist.length > 0) {
            return { err: true };
        }
        else {
            const result = await newUrl.save();
            return {
                data: `https://minimize-bdev.herokuapp.com/urls/${slug}`,
                err: false,
            };
        }
    }
    async verifySlug(slug) {
        const result = await this.urlModel.find({ slug: slug });
        return result;
    }
    async getUrl(slug) {
        const result = await this.verifySlug(slug);
        return result;
    }
};
UrlsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Url')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UrlsService);
exports.UrlsService = UrlsService;
//# sourceMappingURL=urls.service.js.map