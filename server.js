import express from "express";
import routes from "./src/routes/postsRoutes.js";

const porta = 3000;
const app = express();

app.use(express.static("uploads"));

routes(app);

app.listen(porta, () => {
    console.log("Servidor aberto em http://localhost:"+porta);
});
