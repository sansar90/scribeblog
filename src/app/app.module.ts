import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import *as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
let firebaseConfig = {
 apiKey: "AIzaSyDD2RJYqJP93dTGREPz5w5lHmt3CmqdxvQ",
    authDomain: "scribeblog-32a72.firebaseapp.com",
    databaseURL: "https://scribeblog-32a72.firebaseio.com",
    projectId: "scribeblog-32a72",
    storageBucket: "scribeblog-32a72.appspot.com",
    messagingSenderId: "778052597148",
    appId: "1:778052597148:web:9f5fb4c2b7541efcbc8459",
    measurementId: "G-J83080CP0N"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
