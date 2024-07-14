import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../service/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId!: number;
  productName: string = '';
  productDetails: string = '';
  productPrice: number = 0;
  productStock: number = 0;
  productImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    const product = this.productService.getProductById(this.productId);
    if (product) {
      this.productName = product.name;
      this.productDetails = product.details;
      this.productPrice = product.price;
      this.productStock = product.stock;
      this.productImage = product.image;
    }
  }

  editProduct() {
    const updatedProduct: Product = {
      id: this.productId,
      name: this.productName,
      details: this.productDetails,
      price: this.productPrice,
      stock: this.productStock,
      image: this.productImage
    };

    this.productService.updateProduct(updatedProduct);
    this.router.navigate(['/product']);
  }
}
