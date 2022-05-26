import { model, Schema } from "mongoose";
import BankAccountInterface from "../../Interfaces/ShopUserInterfaces/BankAccountInterfaces";

const BankAccountSchema = new Schema<BankAccountInterface>({

    shopUserId: {
        type: Schema.Types.ObjectId,
        ref: "ShopUser"
    },
    accountNumber: {
        type: String,
        required: true
    },
    IFSCcode: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    }

})

const BankAccount = model<BankAccountInterface>("BankAccount", BankAccountSchema)
export default BankAccount;