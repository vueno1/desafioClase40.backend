module.exports = class Container {
    constructor(nombreCollection) {
        this.collection = nombreCollection
    }

    async mostrar() {
        try{
            return await this.collection.find()

        }catch(e) {
            console.log(e.message);
        }
    }

    async guardar(p) {
        try{
            return await this.collection.create(p)
        }catch(e){
            console.log(e.message);
        }
    }
}