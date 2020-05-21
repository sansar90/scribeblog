import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import *as firebase from 'firebase/app';
import 'firebase/auth';
import { NgxEditorModule } from 'ngx-editor';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



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
    CapitalizePipe,
    ProfileComponent,
   MenuComponent,
    MyblogsComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,AppRoutingModule,NgxEditorModule,HttpClientModule ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
