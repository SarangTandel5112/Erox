import 'express-async-errors';
import express from 'express';
import 'dotenv/config';
import Logger from "./Logger/Logger";
import DBConnection from './DbConnection/connect';
import ShopRouter from './Routes/ShopRoutes/shopRoutes';

const logger = new Logger().logger;
process.on('uncaughtException', (ex) => {
    logger.error(ex.message);
})
process.on('unhandledRejection', (ex) => {
    throw ex;
})



const shopRoutes = new ShopRouter().router;
new DBConnection();

class App {

    private app: express.Application;

    constructor() {

        this.app = express();
        this.middlewares();
        this.routes();
        this.app.use((err: any, req: any, res: any, next: any) => {
            if (err) {
                console.log("Something hapens");
                return res.status(500).json({ status: false, data: 'Some Internal Server Error Occured' })
            }
            next();
        })
        this.app.listen(process.env.PORT, () => {
            logger.info(`Server Running on port ${process.env.PORT}`);
        })
    }

    private middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use('/', shopRoutes);
    }

}
export default App;