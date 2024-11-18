import express from "express";

const porta = 3000;
const app = express();

app.listen(porta, () => {
    console.log("Servidor aberto em http://localhost:"+porta);
});

app.get("/", (req, res) => {
    res.status(200).send("Deu boa");
});