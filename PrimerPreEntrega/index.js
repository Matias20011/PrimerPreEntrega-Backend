class ProductManager {
    

    constructor(){
        this.Products = [];
    }

    addProduct(title,description,price,thumbnail,code,stock) {

        const Product = {
            id: this.products.length ? this.products[this.products.length-1].id+1 : 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock: []
        }
        this.Products.push(Product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id){
            const product = this.Products.find(product => product.id === id);
            if (!product) {
                return 'not found'
            }
        }
};

    const manager = new ProductManager();
    manager.addProduct("Producto Prueba","Este es un producto prueba",200, "sin img" , "ABC123", 25);

    const allProducts = manager.getProducts();
    console.log(allProducts);

    const productById = manager.getProductById(2);
    if (productById) {
        console.log(productsById);
    }


