import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ChartMarketPriceComponent } from './components/chart-market-price/chart-market-price.component';
import { ChartTradeVolumeComponent } from './components/chart-trade-volume/chart-trade-volume.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './components/move-list/move-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    HomePageComponent,
    ContactPageComponent,
    MainNavbarComponent,
    StatisticPageComponent,
    ChartMarketPriceComponent,
    ChartTradeVolumeComponent,
    SignupPageComponent,
    TransferFundComponent,
    MoveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
