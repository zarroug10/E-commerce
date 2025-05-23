import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDialogComponent } from './cart-dialog.component';

describe('CartDialogComponent', () => {
  let component: CartDialogComponent;
  let fixture: ComponentFixture<CartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
