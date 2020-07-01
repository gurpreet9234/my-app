import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { GuestProfileComponentComponent } from './guest-profile-component/guest-profile-component.component';
import { ClientProfileComponentComponent } from './client-profile-component/client-profile-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ContactComponent,
    GuestProfileComponentComponent,
    ClientProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
