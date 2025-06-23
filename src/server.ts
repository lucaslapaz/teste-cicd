import express, { NextFunction, Request, Response } from "express";


const app = express();
const port = 8099;

app.use((req:Request, res:Response, next:NextFunction)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-store");
    next();
})

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Carregou com sucesso!");
    return;
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}. http://localhost:${port}/`);
});