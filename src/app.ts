import express, { NextFunction, Request, Response } from "express";

export const app = express();

app.use(express.json());

app.use((req:Request, res:Response, next:NextFunction)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-store");
    next();
})

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Carregou com sucesso!");
    return;
})

export const f1 = function(a: number, b:number){
    return a * b;
}