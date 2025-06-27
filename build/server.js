"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 3000;
app_1.app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}. http://localhost:${port}/`);
});
//nao sei mais
