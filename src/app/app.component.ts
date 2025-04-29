import { Component, AfterViewInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {featherFacebook, featherInstagram, featherLinkedin, featherShoppingCart, featherStar, featherTwitter, featherYoutube} from '@ng-icons/feather-icons';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CompanyServicesComponent } from "./components/company-services/company-services.component";
import { SearchDialogueComponent } from "./shared/search-dialogue/search-dialogue.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NgIcon, NavbarComponent, CompanyServicesComponent, SearchDialogueComponent, FooterComponent],
  providers: [provideIcons({featherFacebook,
    featherLinkedin,
    featherInstagram,
    featherYoutube,
    featherTwitter,
    featherShoppingCart,
    featherStar,})],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialize any necessary components or libraries here
  }
  title = 'E-commerce';
  isSearchPopupVisible = false;

  // Sample product data
  products = [
    { title: 'Product 1', price: 1100 },
    { title: 'Product 2', price: 1200 },
    { title: 'Product 3', price: 1300 },
    { title: 'Product 4', price: 1400 },
    { title: 'Product 5', price: 1500 },
    { title: 'Product 6', price: 1600 },
    { title: 'Product 7', price: 1700 },
    { title: 'Product 8', price: 1800 },
    { title: 'Product 9', price: 1900 },
    { title: 'Product 10', price: 2000 },
    { title: 'Product 11', price: 2100 },
    { title: 'Product 12', price: 2200 },
    { title: 'Product 13', price: 2300 },
    { title: 'Product 14', price: 2400 },
    { title: 'Product 15', price: 2500 },
    { title: 'Product 16', price: 2600 },
    { title: 'Product 17', price: 2700 },
    { title: 'Product 18', price: 2800 },
    { title: 'Product 19', price: 2900 },
    { title: 'Product 20', price: 3000 },
  ];

  // Pagination variables
  currentPage = 1;
  itemsPerPage = 4;
  totalPages: number[] = [];
  paginatedProducts: { title: string; price: number }[] = [];

  ngOnInit() {
    this.calculatePagination();
  }

  calculatePagination(): void {
    const totalItems = this.products.length;
    const totalPagesCount = Math.ceil(totalItems / this.itemsPerPage);
    this.totalPages = Array.from({ length: totalPagesCount }, (_, i) => i + 1);
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages.length) {
      return;
    }
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  public openSearchPopup(): void {
    this.isSearchPopupVisible = true;
  }

  public closeSearchPopup(): void {
    this.isSearchPopupVisible = false;
  }

  addToCart(product: any): void {
    console.log('Product added to cart:', product);
  }

  // Sample card data
  cards = [
    { title: 'Card 1', price: '1100$' },
    { title: 'Card 2', price: '1200$' },
    { title: 'Card 3', price: '1300$' },
    { title: 'Card 4', price: '1400$' },
  ];

  activeIndex = 0;

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.cards.length;
  }

  prevSlide(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.cards.length) % this.cards.length;
  }
  
}
