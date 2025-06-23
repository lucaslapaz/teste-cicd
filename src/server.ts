import {app} from "./app";

const port = 8033;

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${port}. http://localhost:${port}/`);
});

