import mongoose from "mongoose";
import connectDB from ".."
import Ticket from "../models/Ticket.js"
import User from "../models/User.js";

export default async function createTicket(data) {
    try {
        await connectDB();
        let {lineColor, station, userID} = data;
        var mongoose = require('mongoose');
        
        const exists = await User.findById(userID);
        if (exists === null) {
            return false
        } 

        
        userID = new mongoose.Types.ObjectId(userID);
        const modifiedData = {lineColor, station, userID}

        const ticket = new Ticket(modifiedData);
        await ticket.save()
        return true
    
    } catch (e) {
        console.log(e)
        return false
    }
}