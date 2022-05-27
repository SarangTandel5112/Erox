import { Document } from "mongoose";

interface CustomerUserInterface extends Document {
    firstName: String,
    lastName: String,
    userName:String,
    password: String,
    emailId: String,
    accessToken?: String,
    phoneNumber: Number,
    email_verified: Boolean
}

export default CustomerUserInterface;