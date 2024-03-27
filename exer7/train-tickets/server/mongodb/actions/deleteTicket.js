import mongoose from "mongoose";
import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function deleteTicket(data) {
    try {
        await connectDB()
        const { ObjectID } = data
        await Ticket.findByIdAndDelete(ObjectID)
    } catch (e) {
        console.log(e)
        throw new Error("Unable to delete ticket. Invalid data or database issue.")
    }
}