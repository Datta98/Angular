import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterableproducttableComponent } from './filterableproducttable.component';

describe('FilterableproducttableComponent', () => {
  let component: FilterableproducttableComponent;
  let fixture: ComponentFixture<FilterableproducttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterableproducttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterableproducttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
