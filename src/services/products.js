import fs from "fs";

export class productsServices {
  constructor() {
    this.products = [];
  }

  async save(object) {
    try {
      // var writeStream = fs.createWriteStream("src/json/productos.txt");
      // writeStream.write(
      //   '{"products": []}'
      //   );
      //writeStream.write("Thank You.");
      //writeStream.end();
      const data = await fs.promises.readFile("src/json/productos.txt", "utf-8");
      //parseo json para trabajar con array
      const parsedData = JSON.parse(data);

      //obtengo el id del ultimo elemento del array
      const dataIndex = parsedData.products.length;
      const newId = parsedData.products[dataIndex - 1].id;

      //agregar timestamp
      const timestamp = Date.now();

      //agrego el nuevo objeto
      const newObject = { id: newId + 1, timestamp_prod: timestamp, ...object };
      parsedData.products.push(newObject);

      //sobreescribo archivo con nueva data que incluye al objeto
      await fs.promises.writeFile(
        //this.products,
        "src/json/productos.txt",
        JSON.stringify(parsedData, null, 2)
      );
      console.log("product saved successfully");
    } catch (error) {
      console.error(error);
    }
  }

  async getById(id) {
    try {
      const data = await fs.promises.readFile("src/json/productos.txt", "utf-8");

      const parseData = JSON.parse(data);
      const findData = parseData.products.find((x) => x.id === id);
      return findData;
    } catch (error) {
      console.error(error);
    }
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile("src/json/productos.txt", "utf-8");
      const parsedData = JSON.parse(data);
      return parsedData.products;
    } catch (error) {
      console.error(error);
    }
  }

  async updateById(id, object) {
    try {
      const data = await fs.promises.readFile("src/json/productos.txt", "utf-8");
      const parsedData = JSON.parse(data);

      //encuentro por id
      const findData = parsedData.products.find((x) => x.id === id);

      //actualizar timestamp
      const timestamp = Date.now();
      
      //sobreescribo el objeto
      const newObject = {
        id: findData.id,
        timestamp_prod: timestamp,
        ...object,
      };
      
      
      //elimino el objeto antiguo
      parsedData.products.splice(findData.id, 1);
      
      //agrego el nuevo objeto
      parsedData.products.push(newObject);
      
      //ordeno el array por id ascendente
      parsedData.products.sort((a, b) => a.id - b.id);
      
      //sobreescribo archivo con nueva data que incluye al objeto
      await fs.promises.writeFile(
        "src/json/productos.txt",
        JSON.stringify(parsedData, null, 2)
        );
      console.log("product updated successfully");
    } catch (error) {
      console.error(error);
    }
  }

  async deleteById(id) {
    try {
      const data = await fs.promises.readFile("src/json/productos.txt", "utf-8");
      const parseData = JSON.parse(data);
      //filtro los que NO tengan el id que busco y lo guardo en un nuevo array
      const newData = parseData.products.filter((x) => x.id !== id);

      //re escribo el archivo con el nuevo array
      await fs.promises.writeFile(
        "src/json/productos.txt",
        `{"products":  ${JSON.stringify(newData, null, 2)} }`
      );
      console.log(`product ${id} deleted successfully`);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile("src/json/productos.txt", `{"products": []}`);
      console.log("product deleted succesfully");
    } catch (error) {
      console.error(error);
    }
  }
}

export const Products = new productsServices("src/json/productos.txt");
