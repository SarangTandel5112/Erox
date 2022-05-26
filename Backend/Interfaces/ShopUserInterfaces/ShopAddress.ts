import {Types , Document} from "mongoose";
interface ShopAddressInterface extends Document {
    shopId:Types.ObjectId,
    shopUserId:Types.ObjectId,
    addressLine1:String,
    addressLine2:String,
    landMark:String,
    district:String,
    state:String,
    country:String,
    zipCode:Number
}
export default ShopAddressInterface;