import Mailing from "../models/mailling";
import { RequestHandler } from "express";
import sendEmail from "../utils/sendEmail";

export const signUp: RequestHandler = async (req , res , next)=>{
    const {email} = req.body;
    try {
        if(!email){
            return res.status(400).json({message: "Email is required" })
        }
        const existingEmail = await Mailing.find({email})
        if(existingEmail.length > 0){
            return res.status(400).json({message: "Email already exists"})
        }
        const newEmail = await Mailing.create({email})
        await sendEmail({
            to: email,
            subject: "Welcome to Furniture App",
            text: "Thank you for signing up!",
            html: "<h1>Welcome to Furniture App</h1></br><p>Thank you for signing up!</p> </br><p> We are excited to have you on board.</p>"
        })
        return res.status(201).json({message: "Email added successfully"})
    } catch (error) {
        next(error)
    }
}
export const getData: RequestHandler= async(req ,res,next)=>{
    try {
        const getUser= await Mailing.find()
        res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}