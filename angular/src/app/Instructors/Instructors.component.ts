import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../services/Instructor.service';
import { Instructor } from '../models/Instructor';
import { JsonObject } from '../models/json';

@Component({
  selector: 'app-instructors',
  templateUrl: './Instructors.component.html'
})
export class InstructorsComponent implements OnInit {
  public instructors: Instructor[];

  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
    this.getInstructors();
  }

  public async getInstructors(): Promise<void> {
    try {
      const res = await this.instructorService.getInstructors<JsonObject>();
      this.instructors = res.data;
      console.log(this.instructors);
    } catch ( error ) {
      console.error( error );
    }
  }
}
