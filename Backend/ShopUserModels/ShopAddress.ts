import { Schema ,model} from "mongoose";
import ShopAddressInterface from "../ShopUserInterfaces/ShopAddress";



const shopUserSchema = new Schema<ShopAddressInterface>({
    shopId:{
        type:Schema.Types.ObjectId
    },
    shopUserId:{
        type:Schema.Types.ObjectId
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
    },
    landMark:{
        type:String
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    zipCode:{
        type:Number,
        required:true
    }
    
    
   
},{timestamps:true});

const ShopAddress=model<ShopAddressInterface>("ShopAddress",shopUserSchema);

export default ShopAddress;