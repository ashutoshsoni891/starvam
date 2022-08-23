"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBMI = void 0;
class UpdateBMI {
    constructor(bmi) {
        for (let index = 0; index < bmi.length; index++) {
            const element = bmi[index];
            if (element.uuid)
                throw new Error("uuid  is missing");
        }
        this.BMI = bmi.BMI;
    }
}
exports.UpdateBMI = UpdateBMI;
