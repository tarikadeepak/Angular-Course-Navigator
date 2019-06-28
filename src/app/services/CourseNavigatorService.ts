export class CourseNavigatorService{
  findAllCourses = () =>
    fetch
    ('http://localhost:8080/api/course')
      .then(response => response.json()
    );
}
