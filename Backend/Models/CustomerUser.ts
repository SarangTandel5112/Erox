import { Schema, model } from "mongoose";
import CustomerUserInterface from "../Interfaces/CustomerUserInterace";

const CustomerUserSchema = new Schema<CustomerUserInterface>({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    accessToken: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email_verified: {
        type: Boolean,
        required: true
    }

})

const CustomerUser = model("CustomerUser", CustomerUserSchema)
export default CustomerUser;