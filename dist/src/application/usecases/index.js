"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBMI = exports.UpdateBMI = exports.GetBMI = exports.CreateBMI = void 0;
var AddBMI_1 = require("./BMI/AddBMI");
Object.defineProperty(exports, "CreateBMI", { enumerable: true, get: function () { return __importDefault(AddBMI_1).default; } });
var GetBMI_1 = require("./BMI/GetBMI");
Object.defineProperty(exports, "GetBMI", { enumerable: true, get: function () { return __importDefault(GetBMI_1).default; } });
var UpdateBMI_1 = require("./BMI/UpdateBMI");
Object.defineProperty(exports, "UpdateBMI", { enumerable: true, get: function () { return __importDefault(UpdateBMI_1).default; } });
var DeleteBMI_1 = require("./BMI/DeleteBMI");
Object.defineProperty(exports, "DeleteBMI", { enumerable: true, get: function () { return __importDefault(DeleteBMI_1).default; } });
