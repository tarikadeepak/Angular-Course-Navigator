import {parseHttpResponse} from 'selenium-webdriver/http';

export class CourseNavigatorService{
  findAllCourses = () =>
    fetch
    ('http://localhost:8080/api/course')
      .then(response => response.json()
    )

  findModulesForCourse = courseId =>
    fetch
    (`http://localhost:8080/api/course/${courseId}/module`)
      .then(response => response.json()
    )

  findLessonsForModule = moduleId =>
    fetch
    (`http://localhost:8080/api/course/module/${moduleId}/lesson`)
      .then(response => response.json()
    )

  deleteCourse(courseId) {
    const url = 'http://localhost:8080/api/course'.concat('/').concat(courseId);
    return fetch(url, {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'DELETE'
    });
  }

  createCourse(courseTitle) {
    const course = {
      courseTitle: ''
    }
    course.courseTitle = courseTitle;
    console.log('Course while adding ', JSON.stringify(course))
    return fetch('http://localhost:8080/api/course', {
      body: JSON.stringify(course),
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'POST'

    }).then (response => console.log(response.json()))
  }
}
