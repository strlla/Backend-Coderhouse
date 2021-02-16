export default class Products {
    products: Array<Product> = [];

    constructor(products: Array<Product>){ 
        this.products = products;
    }

    getAllProducts = () => this.products;

    getProductById = (id: string) => this.products.find(p => p.id === id);

    addProduct = (product: Product) => this.products.push(product);

    deleteProductById = (id: string) => {
        const oldProduct = this.getProductById(id);
        const newProducts = this.products.filter(p => p.id !== id);
        this.products = newProducts;
        
        return oldProduct;
    }

    updateProduct = (product: Product) => {
        this.deleteProductById(product.id);
        this.addProduct(product);
    } 
}

interface Product {
    id: string
    title: string
    price: number
    thumbnail: string
    categoryId: string
}