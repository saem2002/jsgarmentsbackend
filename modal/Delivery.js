import mongoose from 'mongoose';

const DeliverySchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    Name:
    {
        type:String,
        required:true
    },
    Address:
    {
        type:String,
        required:true
    },
    PinCode:
    {
        type:Number,
        required:true
    },
    Mobile:
    {
        type:Number,
        required:true
    },
    Exceptedstate:
    {
        type:String,
        
    },
    Exceptedcity:
    {
        type:String,
       
    },
    state:
    {
        type:String
    },
    city:
    {
        type:String,
    },
    isApproved:
    {
        type:Number,
        default:0
    }
 
},{timestamps:true})
DeliverySchema.methods.commitchanges=async function(check){
    try{
        
        this.isApproved = check;
        await this.save();
        return this;
  
    }catch(error){
        console.log(error);
    }
  
  }

const Delivery = mongoose.model('Delivery', DeliverySchema);

export default Delivery;