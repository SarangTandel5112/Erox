import express from 'express';
class Router{
    public router:express.Router;
    constructor(){
        this.router=express.Router();
        this.loadRoutes();
    }
    private loadRoutes(){
        this.router.route('/').get(()=>{
            console.log("Server is always running for you.")
        })
    }
}
export default Router;