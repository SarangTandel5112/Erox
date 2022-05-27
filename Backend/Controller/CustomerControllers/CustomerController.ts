import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import CustomerUser from "../../Models/CustomerUserModels/CustomerUser";
import CustomerUtilsClass from "../../Utils/CustomerUtils/CustomerUtils"

const CustomerUtils = new CustomerUtilsClass();

class CustomerControllerClass{

    public CusotmerRegister = async(req:Request,res:Response)=>{
        const {firstName,lastName,userName,password,emailId,phoneNumber} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const customerUser = {
            firstName:firstName,
            lastName:lastName,
            userName:userName,
            password:hashedPassword,
            emailId:emailId,
            phoneNumber:phoneNumber,
            email_verified:false

        };
        CustomerUtils.addCustomer(customerUser);

        return res.status(200).json({status:true,data:"Customer Registerd Succssfully"})

    
       
        



    }


}
export default CustomerControllerClass;