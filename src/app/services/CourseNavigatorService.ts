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
}
