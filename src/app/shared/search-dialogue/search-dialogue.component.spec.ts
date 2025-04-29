import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDialogueComponent } from './search-dialogue.component';

describe('SearchDialogueComponent', () => {
  let component: SearchDialogueComponent;
  let fixture: ComponentFixture<SearchDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDialogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
