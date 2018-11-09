import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../../services/student.service';
import { Student } from '../../models/student';
import { Course } from '../../models/course';

import { JsonObject } from '../../models/json';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student.component.html'
})
export class StudentDetailComponent implements OnInit {
  public courses: Course[];
  public student: Student[];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,


  ) { }

  ngOnInit() {
    this.getStudent();
    this.getCourses();



  }

  public async getStudent(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const res = await this.studentService.getStudent<JsonObject>(id);

      this.student = res.data;
      console.log(this.student);
    } catch ( error ) {
      console.error( error );
    }
  }

  public async getCourses(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const res = await this.studentService.getCourses<JsonObject>(id);
      this.courses = res.data;
      console.log(this.courses);
    } catch ( error ) {
      console.error( error );
    }
  }

  

  
  
}
