export interface IAddBMIArray{
    BMI : IAddBMI[]
}

export interface IUpdateBMI{
    BMI : IUpdateBMIDomain[]
   
}

export interface IAddBMI{

    gender : string
    height :number
    weight : number
    
}

export interface IUpdateBMIDomain{
    uuid : string
    category? : string
    health_risk? : string
    bmi_index? : any
    height? : any
    weight? : any
}