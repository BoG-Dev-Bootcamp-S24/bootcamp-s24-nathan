import connectDB from "../index.js"
import mongoose from "mongoose"
import Ticket from "../models/Ticket.js"
import User from "../models/User.js"

export default async function readTicketsByUser(data) {
    try {
        await connectDB()
        const { userID } = data
        var mongoose = require('mongoose');

        const x = await User.findOne({_id: new mongoose.Types.ObjectId(userID)}).exec();
        console.log(x)
        if (x === null) {
            console.log('User not found.');
            return 0
        } 

        return await Ticket.find({ userID: userID}).exec();

    } catch (e) {
        console.log(e)
        return 2
    }
}