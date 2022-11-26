import mongoose from 'mongoose'

export class ContainerCarritoMongo {
    constructor(cartCollection, cartSchema){
        this.model = mongoose.model(cartCollection, cartSchema)
    }

    async getById(id){
        try{
            const data = await this.model.findById(id)
            return data
        }catch(err){
            console.log(err);
        }
    }

    async save(data){
        try{
            const newData = await this.model.create(data)
            return newData
        }catch(err){
            console.log(err);
        }
    }
    async newId(){
        try{
            let id = new mongoose.Types.ObjectId()
            const data = await this.model.insertOne({'id':id})
            return data
        }catch(err){
            console.log(err);
        }
    }
    async putById(id,modificacion){
        try{
            const data = await this.model.findByIdAndUpdate(id,modificacion)
            const newData = await this.getById(id)
            return newData
        }catch(err){
            console.log(err);
        }
    }

    async moreProd(id,modificacion){
        try{
            const data = await this.model.findByIdAndUpdate(id, modificacion)
            return data
        }catch(err){
            console.log(err);
        }
    }

    async deleteById(id){
        try{
            const data = await this.model.findByIdAndDelete(id)
            return data

        }catch(err){
            console.log(err);
        }
    }
    async deleteOneProd(id,id_prod){
        try{
            const data = await this.model.findByIdAndUpdate({
                "_id": id
                },
                {
                    "$pull": {
                    "productos": {
                        "_id": id_prod
                    }
                    }
                })
        }catch(err){
            console.log(err);
        }
    }
}
