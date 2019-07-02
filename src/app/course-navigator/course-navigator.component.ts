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
  selectedCourse = {
    created: null,
    id: null,
    modified: null,
    modules: Array [20],
    title: null
  }
  selectedModule = {
    courseTitle: null,
    id: null,
    title: null
  }
  addCourseName = ''
  addModuleName = ''
  addLessonName = ''

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

  addCourse = course => {
    this.service
      .createCourse(course)
      .then(() => this.findCourses())
      .then(() => this.clear());
  }

  addModule = module => {
    this.service
      .createModule(module, this.selectedCourse.id)
      .then(() => {
        this.service
          .findModulesForCourse(this.selectedCourse.id)
          .then(modules => this.modules = modules)
          .then(() =>  {this.addModuleName = null; }
          );
      });
  }

  addLesson = lesson => {
    console.log('selected Module ', this.selectedModule)
    this.service
      .createLesson(lesson, this.selectedModule.id)
      .then(() => {
        this.service
          .findLessonsForModule(this.selectedModule.id)
          .then(lessons => this.lessons = lessons)
          .then(() => {this.addLessonName = null; }
          );
      });
  }

  deleteCourse = course => {
    this.selectedCourse = {
      created: null,
      id: null,
      modified: null,
      modules: Array [20],
      title: null
    };
    this.service
      .deleteCourse(course.id)
    const index = this.courses.indexOf(course);
    if (index !== -1) {
        this.courses.splice(index, 1);
    }
  }

  deleteModule = module => {
    this.selectedModule = {
      courseTitle: null,
      id: null,
      title: null
    };
    this.service
      .deleteModule(module.id, this.selectedCourse.id)
    const index = this.modules.indexOf(module);
    if (index !== -1) {
      this.modules.splice(index, 1);
    }
  }

  deleteLesson = lesson => {
    this.service
      .deleteLesson(lesson.id, this.selectedModule.id)
    const index = this.lessons.indexOf(lesson);
    if (index !== -1) {
      this.lessons.splice(index, 1);
    }
  }

  clear() {
    this.addCourseName = null;
  }

  ngOnInit() {
    this.findCourses();
  }

  findCourses() {
    this.service
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
