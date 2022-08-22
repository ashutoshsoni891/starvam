export interface IAddBMIArrayReq{
    BMI : IAddBMIReq[]
}
export interface IGetBMIRequest{
    filter : GetBMI
    pagination : Ipagination
}
export interface IUpdateBMIRequest{
    BMI : IUpdateBMI[]
   
}

export interface IAddBMIReq{

    gender : string
    height :number
    weight : number
    
}
export interface Ipagination {
    page: number,
    page_size: number
}
export interface GetBMI{

    category? : string
    health_risk? : string
    uuid? : string
    bmi_index? : any
    height? : any
    weight? : any
}

export interface IUpdateBMI{
    category? : string
    health_risk? : string
    uuid? : string
    bmi_index? : any
    height? : any
    weight? : any
}