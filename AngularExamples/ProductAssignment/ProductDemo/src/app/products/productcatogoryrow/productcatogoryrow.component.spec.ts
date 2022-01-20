import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcatogoryrowComponent } from './productcatogoryrow.component';

describe('ProductcatogoryrowComponent', () => {
  let component: ProductcatogoryrowComponent;
  let fixture: ComponentFixture<ProductcatogoryrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcatogoryrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcatogoryrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
