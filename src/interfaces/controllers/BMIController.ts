import {
    Body, Controller, Get, Post, Query, Request, Route, Security
  } from "tsoa";
import { BMIRepository } from "../database/BMIRepository";
import { Response } from "../response/Response";

import { mongoConnection } from "./index";
import {CreateBMI , GetBMI , DeleteBMI , UpdateBMI} from "../../application/usecases/index";

import {IAddBMIArrayReq,IGetBMIRequest ,IUpdateBMIRequest }  from './RequestInterface'

@Route('BMI')
export class CategoryController extends Controller{

    private BMIResource: string = "BMI";
    public bmiRepository : BMIRepository 
    constructor() {
        super();
        this.bmiRepository = new BMIRepository(mongoConnection);
    
      }

    @Security("jwt")
    @Post("addBMI")
    async addBMI(@Body() data: IAddBMIArrayReq, @Request() request: any){
      
        try {
            
            let UseCase = new CreateBMI(this.bmiRepository)
            let result = await UseCase.addBMI(data )
                                                                          
            return new Response().sendResponseSuccess(result, true);
        } catch (Error : any) {
            this.setStatus(500);
            return new Response().sendResponseFailure(Error.message, false);
        }
    }

    @Security("jwt")
    @Post("getBMI")
    async getBMI(@Body() filter: IGetBMIRequest, @Request() request: any){
      
        try {
            

            let UseCase = new GetBMI(this.bmiRepository)
            let result = await UseCase.getBMI(filter )
                                                                          
            return new Response().sendResponseSuccess(result, true);
        } catch (Error : any) {
            this.setStatus(500);
            return new Response().sendResponseFailure(Error.message, false);
        }
    }

    @Security("jwt")
    @Post("updateBMI")
    async updateBMI(@Body() data:IUpdateBMIRequest , @Request() request: any){
      
        try {
            

            let UseCase = new UpdateBMI(this.bmiRepository)
            let result = await UseCase.updateBMI(data )
                                                                          
            return new Response().sendResponseSuccess(result, true);
        } catch (Error : any) {
            this.setStatus(500);
            return new Response().sendResponseFailure(Error.message, false);
        }
    }
    
    @Security("jwt")
    @Post("deleteBMI")
    async deleteBMI(@Query() id : any , @Request() request: any){
      
        try {
            

            let UseCase = new DeleteBMI(this.bmiRepository)
            let result = await UseCase.deleteBMI(id )
                                                                          
            return new Response().sendResponseSuccess(result, true);
        } catch (Error : any) {
            this.setStatus(500);
        return new Response().sendResponseFailure(Error.message, false);
        }
    }
}