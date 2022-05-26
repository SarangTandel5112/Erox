import { Schema, model } from "mongoose";
import ShopInterface from "../../Interfaces/ShopUserInterfaces/ShopInterface";

const ShopSchema = new Schema<ShopInterface>({
    shopName: {
        type: String,
        required: true
    },
    GSTno: {
        type: String,
        required: true
    },
    shopUserId: {
        type: Schema.Types.ObjectId,
        ref: "ShopUser"
    },
    shopAddress: {
        type: Schema.Types.ObjectId,
        ref: "ShopAddress"
    }
}, { timestamps: true })

const Shop = model<ShopInterface>("Shop", ShopSchema);
export default Shop;