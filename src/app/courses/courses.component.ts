import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title:string = "authors";
  courses:string[];

  constructor(private service:AuthorsService) { 
    this.courses = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
