import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    lineColor: {
        type: String,
        required: true,
    },
    station : {
        type : String,
        required : true,
    },
    userID : {
        ref : "User",
        required : true,
    }
})

export default mongoose.models?.Ticket || mongoose.model("Ticket", ticketSchema)