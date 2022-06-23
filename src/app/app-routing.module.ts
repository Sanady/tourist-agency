import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/authorization/sign-in/sign-in.component';
import { SignUpComponent } from './components/authorization/sign-up/sign-up.component';
import { ArrangementsComponent } from './components/arrangements/arrangements.component';
import { DestinationComponent } from './components/destination/destination.component';

const routes: Routes = [
  { path: 'destination', component: DestinationComponent },
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: '', component: ArrangementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
