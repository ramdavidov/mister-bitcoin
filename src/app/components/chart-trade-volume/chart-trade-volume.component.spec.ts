import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTradeVolumeComponent } from './chart-trade-volume.component';

describe('ChartTradeVolumeComponent', () => {
  let component: ChartTradeVolumeComponent;
  let fixture: ComponentFixture<ChartTradeVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTradeVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTradeVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
