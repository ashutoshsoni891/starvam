"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBMI = void 0;
class AddBMI {
    constructor(bmi) {
        for (let index = 0; index < bmi.length; index++) {
            const element = bmi[index];
            if (element.height)
                throw new Error("user_id  is missing");
            if (element.weight)
                throw new Error("weight  is missing");
            if (element.gender)
                throw new Error("gender  is missing");
        }
        this.BMI = bmi.BMI;
    }
}
exports.AddBMI = AddBMI;
