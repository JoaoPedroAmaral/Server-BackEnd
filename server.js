//Dependencia para criar servidores
import express from "express";

const posts = [
    {
        id:1,
        descrição: "Um cachorro cavando",
        imagem: "https://http.dog/404.jpg" // Substitua o código de status por outros para variar as imagens
    },
    {
        id:2,
        descrição: "Cachorrinho feliz",
        imagem: "https://http.dog/200.jpg"
    },
    {
        id:3,
        descrição: "dog sendo puxado",
        imagem: "https://http.dog/500.jpg"
    },
    {
        id:4,
        descrição: "cachorro se cheirando",
        imagem: "https://http.dog/304.jpg"
    },
    {
        id:5,
        descrição: "Cães dormindo",
        imagem: "https://http.dog/201.jpg"
    },
    {
        id:6,
        descrição: "Um cachorro em cima de um bulling",
        imagem: "https://http.dog/418.jpg" // Código de status "I'm a teapot" para uma imagem divertida
    }
  ];

const app = express();
app.use(express.json());

app.listen(3000, ()=> {
    console.log("Servidor escutando...");
});

function buscapost(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    })
}

app.get("/post/:id", (req,res) => {
    const index = buscapost(req.params.id);
    res.status(200).send(posts[index]); //200 é http status code de sucesso
});