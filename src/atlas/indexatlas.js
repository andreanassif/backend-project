import mongoose from "mongoose";
import { productsModel } from "./models/productos.js";

const URL ="mongodb+srv://nassif:benicio2022@locosen3d.4crkgqb.mongodb.net/locosen3d"


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error=> {
    if(error) throw new Error(`Conexión fallida ${error}`);
    console.log("Conexión Base de datos exitosa!")
})


const opCRUD = async()=>{
    try {
        const newProducts = [
            {
                "name": "Lapicero personalizado",
                "price": 2200,
                "url": "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/lapicero-mojo-gris_dr2hxb.jpg",
                "description": "Lapiceros personalizados, varios colores disponibles",
                "stock": 15
              },
              {
                "name": "Lapicero personalizado",
                "price": 2200,
                "url": "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/lapicero-mojo-gris_dr2hxb.jpg",
                "description": "Lapiceros personalizados, varios colores disponibles",
                "stock": 16
              },
              {
                "name": "Lapicero personalizado 3",
                "price": 2500,
                "url": "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/lapicero-mojo-gris_dr2hxb.jpg",
                "description": "Lapiceros personalizados, varios colores disponibles",
                "stock": 20
              },
              {
                "name": "Lapicero personalizado 3 updated",
                "price": 3300,
                "url": "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/lapicero-mojo-gris_dr2hxb.jpg",
                "description": "Lapiceros personalizados, varios colores disponibles",
                "stock": 25
              }
        ]
        //guardo los productos
        let result =  await productsModel.insertMany(newProducts);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

opCRUD(); 