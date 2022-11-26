import { ProductsDAO } from "../daos/productos/products.dao.js";
import {productsServices} from "../services/products.js"
import {cartServices} from "../services/cart.js"

//import archivo de crud (services)

export const productosDAO = new ProductsDAO("src/services/products.js")

export const options = {
    
    admin : true,
    database: 'Mongo',
    mongo: {
        ulr: "mongodb+srv://nassif:benicio2022@locosen3d.4crkgqb.mongodb.net/locosen3d"
    },
    
    //fileSystem: {
    //    pathProducts: 'productos.json',
    //    pathCarts: 'carritos.json',
    //},
    // mariaDB:{
    //     client:"mysql",
    //     connection:{
    //         host:"127.0.0.1",
    //         user:"root",
    //         password:"",
    //         database:"coderhousedb"
    //     }
    // },
    //sqliteDB:{
    //    client:"sqlite3",
    //    connection:{
    //        filename:path.join(__dirname , "../DB/ecommerce.sqlite")
    //    },
    //    useNullAsDefault:true
    //},
    //firebase:{
    //    serviceKey:{},
    //    databaseUrl:""
    //}
}
