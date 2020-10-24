"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlSchema = void 0;
const mongoose = require("mongoose");
exports.UrlSchema = new mongoose.Schema({
    url: { type: String, required: true },
    slug: { type: String, required: true }
});
//# sourceMappingURL=urls.model.js.map