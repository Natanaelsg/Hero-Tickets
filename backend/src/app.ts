import express, {Application } from 'express';



import { connect } from './infra/database'


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
        //this.app.use((err: Error, req: R, res: any, next: any) => {
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