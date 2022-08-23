"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors = require('cors');
const client = __importStar(require("prom-client"));
const helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, `../env/${process.env.ENVIRONMENT}.env`)
});
const routes_1 = require("./routes/routes");
// Create Express server
const router = (0, express_1.default)();
router.disable("x-powered-by");
router.set('etag', false);
// Express configuration
router.set("port", process.env.PORT || 3001);
router.set("env", process.env.ENVIRONMENT || "dev");
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.use((0, helmet_1.default)());
router.use(cors());
// Create a Registry which registers the metrics
const register = new client.Registry();
// Add a default label which is added to all metrics
// register.setDefaultLabels({
//   app: 'auth-service'
// })
// Enable the collection of default metrics
client.collectDefaultMetrics({ register });
// router.get("/", function (req, res, next) {
//   logger.debug("route, new request path " + req.path);
//   return res.status(200).json({ status: "auth server is Working!" });
// });
// router.get("/healthz", function (req, res, next) {
//   logger.debug("route, new request path " + req.path);
//   return res.status(200).json({ status: "auth server is health is good Working!" });
// });
// router.get("/livez", function (req, res, next) {
//   logger.debug("route, new request path " + req.path);
//   return res.status(200).json({ status: "auth server livez!" });
// });
// router.get("/readyz", function (req, res, next) {
//   logger.debug("route, new request path " + req.path);
//   return res.status(200).json({ status: "auth server readyz!" });
// });
router.use("/docs", swagger_ui_express_1.default.serve, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send(swagger_ui_express_1.default.generateHTML(yield Promise.resolve().then(() => __importStar(require("../../api/dist/swagger.json")))));
}));
(0, routes_1.RegisterRoutes)(router);
router.use(function notFoundHandler(_req, res) {
    res.status(404).send({
        message: "Not Found",
    });
});
router.use(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const oldWrite = res.write;
        const oldEnd = res.end;
        const chunks = [];
        res.write = (...restArgs) => {
            chunks.push(Buffer.from(restArgs[0]));
            oldWrite.apply(res, restArgs);
        };
        res.setHeader("X-XSS-Protection", "1; mode=block");
        res.setHeader('Cache-control', `no-store, must-revalidate`);
        res.setHeader('Pragma', `no-cache`);
        res.setHeader('Expires', Date.now());
        res.end = (...restArgs) => {
            if (restArgs[0]) {
                chunks.push(Buffer.from(restArgs[0]));
            }
            const body = Buffer.concat(chunks).toString('utf8');
            oldEnd.apply(res, restArgs);
        };
        next();
    });
});
router.use((err, req, res, next) => {
    const status = err.status || 500;
    const body = {
        fields: err.fields || undefined,
        message: err.message || 'An error occurred during the request.',
        name: err.name,
        status,
    };
    res.status(status).json(body);
});
exports.default = router;
