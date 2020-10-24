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
exports.UrlsController = void 0;
const urls_service_1 = require("./urls.service");
const common_1 = require("@nestjs/common");
let UrlsController = class UrlsController {
    constructor(UrlsService) {
        this.UrlsService = UrlsService;
    }
    async createUrl(url, slug) {
        let result;
        const res = await this.UrlsService.createUrl(url, slug);
        if (res.err) {
            console.log(res);
            result = { code: 1, text: 'Already in use, pick another slug' };
            return result;
        }
        else {
            result = { code: 2, text: 'Url created', url: res.data };
            return result;
        }
    }
    async redirectToUrl(params) {
        const result = await this.UrlsService.getUrl(params.slug);
        return { url: result[0].url };
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('url')),
    __param(1, common_1.Body('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String]),
    __metadata("design:returntype", Promise)
], UrlsController.prototype, "createUrl", null);
__decorate([
    common_1.Get(':slug'),
    common_1.Redirect(),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UrlsController.prototype, "redirectToUrl", null);
UrlsController = __decorate([
    common_1.Controller('urls'),
    __metadata("design:paramtypes", [urls_service_1.UrlsService])
], UrlsController);
exports.UrlsController = UrlsController;
//# sourceMappingURL=urls.controller.js.map