import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import User from "../models/Ticket.js"

export default async function readTicketsByUser(data) {
    try {
        await connectDB()
        const { userID } = data
        return await Ticket.find({ userID: userID}).exec();

    } catch (e) {
        console.log(e)
        throw new Error("Unable to read tickets by user. Invalid data or database issue.")
    }
}