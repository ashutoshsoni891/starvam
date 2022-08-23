"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMIModel = void 0;
const mongoose_1 = require("mongoose");
const BMI_schema_1 = __importDefault(require("./BMI.schema"));
exports.BMIModel = (0, mongoose_1.model)("BMI", BMI_schema_1.default, 'BMI');
