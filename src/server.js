import express from 'express'

//inicio app
const app = express()

//config json 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config puerto y levantar server
const PORT = process.env.PORT || 8181
app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`))

//test route
app.get("/", (req, res) =>{
    res.send("hello");
});

//routers
import productsRouter from "./routes/products";
app.use("/api/products", productsRouter);

import cartRouter from "./routes/cart";
app.use("/api/cart", cartRouter);


