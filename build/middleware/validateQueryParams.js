"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = void 0;
function validateQuery(req, _res, next) {
    const { query } = req;
    const requiredParams = ["filename", "width", "height"];
    for (let i = 0; i < requiredParams.length; i++) {
        if (query[requiredParams[i]] === undefined) {
            req.body = "Error, Input file missing";
        }
    }
    next();
}
exports.validateQuery = validateQuery;
exports.default = validateQuery;
