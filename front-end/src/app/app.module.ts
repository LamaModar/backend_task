import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { TokenService } from './services/token/token.service';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule 
  ],
  providers: [FormBuilder,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
