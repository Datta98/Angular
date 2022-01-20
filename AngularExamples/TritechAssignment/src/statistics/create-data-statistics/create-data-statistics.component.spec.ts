import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataStatisticsComponent } from './create-data-statistics.component';

describe('CreateDataStatisticsComponent', () => {
  let component: CreateDataStatisticsComponent;
  let fixture: ComponentFixture<CreateDataStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDataStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
