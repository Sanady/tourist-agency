import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthAmericaArrangementsComponent } from './south-america-arrangements.component';

describe('SouthAmericaArrangementsComponent', () => {
  let component: SouthAmericaArrangementsComponent;
  let fixture: ComponentFixture<SouthAmericaArrangementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthAmericaArrangementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthAmericaArrangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
