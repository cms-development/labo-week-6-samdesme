import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { InstructorsComponent } from './Instructors/Instructors.component';
import { HomeComponent } from './home/home.component';
import { InstructorDetailComponent } from './Instructors/detail/Instructor.component';

import { CourseDetailComponent } from './courses/detail/course.component';
import { StudentDetailComponent } from './students/detail/student.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    InstructorsComponent,
    CourseDetailComponent,
    InstructorDetailComponent,
    StudentDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
