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
  modules = []
  lessons = []
  selectedCourse = {}
  selectedModule = {}

  selectCourse = ($event, course) => {
    if ($event.target.name === 'deleteButton') {
      $event.preventDefault();
      $event.stopPropagation();
    } else {
      this.selectedCourse = course;
      this.lessons = [];
      this.service
        .findModulesForCourse(course.id)
        .then(modules => this.modules = modules);
    }
  }

  selectModule = module => {
    this.selectedModule = module;
    this.service
      .findLessonsForModule(module.id)
      .then(lessons => this.lessons = lessons);
  }

  deleteCourse = course => {
    console.log('courses before delete ' , this.courses);
    this.selectedCourse = {};
    this.service
      .deleteCourse(course.id)
    const index = this.courses.indexOf(course);
    if (index !== -1) {
        this.courses.splice(index, 1);
    }
    console.log('courses after delete ' , this.courses);
  }

  addCourse = course => {
    console.log('Add Course Title ' , course);
    this.service
      .createCourse(course);
  }

  ngOnInit() {
    this.service
      .findAllCourses()
      .then(courses => this.courses = courses)
  }

}
