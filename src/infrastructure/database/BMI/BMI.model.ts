import { IBMIModel , IBMIDocument } from "./BMI.types";
import { model } from "mongoose";
import BMISchema from "./BMI.schema";

export const BMIModel = model<IBMIDocument>("BMI", BMISchema,'BMI') as IBMIModel;