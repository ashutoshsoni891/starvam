import { IDBConnection } from "../interfaces/database/IDBConnection";
import mongoose from "mongoose";
import logger from "./logger/logger";

export class MongoConnection extends IDBConnection {
  
  
    constructor() {
      super();
      let mongo_url: string;
  
      if (process.env.MONGODB_URI) {
        mongo_url =
          process.env.MONGODB_URI +
          "/" +
          process.env.DB_NAME +
          "?authSource=admin";
      } else if (process.env.ENVIRONMENT?.toString().includes("dev")) {
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
  
      } else if (process.env.ENVIRONMENT?.toString().includes("test")) {
        mongo_url = process.env.MONGODB_HOST + "/" + process.env.DB_NAME;
      } else {
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
  
      mongoose
        .connect(mongo_url, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          logger.debug(
            "MongoDB connection successful at " +
            new Date() +
            " , url " +
            mongo_url
          );
        })
        .catch((err: string) => {
          console.log(
            "MongoDB connection error. Please make sure MongoDB is running. " +
            err
          );
        });
  
      return;
  
    }

    async addBMI(data: any) {
      
    }
    async getBMI(filter: any) {
      
    }
    async updateBMI(data: any) {
      
    }
    async deleteBMI(id: any) {
      
    }
  }