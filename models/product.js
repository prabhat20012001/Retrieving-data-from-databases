const db=require('../util/database');
const Cart=require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // Implement the logic to save a product
   return db.execute('INSERT INTO products (title,price,imageUrl,description) VALUES(?,?,?,?)',[this.title,this.price,this.imageUrl,this.description])
  }

  static deleteById(id) {
    // Implement the logic to delete a product by id
    return db.execute('DELETE FROM products WHERE id = ?', [id]);
  }
  

  static fetchAll() {
    // Implement the logic to fetch all products
    return db.execute('SELECT * FROM sys.products;');
  }

  static findById(id) {
    // Implement the logic to find a product by id
    return db.execute("SELECT*FROM products WHERE products.id=?",[id]);
  }
};
