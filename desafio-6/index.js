const fs = require('fs');

class File {
    filename = '';

    constructor(filename) {
        this.filename = filename;
    }

    read(){ 
        try {
            const content = fs.readFileSync(`./${this.filename}`, 'utf-8');
            console.log(content);
            return content;
        } catch (e) { 
            console.error(e);
        } 
    }

    async update(array, product){
        try {
            const parsedArray = JSON.parse(array);
            product.id = parsedArray.length + 1;
        
            const newArray = [...parsedArray, product];
            console.log(newArray);
            await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(newArray));
        } catch (e) { 
            console.error(e);
        }
    }

    async delete(){
        try {
            await fs.promises.unlink(`./${this.filename}`);
        } catch (e) {
            console.error(e);
        }
    }
}

const file = new File('products.txt');

const newProduct = {
    "title": "Serpent & Dove",
    "author": "Shelby Mahurin",
    "description": "An Amazon Best Book of 2019 * New York Times Bestseller * B&N's YA Book Club Pick * Indiebound Bestseller * #6 on the 2019 Kids' Indie Next List",
    "price": "ARS$1.472,11",
    "format": "Paperback",
    "language": "English",
    "datePublished": "02 Sep 2020",
    "saga": "Serpent & Dove",
    "image": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0628/9780062878038.jpg"
}

//Lee y devuelve el contenido del archivo
const array = file.read();

//Agrega un nuevo producto
file.update(array, newProduct);

//Elimina todo el archivo
//file.delete();