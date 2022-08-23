"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnection = void 0;
const MongoConnection_1 = require("../../infrastructure/MongoConnection");
const mongoConnection = new MongoConnection_1.MongoConnection();
exports.mongoConnection = mongoConnection;
