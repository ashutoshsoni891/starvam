"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const tsoa_1 = require("tsoa");
const BMIRepository_1 = require("../database/BMIRepository");
const Response_1 = require("../response/Response");
const index_1 = require("./index");
const index_2 = require("../../application/usecases/index");
let CategoryController = class CategoryController extends tsoa_1.Controller {
    constructor() {
        super();
        this.BMIResource = "BMI";
        this.bmiRepository = new BMIRepository_1.BMIRepository(index_1.mongoConnection);
    }
    // @Security("jwt")
    addBMI(data, request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let UseCase = new index_2.CreateBMI(this.bmiRepository);
                let result = yield UseCase.addBMI(data);
                return new Response_1.Response().sendResponseSuccess(result, true);
            }
            catch (Error) {
                this.setStatus(500);
                return new Response_1.Response().sendResponseFailure(Error.message, false);
            }
        });
    }
    // @Security("jwt")
    getBMI(filter, request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let UseCase = new index_2.GetBMI(this.bmiRepository);
                let result = yield UseCase.getBMI(filter);
                return new Response_1.Response().sendResponseSuccess(result, true);
            }
            catch (Error) {
                this.setStatus(500);
                return new Response_1.Response().sendResponseFailure(Error.message, false);
            }
        });
    }
    // @Security("jwt")
    updateBMI(data, request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let UseCase = new index_2.UpdateBMI(this.bmiRepository);
                let result = yield UseCase.updateBMI(data);
                return new Response_1.Response().sendResponseSuccess(result, true);
            }
            catch (Error) {
                this.setStatus(500);
                return new Response_1.Response().sendResponseFailure(Error.message, false);
            }
        });
    }
    // @Security("jwt")
    deleteBMI(uuid, request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let UseCase = new index_2.DeleteBMI(this.bmiRepository);
                let result = yield UseCase.deleteBMI(uuid);
                return new Response_1.Response().sendResponseSuccess(result, true);
            }
            catch (Error) {
                this.setStatus(500);
                return new Response_1.Response().sendResponseFailure(Error.message, false);
            }
        });
    }
};
__decorate([
    (0, tsoa_1.Post)("addBMI"),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Request)())
], CategoryController.prototype, "addBMI", null);
__decorate([
    (0, tsoa_1.Post)("getBMI"),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Request)())
], CategoryController.prototype, "getBMI", null);
__decorate([
    (0, tsoa_1.Post)("updateBMI"),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Request)())
], CategoryController.prototype, "updateBMI", null);
__decorate([
    (0, tsoa_1.Post)("deleteBMI"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Request)())
], CategoryController.prototype, "deleteBMI", null);
CategoryController = __decorate([
    (0, tsoa_1.Route)('BMI')
], CategoryController);
exports.CategoryController = CategoryController;
