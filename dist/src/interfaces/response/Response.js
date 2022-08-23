"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    sendResponseSuccess(data, status) {
        return {
            success: status,
            error: [],
            data: data
        };
    }
    sendResponseFailure(data, status) {
        return {
            success: status,
            error: data,
            data: []
        };
    }
}
exports.Response = Response;
