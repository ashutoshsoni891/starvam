import { Document, Model } from "mongoose";

export interface IBMIDocument extends Document {

}

export interface IBMIModel extends Model<IBMIDocument> {
    addBMI: (this: IBMIModel, data: any) => Promise<any>;
    getBMI: (this: IBMIModel, filter: any) => Promise<any>;
    updateBMI: (this: IBMIModel, data: any) => Promise<any>;
    deleteBMI: (this: IBMIModel, id: any) => Promise<any>;

}