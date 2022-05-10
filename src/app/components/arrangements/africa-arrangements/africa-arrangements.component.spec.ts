import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaArrangementsComponent } from './africa-arrangements.component';

describe('AfricaArrangementsComponent', () => {
  let component: AfricaArrangementsComponent;
  let fixture: ComponentFixture<AfricaArrangementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfricaArrangementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaArrangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
