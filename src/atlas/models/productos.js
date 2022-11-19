import mongoose from "mongoose";

const productsCollection = "products";

//esquema de productos
const productsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        url:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        stock:{
            type: Number,
            required: true
        },
    }
);

export const productsModel = mongoose.model(productsCollection, productsSchema);