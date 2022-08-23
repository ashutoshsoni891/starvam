"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateBMI {
    constructor(repo) {
        this.IBMIRepository = repo;
    }
    updateBMI(data) {
        return this.IBMIRepository.updateBMI(data);
    }
}
exports.default = UpdateBMI;
