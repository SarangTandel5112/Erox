import express from 'express';
import ShopController from '../Controller/ShopController';
import ShopRegistration from "../Validation/ShopRegistration"

const shopcontroller = new ShopController();
const shopvalidation = new ShopRegistration();

class ShopRouter {

    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.loadRoutes();
    }

    private loadRoutes() {
        this.router.route('/register').post(shopvalidation.validateshop, shopcontroller.shopRegister);
        this.router.route('/verify/:token').get(shopcontroller.verifyemail);
    }

}

export default ShopRouter;