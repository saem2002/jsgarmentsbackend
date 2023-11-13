
import Delivery from "../modal/Delivery.js";

export const addDelivery = async (request, response) => {
    try {
        const newUser = new Delivery(request.body);
        await newUser.save();
        response.status(200).json(newUser);
    } catch (error) {
        response.status(500).json(error);
    }
 
}

export const checkifexist = async (request, response) => {
    try {
        const data = request.params.googleId;
        const items = await Delivery.find({ googleId: data });
        if(items.length==0)return response.status(201).json(items);
        else return response.status(200).json(items);
    } catch (error) {
        response.status(500).json(error);
    }
 
}
export const getAllDeliveryPersons = async (request, response) => {
    try {
        
        const items = await Delivery.find({});
        return response.status(200).json(items);
    } catch (error) {
        response.status(500).json(error);
    }
 
}
export const ApproveDeliveryPerson = async (request, response) => {
    try {
        const data = request.params.googleId;
        const check = request.params.check;
        const items = await Delivery.findOne({ googleId: data });
        if (items) {
            await items.commitchanges(check);
            await items.save();
            response.status(200).json("updated");
        }
    } catch (error) {
        response.status(500).json(error);
    }
 
}




