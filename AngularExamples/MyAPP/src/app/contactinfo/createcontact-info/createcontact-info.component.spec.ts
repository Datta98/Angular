import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontactInfoComponent } from './createcontact-info.component';

describe('CreatecontactInfoComponent', () => {
  let component: CreatecontactInfoComponent;
  let fixture: ComponentFixture<CreatecontactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecontactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecontactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
