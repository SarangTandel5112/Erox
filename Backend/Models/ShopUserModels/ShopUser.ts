import { Schema, model } from "mongoose";
import ShopUserInterface from "../../Interfaces/ShopUserInterfaces/ShopUserInterface";



const shopUserSchema = new Schema<ShopUserInterface>({
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
        unique: true

    },
    userName: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true

    },
    phoneNumber: {
        type: Number,
        required: true

    },
    bankAccountId: {
        type: Schema.Types.ObjectId,
        ref: "BankAccount"
    },
    shopAddress: {
        type: Schema.Types.ObjectId,
        ref: "ShopAdress",
        required: true
    },
    shopId: {
        type: Schema.Types.ObjectId,
        ref: "Shop"
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    accessToken: {
        type: String
    },
}, { timestamps: true });

const ShopUser = model<ShopUserInterface>("ShopUser", shopUserSchema);

export default ShopUser;