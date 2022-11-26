import mongoose from "mongoose"
import {options} from "../config/config.dao.js"

let ContenedorDaoProductos
let ContenedorDaoCarrito


switch(databaseType){
    case "mongo":

        const URL = "mongodb+srv://nassif:benicio2022@locosen3d.4crkgqb.mongodb.net/locosen3d"
        
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, error =>{
            if(error) throw new Error(`conexion fallida ${error}`)
            console.log('conexion exitosa');
        })

        const {ProductosDaosMongo} = await import("./productos/products.dao.js")
        const {productsSchema} = await import("../atlas/models/productos.js")
        const {productsCollection} = await import("../atlas/models/productos.js")
        ContenedorDaoProductos = new ProductosDaosMongo(productsCollection,productsSchema)

        const {CarritoDaosMongo} = await import("./carritos/carrito.dao.js")
        const {cartSchema} = await import("../atlas/models/carrito.js")
        const {cartCollection} = await import("../atlas/models/carrito.js")
        ContenedorDaoCarrito = new CarritoDaosMongo(cartCollection,cartSchema)
        break;

    
}

export {ContenedorDaoProductos, ContenedorDaoCarrito}