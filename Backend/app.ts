import express from 'express';
import 'dotenv/config';
import Route from './Routes/checkRoute';
import Logger from "./Logger/Logger";
import DBConnection from './DbConnection/connect';

const logger = new Logger().logger;
const routes = new Route().router;
new DBConnection();

class App {

    private app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.app.use((err: any, req: any, res: any, next: any) => {
            if (err) {
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
        this.app.use('/', routes);
    }

}
export default App;