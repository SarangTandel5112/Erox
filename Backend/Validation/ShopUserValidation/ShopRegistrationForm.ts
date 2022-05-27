import { Request, Response, NextFunction } from "express"
import ShopUserUtils from "../../Utils/ShopUserUtils/ShopUserUtils";

const shopuserutils = new ShopUserUtils();

class ShopRegistationForm {

    public checkDetails = async (req: Request, res: Response, next: NextFunction) => {

        const { firstName, lastName, emailId, userName, password, phoneNumber, accountNumber, IFSCcode, bankName, branchName, addressLine1, addressLine2, landMark, district, state, country, zipCode, shopName, GSTno } = req.body;

        if (!firstName) {
            return res
                .status(400)
                .json({ status: false, data: "First Name is not provided" });
        }
        if (!lastName) {
            return res
                .status(400)
                .json({ status: false, data: "Last Name is not provided" });
        }
        if (!emailId) {
            return res
                .status(400)
                .json({ status: false, data: "Email Id is not provided" });
        }
        if (!userName) {
            return res
                .status(400)
                .json({ status: false, data: "User name is not provided" });
        }
        if (!password) {
            return res
                .status(400)
                .json({ status: false, data: "Password is not provided" });
        }
        if (!phoneNumber) {
            return res
                .status(400)
                .json({ status: false, data: "Phone Number is not provided" });
        }

        const user = await shopuserutils.fetchShopBYEmail(emailId);
        if (user) {
            return res
                .status(400)
                .json({ status: false, data: "EmailId Already Exist" });
        }
        if (!accountNumber) {
            return res
                .status(400)
                .json({ status: false, data: "Account Number is not provided" });
        }
        if (!IFSCcode) {
            return res
                .status(400)
                .json({ status: false, data: "IFSC Code is not provided" });
        }
        if (!bankName) {
            return res
                .status(400)
                .json({ status: false, data: "Bank Name is not provided" });
        }
        if (!branchName) {
            return res
                .status(400)
                .json({ status: false, data: "Branch Name is not provided" });
        }
        if (!addressLine1) {
            return res
                .status(400)
                .json({ status: false, data: "AddressLine1 is not provided" });
        }
        if (!addressLine2) {
            return res
                .status(400)
                .json({ status: false, data: "AddrressLine2 is not provided" });
        }
        if (!landMark) {
            return res
                .status(400)
                .json({ status: false, data: "Landmark is not provided" });
        }
        if (!district) {
            return res
                .status(400)
                .json({ status: false, data: "District is not provided" });
        }
        if (!state) {
            return res
                .status(400)
                .json({ status: false, data: "State is not provided" });
        }
        if (!country) {
            return res
                .status(400)
                .json({ status: false, data: "Country is not provided" });
        }
        if (!zipCode) {
            return res
                .status(400)
                .json({ status: false, data: "ZipCode is not provided" });
        }
        if (!shopName) {
            return res
                .status(400)
                .json({ status: false, data: "Shop Name is not provided" });
        }
        if (!GSTno) {
            return res
                .status(400)
                .json({ status: false, data: "GST Number is not provided" });
        }
        // next();
    }

}

export default ShopRegistationForm;