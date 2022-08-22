import { IUpdateBMI ,IUpdateBMIDomain } from "./IBMI";


export class UpdateBMI implements IUpdateBMI{

    BMI : IUpdateBMIDomain[]

    constructor(bmi : any){
        for (let index = 0; index < bmi.length; index++) {
            const element = bmi[index];
            if(element.uuid) throw new Error("uuid  is missing");
          
        }

        this.BMI = bmi.BMI
    }
}