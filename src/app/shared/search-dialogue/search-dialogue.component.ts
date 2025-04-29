import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-search-dialogue',
  imports: [],
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
