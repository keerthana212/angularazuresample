import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import { BillslistComponent } from './billslist/billslist.component';

import { ContactComponent } from './contact/contact.component';
import { DongleComponent } from './dongle/dongle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { RechargeComponent } from './recharge/recharge.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrackComponent } from './track/track.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { VoizfonicaComponent } from './voizfonica/voizfonica.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },


  {path: 'home', component: HomeComponent },
  {path: 'track', component: TrackComponent },
   {path: 'sign-up', component: SignUpComponent },
   {path: 'about', component: AboutComponent },
   {path: 'contact', component: ContactComponent },
   {path: 'plans', component: PlansComponent },
   {path: 'prepaid', component: PrepaidComponent },
   {path: 'postpaid', component: PostpaidComponent },
   {path: 'dongle', component: DongleComponent },
   {path: 'voizfonica', component: VoizfonicaComponent },
   {path: 'login', component: LoginComponent },
   {path: 'billdetails', component: BilldetailsComponent },
   {path: 'recharge', component: RechargeComponent },
   {path: 'tracklist', component: TracklistComponent },
   {path: 'billslist', component: BillslistComponent }
   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
