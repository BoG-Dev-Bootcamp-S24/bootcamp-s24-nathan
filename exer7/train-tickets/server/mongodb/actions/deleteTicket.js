import mongoose from "mongoose";
import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function deleteTicket(data) {
    try {
        await connectDB()
        const { ObjectID } = data
        console.log(ObjectID)
        const x = await Ticket.findByIdAndDelete(ObjectID);
        if (!x) {
            console.log('Document not found.');
            return 0
        } else {
            console.log('Deleted Document:', x);
            return 1
        }

    } catch (e) {
        console.log(e)
        return 2;
    }
}
