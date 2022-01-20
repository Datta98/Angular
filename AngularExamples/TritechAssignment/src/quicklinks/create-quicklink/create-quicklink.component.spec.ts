import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuicklinkComponent } from './create-quicklink.component';

describe('CreateQuicklinkComponent', () => {
  let component: CreateQuicklinkComponent;
  let fixture: ComponentFixture<CreateQuicklinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuicklinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuicklinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
