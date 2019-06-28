import { Component, OnInit } from '@angular/core';
import {CourseNavigatorService} from '../services/CourseNavigatorService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorService) { }

  courses = []
  selectedCourse = {}

  selectCourse = course =>
    this.selectedCourse = course;

  ngOnInit() {
    this.service
      .findAllCourses()
      .then(courses => this.courses = courses)
  }

}
