import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthAmericaArrangementsComponent } from './north-america-arrangements.component';

describe('NorthAmericaArrangementsComponent', () => {
  let component: NorthAmericaArrangementsComponent;
  let fixture: ComponentFixture<NorthAmericaArrangementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthAmericaArrangementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthAmericaArrangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
