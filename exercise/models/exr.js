import mongoose from "mongoose";
const exschema = new mongoose.Schema({
  name: {type:String , required: true, default: "empty"},
  salary: {type:Number, required: true, default: 0},
  language: {type:String, required: true, default: "empty"},
  city: {type:String, required: true, default: "empty"},
  ismanager: {type:Boolean, required: true, default: false}
});

export const ex = mongoose.model("ex", exschema);                         