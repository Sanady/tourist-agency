import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignInComponent } from './components/authorization/sign-in/sign-in.component';
import { SignUpComponent } from './components/authorization/sign-up/sign-up.component';
import { ArrangementsComponent } from './components/arrangements/arrangements.component';
import { EuropeArrangementsComponent } from './components/arrangements/europe-arrangements/europe-arrangements.component';
import { AsiaArrangementsComponent } from './components/arrangements/asia-arrangements/asia-arrangements.component';
import { SouthAmericaArrangementsComponent } from './components/arrangements/south-america-arrangements/south-america-arrangements.component';
import { NorthAmericaArrangementsComponent } from './components/arrangements/north-america-arrangements/north-america-arrangements.component';
import { AfricaArrangementsComponent } from './components/arrangements/africa-arrangements/africa-arrangements.component';
import { ArrangementComponent } from './components/arrangement/arrangement.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ArrangementsComponent,
    EuropeArrangementsComponent,
    AsiaArrangementsComponent,
    SouthAmericaArrangementsComponent,
    NorthAmericaArrangementsComponent,
    AfricaArrangementsComponent,
    ArrangementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
