"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const IDBConnection_1 = require("../interfaces/database/IDBConnection");
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger/logger"));
class MongoConnection extends IDBConnection_1.IDBConnection {
    constructor() {
        var _a, _b;
        super();
        let mongo_url;
        if (process.env.MONGODB_URI) {
            mongo_url =
                process.env.MONGODB_URI +
                    "/" +
                    process.env.DB_NAME +
                    "?authSource=admin";
        }
        else if ((_a = process.env.ENVIRONMENT) === null || _a === void 0 ? void 0 : _a.toString().includes("dev")) {
            mongo_url = process.env.MONGODB_HOST + ":" + process.env.MONGODB_PORT + "/" + process.env.DB_NAME;
            mongo_url =
                "mongodb://" +
                    process.env.DB_USER +
                    ":" +
                    process.env.DB_PASS +
                    "@" +
                    process.env.MONGODB_HOST +
                    ":" +
                    process.env.MONGODB_PORT +
                    "/" +
                    process.env.DB_NAME +
                    "?authSource=admin";
        }
        else if ((_b = process.env.ENVIRONMENT) === null || _b === void 0 ? void 0 : _b.toString().includes("test")) {
            mongo_url = process.env.MONGODB_HOST + "/" + process.env.DB_NAME;
        }
        else {
            mongo_url =
                "mongodb://" +
                    process.env.DB_USER +
                    ":" +
                    process.env.DB_PASS +
                    "@" +
                    process.env.MONGODB_HOST +
                    ":" +
                    process.env.MONGODB_PORT +
                    "/" +
                    process.env.DB_NAME +
                    "?authSource=admin";
        }
        mongoose_1.default
            .connect(mongo_url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
            .then(() => {
            logger_1.default.debug("MongoDB connection successful at " +
                new Date() +
                " , url " +
                mongo_url);
        })
            .catch((err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running. " +
                err);
        });
        return;
    }
    addBMI(data) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getBMI(filter) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    updateBMI(data) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteBMI(id) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.MongoConnection = MongoConnection;
