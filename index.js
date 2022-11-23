// Import stylesheets
import './style.css';

const fs = require('fs');

class Contenedor {
  constructor(fileName) {
    const writeFile = async () => {
      try {
        await fs.promises.writeFile(`./${fileName}.txt`, 'peu3ba escritura');
        console.log('archivo creado!');
      } catch (err) {
        console.log('error!');
      }
    };
    writeFile();
  }

  save(item) {}

  getById(id) {}

  getAll() {}

  deleteById(id) {}

  deleteAll() {}
}

const contenedor = new Contenedor('productos');
console.log(contenedor);
