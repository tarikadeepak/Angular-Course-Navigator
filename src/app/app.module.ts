import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseNavigatorService} from './services/CourseNavigatorService';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [CourseNavigatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
