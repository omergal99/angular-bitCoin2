import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { NavBarComponent } from './cmps/nav-bar/nav-bar.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
// import { BitcoineService } from './services/bitcoine.service';
// import { ContactService } from './services/contact.service';
// import { StorageService } from './services/storage.service';
// import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactComponent,
    HomeComponent,
    SignupComponent,
    StatisticComponent,
    UserDetailsComponent,
    ChartComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    MovesListComponent,
    NavBarComponent,
    TransferFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // NO MORE NEED IMPORT SERVICES - *** so when i used the providers? ***
  // providers: [BitcoineService,ContactService,StorageService,UserService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
