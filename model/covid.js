const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema(
    {
        patientname:{type:String},
        address:{type:String},
        doctor:{type:String},
        doctor:{type:String},
        phoneno:{type:Number},
        emailid:{type:String},
        patientcode:{type:Number}
    });
    var patientModel=mongoose.model('patients',patientSchema);
    module.exports={patientModel}
