import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyServicesComponent } from './company-services.component';

describe('CompanyServicesComponent', () => {
  let component: CompanyServicesComponent;
  let fixture: ComponentFixture<CompanyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
