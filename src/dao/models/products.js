
import mongoose from "mongoose";

const productsCollection='products'

const productsSchema= mongoose.Schema({
    id:{
        type:Number,
        required:true}
    ,
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    code:{
        type:String,
        required: true
    },
    price:{type:Number,required:true},
    status:{type:Boolean,default:true},
    stock:{type:Number,required:true},
    category:{
        type:String,
        required:true
    },
    thumbnail:{type:String}
})

export const productsModel=mongoose.model(productsCollection,productsSchema)