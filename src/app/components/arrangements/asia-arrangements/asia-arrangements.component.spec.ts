import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaArrangementsComponent } from './asia-arrangements.component';

describe('AsiaArrangementsComponent', () => {
  let component: AsiaArrangementsComponent;
  let fixture: ComponentFixture<AsiaArrangementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaArrangementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaArrangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
