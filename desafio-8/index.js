const express = require('express');
const {Products} = require('./Products.js');
const app = express();
const PORT = 3004;

//Levanto el servidor
const server = app.listen(PORT, ()=>{
    console.log('El servidor está arriba')
})

server.on('Error', error => console.log(`Error en el sevidor ${error}`));

//middleware: se interpone entre la petición y lo que voy a ejecutar
//Puede recibir un json
app.use(express.json());

const products = new Products([
    {id: "1", title: 'Smart TV 50" 4K UHD Hitachi 504KS20', price: 49999, thumbnail: 'https://images.fravega.com/s500/7107f179c6e702457e149e94f6fc45da.jpg', categoryId: 'televisores'},
    {id: "2", title: 'Smart TV 4K 50" Admiral AD50Q20', price: 47999, thumbnail: 'https://images.fravega.com/s500/2d277ff6b1ddbd8c14092c6b199c2ca4.jpg', categoryId: 'televisores'},
    {id: "3", title: 'Smart TV 4K UHD Samsung 50" UN50TU7000', price: 63999, thumbnail: 'https://images.fravega.com/s500/662a2b266e34e0563fee25602609a235.jpg', categoryId: 'televisores'},
    {id: "4", title: 'Celular Libre Samsung Galaxy Note20 Gris', price: 89999, thumbnail: 'https://images.fravega.com/s500/4dfa8c180066ac9debe722bf0ae1795c.jpg', categoryId: 'celulares'},
    {id: "5", title: 'Celular Libre Samsung Galaxy S20FE Lavanda', price: 79999, thumbnail: 'https://images.fravega.com/s500/46e47f3f4ca8e2abca5628d7fde4d569.jpg', categoryId: 'celulares'},
    {id: "6", title: 'Celular Libre Samsung Galaxy Note 20 Ultra Bronce', price: 145999, thumbnail: 'https://images.fravega.com/s500/7ebc2ea1b0d73950855a447acb96adf0.jpg'}
]);

app.get('/products', (req, res) => {
    console.log('request recibido');
    const allProducts = products.getAllProducts();
    try { 
        res.status(200).json({products: allProducts});
    } catch (err) {
        res.status(404).json({error: 'Hubo un error al obtener todos los productos'})
    }
});

app.get('/products/:id', (req, res) => {
    console.log('request recibido');
    const { id } = req.params;
    console.log(id);
    const product = products.getProductById(id);

    try {
        if(product !== undefined){
            res.status(200).send({product: product});
        } else {
            res.status(404).json({error: 'Producto no encontrado'})
        }
    } catch (err) {
        res.status(404).send({error: 'Hubo un error al traer el producto'})
    }
});

//const product = {title: 'Celular Libre Samsung Galaxy S10 Plus Negro', price: 92999, thumbnail: 'https://images.fravega.com/s500/8b09c6a0604c35a8d25e5d900ed41f67.jpg', categoryId: 'celulares'}

app.post('/products', (req, res) => {
    console.log('request recibido');
    const { title, price, thumbnail, categoryId } = req.body;

    try {
        if([title, price, thumbnail, categoryId].includes('')){ 
            res.status(400).send({error: 'No puede haber propiedades en blanco...'});    
        }

        const newProduct = {
            id: products.getAllProducts().length + 1,
            title, price, thumbnail, categoryId
        }
        
        product.addProduct(newProduct);
        
        res.status(200).send({msg: 'Producto agregado'});
    } catch (err) {
        res.status(404).send({error: 'Hubo un error :('})
    }
});