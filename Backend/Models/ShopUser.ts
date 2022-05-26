import { Schema ,model} from "mongoose";
import ShopUserInterface from "../Interfaces/ShopUserInterface";



const shopUserSchema = new Schema<ShopUserInterface>({
    firstName:{
        type:String,
        required:true

    },
    lastName:{
        type:String,
        required:true,
    },
    emailId:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true

    },
    phoneNumber:{
        type:Number,
        required:true

    },
    bankAccountId:{
        type:Schema.Types.ObjectId,
    },
    shopAddress:{
        type:Schema.Types.ObjectId,
        required:true
    },
    shopId:{
        type:Schema.Types.ObjectId
    },
    email_verified:{
        type:Boolean,
        default:false
    },
    accessToken:{
        type: String
    },
},{timestamps:true});

const ShopUser=model<ShopUserInterface>("ShopUser",shopUserSchema);

export default ShopUser;