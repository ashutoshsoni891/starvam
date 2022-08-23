"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BMISchema = new mongoose_1.Schema({
    uuid: {
        type: String,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    bmi_index: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    health_risk: {
        type: String,
        required: true
    },
});
exports.default = BMISchema;
