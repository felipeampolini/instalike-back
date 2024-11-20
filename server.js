import express from "express";
import routes from "./src/routes/postsRoutes.js";

const porta = 3000;
const app = express();

routes(app);

app.listen(porta, () => {
    console.log("Servidor aberto em http://localhost:"+porta);
});
