import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseNavigatorService} from './services/CourseNavigatorService';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/UserService';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseNavigatorService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
