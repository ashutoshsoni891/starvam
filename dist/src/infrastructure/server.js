"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./router"));
// import * as https from 'https';
// import * as fs from 'fs';
// const certificate = fs.readFileSync(path.resolve(__dirname, `../certs/cert.cert`));
// const privateKey = fs.readFileSync(path.resolve(__dirname, `../certs/cert.key`));
// change environment after api-gateway implementation
// dotenv.config({
//   path: path.resolve(__dirname, `../env/${process.env.ENVIRONMENT}.env`)
// });
const routes_1 = require("./routes/routes");
// app.use(errorHandler());
(0, routes_1.RegisterRoutes)(router_1.default);
// const credentials = { key: privateKey, cert: certificate };
// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(app.get("port"), () => console.log(`Server started listening to port ${app.get("port")}`));
/**
 * Start Express server.
 */
const server = router_1.default.listen(router_1.default.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", router_1.default.get("port"), router_1.default.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
