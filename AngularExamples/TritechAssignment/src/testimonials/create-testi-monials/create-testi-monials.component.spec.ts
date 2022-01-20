import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestiMonialsComponent } from './create-testi-monials.component';

describe('CreateTestiMonialsComponent', () => {
  let component: CreateTestiMonialsComponent;
  let fixture: ComponentFixture<CreateTestiMonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTestiMonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestiMonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
