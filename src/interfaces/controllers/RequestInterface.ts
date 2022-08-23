export interface IAddBMIArrayReq{
    BMI : IAddBMIReq[]
}
export interface IGetBMIRequest{
    filter : GetBMI
    pagination : Ipagination
}
export interface IUpdateBMIRequest{
    BMI : IUpdateBMIReq[]
   
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

    uuid? : string
    category? : string
    health_risk? : string
    bmi_index? : any
    height? : any
    weight? : any
}

export interface IUpdateBMIReq{
    uuid : string
    category? : string
    health_risk? : string
    bmi_index? : any
    height? : any
    weight? : any
}