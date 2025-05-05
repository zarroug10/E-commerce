import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-search-dialogue',
  imports: [NgIcon],
  providers: [provideIcons({
    featherSearch
  })],
  templateUrl: './search-dialogue.component.html',
  styleUrl: './search-dialogue.component.css'
})
export class SearchDialogueComponent {

  @Input() isSearchPopupVisible = false;
  
  @Output() closePopup = new EventEmitter<void>();

  public closeSearchPopup(): void {
    this.closePopup.emit();
  }

}
