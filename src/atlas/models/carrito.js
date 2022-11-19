import mongoose from "mongoose";

const cartCollection = "cart";

//esquema de productos
const cartSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true            
        },

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

export const cartModel = mongoose.model(cartCollection, cartSchema);