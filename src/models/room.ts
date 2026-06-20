import mongooose from 'mongoose'
 const Schema = mongooose.Schema
 const room = new Schema({
     roomid:{
         type:String,
         trim:true ,
          unique:true,
          require:true 

     },
     activeUser:{
        type:[]
     },
     roomName:{
type:String,
 trim:true

     },
      ownerid:{
         type:String 
      }
 })
