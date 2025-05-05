import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { NgIcon } from '@ng-icons/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-cards',
  imports: [NgIcon, NgFor],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.css'
})
export class ProductCardsComponent {
  @Input() products: Product[] = [];

  public groupedProducts: Product[][] = [];
  public windowSize = window.innerWidth;

  chunkProducts(products: Product[], chunkSize: number): Product[][] {
    const result = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      result.push(products.slice(i, i + chunkSize));
    }
    return result;
  }
  determineChunkSize(): number {
    if (this.windowSize >= 1200) {
      return 4;
    } else if (this.windowSize >= 768) {
      return 3;
    } else if (this.windowSize >= 576) {
      return 2; 
    }
    return 1;
  }

  updateGroupedProducts() {
    const chunkSize = this.determineChunkSize();
    this.groupedProducts = this.chunkProducts(this.products, chunkSize);
  }

  ngOnInit() {
    this.updateGroupedProducts();
    window.addEventListener('resize', () => {
      this.windowSize = window.innerWidth;
      this.updateGroupedProducts();
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => {
      this.windowSize = window.innerWidth;
      this.updateGroupedProducts();
    });
  }
}
