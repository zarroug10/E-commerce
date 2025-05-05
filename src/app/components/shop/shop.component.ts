import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { Product } from '../../models/product';

@Component({
  selector: 'app-shop',
  imports: [ProductCardsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  circuits: Product[] = [
    { id: 1, title: 'Laptop', category: 'Electronics', price: 1200, stock: 10, imageUrl: 'images/Arduino.png' },
    { id: 2, title: 'Smartphone', category: 'Electronics', price: 800, stock: 15, imageUrl: 'images/Arduino.png' },
    { id: 3, title: 'Headphones', category: 'Accessories', price: 150, stock: 25, imageUrl: 'images/Arduino.png' },
    { id: 4, title: 'Shoes', category: 'Fashion', price: 100, stock: 20, imageUrl: 'images/Arduino.png' },
    { id: 5, title: 'Backpack', category: 'Fashion', price: 50, stock: 30, imageUrl: 'images/Arduino.png' },
    { id: 6, title: 'Tablet', category: 'Electronics', price: 600, stock: 12, imageUrl: 'images/Arduino.png' },
    { id: 7, title: 'Watch', category: 'Accessories', price: 200, stock: 18, imageUrl: 'images/Arduino.png' },
    { id: 8, title: 'Jacket', category: 'Fashion', price: 120, stock: 15, imageUrl: 'images/Arduino.png' },
    { id: 9, title: 'Gaming Console', category: 'Electronics', price: 400, stock: 8, imageUrl: 'images/Arduino.png' },
    { id: 10, title: 'Sunglasses', category: 'Accessories', price: 80, stock: 22, imageUrl: 'images/Arduino.png' },
    { id: 11, title: 'Keyboard', category: 'Electronics', price: 50, stock: 40, imageUrl: 'images/Arduino.png' },
    { id: 12, title: 'Mouse', category: 'Electronics', price: 30, stock: 50, imageUrl: 'images/Arduino.png' }
  ];
}
