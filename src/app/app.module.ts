import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TrackComponent } from './track/track.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlansComponent } from './plans/plans.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoizfonicaComponent } from './voizfonica/voizfonica.component';
import { HttpClientModule } from '@angular/common/http';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import { RechargeComponent } from './recharge/recharge.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { BillslistComponent } from './billslist/billslist.component';


@NgModule({
  declarations: [
    AppComponent,
  
    TrackComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    PlansComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    VoizfonicaComponent,
    BilldetailsComponent,
    RechargeComponent,
    TracklistComponent,
    BillslistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
