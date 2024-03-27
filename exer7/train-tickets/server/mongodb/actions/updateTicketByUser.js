import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import User from "../models/User.js"

export default async function updateTicketByUser(data) {
    try {
        await connectDB()
        const { ticketID, userID } = data
        var mongoose = require('mongoose');

        const x = await Ticket.findOne({_id: new mongoose.Types.ObjectId(ticketID)}).exec();
        if (x === null) {
            console.log('Ticket not found.');
            return 0
        } 

        const y = await User.findOne({_id: new mongoose.Types.ObjectId(userID)}).exec();
        if (y === null) {
            console.log('User not found.');
            return 1
        } 

        await Ticket.findByIdAndUpdate(ticketID, { userID: userID })
        return 3

        return true
    } catch (e) {
        console.log(e)
        return 2
    }
}