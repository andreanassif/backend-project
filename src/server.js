import express from 'express'
import productsRouter from "./routes/products.js";
import cartRouter from "./routes/cart.js";
import mongoose from "mongoose";

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

app.use("/api/products", productsRouter);


app.use("/api/cart", cartRouter);




