import { Types, Document } from "mongoose";
interface ShopUserInterface extends Document {
    firstName: String,
    lastName: String,
    shopId: Types.ObjectId,
    shopAddress: Types.ObjectId,
    password: String,
    emailId: String,
    email_verified: Boolean,
    userName: String,
    accessToken: String,
    bankAccountId: Types.ObjectId,
    phoneNumber: Number
}
export default ShopUserInterface;