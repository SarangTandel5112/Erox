import CustomerUser from "../../Models/CustomerUserModels/CustomerUser";
import CustomerUserInterface from "../../Interfaces/CustomerUserInterfaces/CustomerUserInterace";

class CustomerUtilsClass{
    public async addCustomer(Customer:any){
        await CustomerUser.create(Customer)

        
    }

}
export default CustomerUtilsClass;