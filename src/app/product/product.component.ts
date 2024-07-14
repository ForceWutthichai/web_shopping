import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, NzButtonModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  readonly _productService = inject(ProductService);
  products: Product[] = [];

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.navigate(['/product']);
    this.products = this._productService.getProducts();
  }

  welcomeHome() {
    this.route.navigate(['/welcome']);
  }

  onAdd() {
    this.route.navigate(['/addProduct']);
  }

  onDelete(productId: number) {
    this._productService.deleteProduct(productId);
    this.products = this._productService.getProducts();
  }
  onEdit(productId: number) {
    this.route.navigate(['/editProduct', productId]);
  }
}
