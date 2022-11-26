import {ContainerMongo} from "src\Contenedor\ContenedorMongo.js"




export class ProductsDAO extends ContainerMongo {

    constructor(productsCollection,productsSchema){
        super(productsCollection,productsSchema)
    }

    //constructor(repository){
    //    this.repo = repository
    //}


    //const create = () => {
    //    this.repo.save()
    //}


    //const delete = () => {
    //    this.repo.delete()
    //}
}