"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteBMI {
    constructor(repo) {
        this.IBMIRepository = repo;
    }
    deleteBMI(uuid) {
        return this.IBMIRepository.deleteBMI(uuid);
    }
}
exports.default = DeleteBMI;
