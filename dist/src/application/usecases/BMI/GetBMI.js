"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetBMI {
    constructor(repo) {
        this.IBMIRepository = repo;
    }
    getBMI(filter) {
        return this.IBMIRepository.getBMI(filter);
    }
}
exports.default = GetBMI;
