import ShopUser from "../../Models/ShopUserModels/ShopUser";

class shopUserUtils {

    public fetchShopBYEmail = (email: string) => {
        ShopUser.findOne({ emailId: email });
    }

}

export default shopUserUtils;