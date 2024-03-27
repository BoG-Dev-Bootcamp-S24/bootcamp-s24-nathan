import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import User from "../models/Ticket.js"

export default async function readTicketsByUser(data) {
    try {
        await connectDB()
        const { userID } = data

        var mongoose = require('mongoose');
        const x = await User.findOne({userID: userID}).exec();

        if (x === null) {
            console.log('Document not found.');
            return 0
        } else {
            return await Ticket.find({ userID: userID}).exec();
        }

        

    } catch (e) {
        return 2
    }
}