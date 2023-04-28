import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: Product[];

  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'price', 'delete'];
  productCategories: string[];

  currentProduct: Product;

  constructor(public productService: ProductService) {
    this.productList = productService.getProductList();
    this.productCategories = productService.getProductCategories();
    this.currentProduct = productService.getCurrentProduct();
  }

  addProduct() {
    this.productService.addProduct();
    this.getCurrentProductData();
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product);
    this.getCurrentProductData();
  }

  updateProductDetails(product: Product) {
    this.productService.updateProductDetails(product);
    this.getCurrentProductData();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.getCurrentProductData();
  }

  getCurrentProductData() {
    this.productList = this.productService.getProductList();
    this.currentProduct = this.productService.getCurrentProduct();
  }
}
