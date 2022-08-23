import express, { Response as ExResponse, Request as ExRequest,NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
const cors = require('cors');
import logger from './logger/logger';
import * as client from 'prom-client';
import helmet from "helmet";
dotenv.config({
  path: path.resolve(__dirname, `../env/${process.env.ENVIRONMENT}.env`)
});
import { ValidateError } from "tsoa";
import { RegisterRoutes } from './routes/routes';


// Create Express server
const router = express();
router.disable("x-powered-by");
router.set('etag', false)
// Express configuration
router.set("port", process.env.PORT || 3001);
router.set("env", process.env.ENVIRONMENT || "dev");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(helmet());
router.use(cors());

// Create a Registry which registers the metrics
const register = new client.Registry()

// Add a default label which is added to all metrics
// register.setDefaultLabels({
//   app: 'auth-service'
// })

// Enable the collection of default metrics
client.collectDefaultMetrics({ register })

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

router.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../../api/dist/swagger.json"))
  );
});
RegisterRoutes(router);

router.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});

router.use(async function (req, res: any, next) {
  const oldWrite = res.write;
  const oldEnd = res.end;

  const chunks: Uint8Array[] | Buffer[] = [];

  res.write = (...restArgs: any) => {
    chunks.push(Buffer.from(restArgs[0]));
    oldWrite.apply(res, restArgs);
  };
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader('Cache-control', `no-store, must-revalidate`)
  res.setHeader('Pragma', `no-cache`)
  res.setHeader('Expires', Date.now())
  res.end = (...restArgs: any) => {
    if (restArgs[0]) {
      chunks.push(Buffer.from(restArgs[0]));
    }
    const body = Buffer.concat(chunks).toString('utf8');

    oldEnd.apply(res, restArgs);
  };

  next();
});


router.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const status = err.status || 500;
  const body: any = {
    fields: err.fields || undefined,
    message: err.message || 'An error occurred during the request.',
    name: err.name,
    status,
  };
  res.status(status).json(body);
});
export default router;
