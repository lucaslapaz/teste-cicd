import {app} from "./app";

const port = 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}. http://localhost:${port}/`);
});

//nao sei mais