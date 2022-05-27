import ShopUser from "../../Models/ShopUserModels/ShopUser";

class shopUserUtils {

    public fetchShopBYEmail = async (email: string) => {
        return await ShopUser.findOne({ emailId: email });
    }

}

export default shopUserUtils;