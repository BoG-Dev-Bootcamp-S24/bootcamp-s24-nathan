import mongoose from "mongoose";
import connectDB from ".."
import User from "../models/User.js"

export default async function createUser(data) {
    try {
        await connectDB();
        const user = new User(data);
        await user.save();
        return true;
    
    } catch (e) {
        console.log(e)
        return false
    }
}