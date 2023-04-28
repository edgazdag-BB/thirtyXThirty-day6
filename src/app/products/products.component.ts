import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'price', 'delete'];
  
  constructor(public productService: ProductService) {}
}
