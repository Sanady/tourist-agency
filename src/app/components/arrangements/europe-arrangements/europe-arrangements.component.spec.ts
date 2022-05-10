import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeArrangementsComponent } from './europe-arrangements.component';

describe('EuropeArrangementsComponent', () => {
  let component: EuropeArrangementsComponent;
  let fixture: ComponentFixture<EuropeArrangementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeArrangementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeArrangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
