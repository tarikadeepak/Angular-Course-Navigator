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

  deleteModule(moduleId, courseId) {
    return fetch((`http://localhost:8080/api/course/${courseId}/module/${moduleId}`), {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'DELETE'
    });
  }

  deleteLesson(lessonId, moduleId) {
    return fetch((`http://localhost:8080/api/course/module/${moduleId}/lesson/${lessonId}`), {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'DELETE'
    });
  }

  createCourse(courseTitle) {
    const course = {
      title: ''
    }
    course.title = courseTitle;
    console.log('Course while adding ', JSON.stringify(course))
    return fetch('http://localhost:8080/api/course', {
      body: JSON.stringify(course),
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'POST'

    }).then (response => console.log(response.json()))
  }

  createModule(moduleTitle, courseId) {
    const module = {
      title: '',
    }
    module.title = moduleTitle;
    return fetch(`http://localhost:8080/api/course/${courseId}/module`, {
      body: JSON.stringify(module),
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'POST'

    }).then (response => console.log(response.json()))
  }

  createLesson(lessonTitle, moduleId) {
    const lesson = {
      title: '',
    }
    lesson.title = lessonTitle;
    return fetch(`http://localhost:8080/api/course/module/${moduleId}/lesson`, {
      body: JSON.stringify(lesson),
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'POST'

    }).then (response => console.log(response.json()))
  }
}
