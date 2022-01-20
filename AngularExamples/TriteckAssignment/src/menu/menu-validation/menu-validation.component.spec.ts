import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuValidationComponent } from './menu-validation.component';

describe('MenuValidationComponent', () => {
  let component: MenuValidationComponent;
  let fixture: ComponentFixture<MenuValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
