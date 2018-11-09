import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './../../services/course.service';
import { Course } from '../../models/course';
import { Student } from '../../models/student';
import { Instructor } from '../../models/Instructor';
import { JsonObject } from '../../models/json';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course.component.html'
})
export class CourseDetailComponent implements OnInit {
  public course: Course[];
  public students: Student[];
  public instructor: Instructor[];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,


  ) { }

  ngOnInit() {
    this.getCourse();
    this.getInstructors();
    this.getStudents();


  }

  public async getCourse(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const res = await this.courseService.getCourse<JsonObject>(id);

      this.course = res.data;
      console.log(this.course);
    } catch ( error ) {
      console.error( error );
    }
  }

  public async getStudents(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');

      const res = await this.courseService.getStudents<JsonObject>(id);
      this.students = res.data;
      console.log(this.students);
    } catch ( error ) {
      console.error( error );
    }
  }

  public async getInstructors(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');

      const resInstr = await this.courseService.getInstructor<JsonObject>(id);
      this.instructor = resInstr.data;
      console.log(this.instructor);
    } catch ( error ) {
      console.error( error );
    }
  }

  
  
}
