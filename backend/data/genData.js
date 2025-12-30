import { faker } from "@faker-js/faker";
import fs from "fs";

// Generate 10 fake products
const products = Array.from({ length: 10 }).map(() => ({
  title: faker.commerce.productName(),        // random product title
  price: faker.commerce.price({ min: 10, max: 500 }), // random price between 10–500
  stock: faker.number.int({ min: 0, max: 100 }),      // random stock quantity
  category: faker.commerce.department()       // random category
}));

// console.log(products);
const filePath = 'C:/Vscoder/projects/shop_smart/backend/data/products.json';
fs.writeFileSync( filePath, JSON.stringify( products, null, 2)); 

console.log("✅ Fake jobs saved to jobs.json");