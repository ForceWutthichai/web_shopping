import { Injectable } from "@angular/core";
import { products } from './../product';

export interface Product {
  id: number;
  name: string;
  details: string;
  price: number;
  stock: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    if (this.isLocalStorageAvailable()) {
      const storedProducts = localStorage.getItem('products');
      this.products = storedProducts ? JSON.parse(storedProducts) : [];
    } else {
      this.products = [];
    }
  }

  private saveProducts() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
    console.log(localStorage.getItem('products'));
    this.saveProducts();
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
    this.saveProducts();
  }
}
