import express, {Application } from 'express';



import { connect } from './infra/database'
import { errorMiddleware } from './infra/middlewares/middlewares';



class App {
    public app: Application
    constructor() {
        this.app = express();
        this.middlewaresInitialize();
        this.InitializeRoutes();
        this.IntecerptionError()
        connect();
    }

                       
    InitializeRoutes(){
        //this.app.use()
    }
    IntecerptionError(){
        this.app.use(errorMiddleware);
    }
middlewaresInitialize(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true})); //text=Hello%World
}
    listen() {
        this.app.listen(3523, ()=> console.log (' server is running '))
     } 
    }
    export {App};