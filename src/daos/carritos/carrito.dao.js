import {ContenedorCarritoMongo} from "src\Contenedor\ContenedorCarritoMongo.js"

export class CarritoDaosMongo extends ContenedorCarritoMongo{
    constructor(cartCollection, cartSchema){
        super(cartCollection, cartSchema)
    }
}
