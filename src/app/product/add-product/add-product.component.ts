import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../../service/product.service';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [NzButtonComponent, RouterModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  private readonly route = inject(Router);
  private readonly _productService = inject(ProductService);

  id = this._productService.getProducts().length + 1;
  productName: string = '';
  productDetails: string = '';
  productPrice: number = 0;
  productStock: number = 0;
  productImage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addProduct() {
    const newProduct: Product = {
      id: this.id,
      name: this.productName,
      details: this.productDetails,
      price: this.productPrice,
      stock: this.productStock,
      image: this.productImage
    };

    this._productService.addProduct(newProduct);
    this.router.navigate(['/product']);
  }
}

// import { products } from './../../product';
// import { Router } from '@angular/router';
// import { Component, inject, OnInit } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { NzButtonComponent } from 'ng-zorro-antd/button';
// import { ProductService } from '../../service/product.service';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-add-product',
//   standalone: true,
//   imports: [NzButtonComponent, RouterModule,FormsModule],
//   templateUrl: './add-product.component.html',
//   styleUrl: './add-product.component.scss'
// })
// export class AddProductComponent implements OnInit {
//   private readonly routes = inject(Router);
//   private readonly _ProductService = inject(ProductService);

//   id = products.length + 1;
//   productName: string ='';
//   productDetails: string = '';
//   productPrice: number = 0;
//   productStock: number= 0;
//   productImage: string = '';

//   constructor(private route: Router) { }
//   ngOnInit(): void {
//   }
//   addProduct() {
//     products.push({
//       id: this.id,
//       name: this.productName,
//       details: this.productDetails,
//       price: this.productPrice,
//       stock: this.productStock,
//       image: this.productImage
//     })
//     this._ProductService.onAddProduct(this.id,this.productName,this.productDetails,this.productPrice,this.productStock,this.productImage)
//     console.log(products);

//     this.route.navigate(['/product'])
//   }


// }
