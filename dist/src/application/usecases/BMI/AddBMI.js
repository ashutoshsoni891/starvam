"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateBMI {
    constructor(repo) {
        this.IBMIRepository = repo;
    }
    addBMI(data) {
        return this.IBMIRepository.addBMI(data);
    }
}
exports.default = CreateBMI;
