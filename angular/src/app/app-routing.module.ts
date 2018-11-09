import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './students/detail/student.component';

import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/detail/course.component';

import { InstructorsComponent } from './Instructors/Instructors.component';
import { InstructorDetailComponent } from './Instructors/detail/Instructor.component';

import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  { path: 'students/:id', component: StudentDetailComponent },
  {path: 'instructors', component: InstructorsComponent},
  {path: 'instructors/:id', component: InstructorDetailComponent},
  {path: 'courses', component: CoursesComponent},
  { path: 'courses/:id', component: CourseDetailComponent },

];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}
