import express from 'express';
import ShopController from '../../Controller/ShopControllers/ShopController';
import ShopRegistration from "../../Validation/ShopUserValidation/ShopRegistration"
import ShopRegistationForm from '../../Validation/ShopUserValidation/ShopRegistrationForm';

const shopcontroller = new ShopController();
const shopvalidation = new ShopRegistration();
const shopregistrationform = new ShopRegistationForm();

class ShopRouter {

    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.loadRoutes();
    }

    private loadRoutes() {
        this.router.route('/shopregister').post(shopvalidation.validateshop, shopcontroller.shopRegister);
        this.router.route('/shopverify/:token').get(shopcontroller.verifyemail);
    }

}

export default ShopRouter;