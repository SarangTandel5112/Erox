import { Types, Document } from "mongoose"

interface BankAccountInterface extends Document {
    shopUserId: Types.ObjectId,
    accountNumber: Number,
    IFSCcode: String,
    bankName: String,
    branchName: String
}

export default BankAccountInterface;