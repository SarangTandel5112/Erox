import { Document, Types } from "mongoose";

interface ShopInterface extends Document {
    shopName: String,
    GSTno: String,
    shopUserId: Types.ObjectId,
    shopAddress: Types.ObjectId,
}

export default ShopInterface;