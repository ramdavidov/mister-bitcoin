import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMarketPriceComponent } from './chart-market-price.component';

describe('ChartMarketPriceComponent', () => {
  let component: ChartMarketPriceComponent;
  let fixture: ComponentFixture<ChartMarketPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMarketPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMarketPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
