import { Component, AfterViewInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {featherFacebook, featherInstagram, featherLinkedin, featherShoppingCart, featherStar, featherTwitter, featherYoutube} from '@ng-icons/feather-icons';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SearchDialogueComponent } from "./shared/search-dialogue/search-dialogue.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { CartDialogComponent } from "./shared/cart-dialog/cart-dialog.component";

@Component({
  selector: 'app-root',
  imports: [SearchDialogueComponent, FooterComponent, RouterOutlet, NavbarComponent, CartDialogComponent],
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
  public isSearchPopupVisible = false;
  public isCartDialogVisible = false;

  public isCartVisible = false;


  public openSearchPopup(): void {
    this.isSearchPopupVisible = true;
  }

  public openCartDialog() {
    this.isCartVisible = true;
  }

  public closeCartDialog() {
    this.isCartVisible = false;
  }
  public closeSearchPopup(): void {
    this.isSearchPopupVisible = false;
  }

  addToCart(product: any): void {
    console.log('Product added to cart:', product);
  }
}
