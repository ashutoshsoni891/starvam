import { v4 as uuidv4 } from 'uuid';
const { ObjectId } = require('mongodb');
import mongoose from 'mongoose';
import { IBMIModel } from './BMI.types';

export async function addBMI(
    this: IBMIModel,
    data: any
  ): Promise<any> {
    console.log(data.BMI)
    
    for(let i = 0; i<data.BMI.length; i++){
      let element = data.BMI[i]
      element['uuid'] = uuidv4()
      element['bmi_index'] = element['weight'] / element['height']

      if(element['bmi_index'] <= 18.4 ){
          element['category'] = 'Underweight'
          element['health_risk'] = 'Malnutrition risk'
      }
      
    if(element['bmi_index'] > 25 && element['bmi_index'] <= 29.9 ){
        element['category'] = 'Normal weight'
        element['health_risk'] = 'Low risk'
    }
    if(element['bmi_index'] > 30 && element['bmi_index'] <= 34.9 ){
        element['category'] = 'Overweight'
        element['health_risk'] = 'Enhanced risk'
    }
    if(element['bmi_index'] > 30 && element['bmi_index'] <= 34.9 ){
        element['category'] = 'Moderately obese'
        element['health_risk'] = 'Medium risk'
    }
    if(element['bmi_index'] > 35 && element['bmi_index'] <= 39.9 ){
        element['category'] = 'Severel obese'
        element['health_risk'] = 'High,'
    }
    if(element['bmi_index'] > 40){
        element['category'] = 'Very severely obese'
        element['health_risk'] = 'Very high risk'
    }
    }
    let result = await this.create(data.BMI)
    console.log(result)
    return result
  }


  export async function updateBMI(
    this: IBMIModel,
    data:any
  ): Promise<any> {
    let record:any=[]
    for (let bmi of data.BMI){
        let _id=bmi["_id"]
        delete bmi["_id"]
        console.log(_id,bmi)
    
        record.push(await this.updateOne({ _id: _id }, {
        $set: bmi
        }))
    }
    
    return record;
  }

  export async function getBMI(
    this: IBMIModel,
    filter: any,
    pagination: any
  ): Promise<any> {
    
    let page_size = 0
    let skip = 0
    if (pagination) {
      page_size = pagination.page_size;
      skip = pagination.page * page_size;
    }
    let query:any ={}
    if(filter.user){
      query["uuid"]=filter.uuid
    }
    
   
    
    if(filter.weight){
        query["weight"]=filter.weight
    
      }
    if(filter.height){
      query["height"]=filter.height
  
    }
    if(filter.bmi_index){
      query["bmi_index"]=filter.bmi_index
  
    }
    if(filter.health_risk){
        query["health_risk"]=filter.health_risk
    
      }
      if(filter.category){
        query["category"]=filter.category
    
      }
        
    
  
  
    let noOfRecord = await this.find(query).countDocuments()
  
    const data = await this.find(query)
      .lean()
      .skip(skip)
      .limit(page_size)


    return {data ,noOfRecord}
}

export async function deleteBMI(
    this: IBMIModel,
    uuid: string
  ): Promise<any> {
    await this.deleteOne({ uuid: uuid });
    return true
  }