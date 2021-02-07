class Products {
    products = [];

    constructor(products){ 
        this.products = products;
    }

    getAllProducts = () => this.products;

    getProductById = (id) => this.products.find(p => p.id === id);

    addProduct = (product) => this.products.push(product);
}

module.exports = {Products};