import {Schema } from "mongoose";

const BMISchema = new Schema({
    uuid :{
        type : String,
        unique : true,
        required : true
    },
    gender :{
        type : String,
        required : true
    },
    height :{
        type : Number,
        required : true
    },
    weight :{
        type : Number,
        required : true
    },
    bmi :{
        type : Number,
        required : true
    },
    category :{
        type : String,
        required : true
    },
    health_risk :{
        type : String,
        required : true
    },

})

export default BMISchema;
