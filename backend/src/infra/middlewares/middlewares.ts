import { NextFunction, Request, Response } from "express";
import { HttpExeception } from "../interfaces/HttpExeception";

export function errorMiddleware(
    err: HttpExeception,
    req: Request,
    res: Response,
    next: NextFunction
){ 
    const status : Number = err.status ?? 500;
    const message : String = err.message ?? 'Internal server error';

    res.status(status).json({
        status,
        message
    });
    
}