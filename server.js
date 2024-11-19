import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Foto teste",
        imagem: "https://placecats.com/millie/300/250"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://placecats.com/millie/300/2506"
    },
    {
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://placecats.com/millie/300/2506"
    },
    {
        id: 4,
        descricao: "Comida deliciosa",
        imagem: "https://placecats.com/millie/300/2506"
    },
    {
        id: 5,
        descricao: "Arte abstrata",
        imagem: "https://placecats.com/millie/300/2506"
    },
    {
        id: 6,
        descricao: "Gato curioso",
        imagem: "https://placecats.com/millie/300/2506"
    }
];

const porta = 3000;
const app = express();
app.use(express.json());

app.listen(porta, () => {
    console.log("Servidor aberto em http://localhost:"+porta);
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});