import { Component, EventEmitter, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAlignRight, featherSearch, featherShoppingCart, featherUser } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  providers: [provideIcons({ featherAlignRight,
      featherSearch,
      featherUser,
      featherShoppingCart,}),],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  //Open Search Popup
  @Output() isSearchPopupVisible =  new EventEmitter<boolean>();

  public openSearchPopup() :void {
    this.isSearchPopupVisible.emit(true);
  }
}
