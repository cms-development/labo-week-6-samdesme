import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../services/Instructor.service';
import { Instructor } from '../../models/Instructor';
import { JsonObject } from '../../models/json';


@Component({
  selector: 'app-instructor-detail',
  templateUrl: './Instructor.component.html'
})
export class InstructorDetailComponent implements OnInit {

  public instructor: Instructor[];

  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService,


  ) { }

  ngOnInit() {
    this.getInstructor();


  }

  public async getInstructor(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const res = await this.instructorService.getInstructor<JsonObject>(id);

      this.instructor = res.data;
      console.log(this.instructor);
    } catch ( error ) {
      console.error( error );
    }
  }


  
  
}
