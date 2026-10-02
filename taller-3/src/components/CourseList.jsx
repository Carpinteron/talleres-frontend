import Tarjeta from './Tarjeta'

function CourseList({ courses }) {
  return (
    <main id="our_courses">
      <h2>Nuestros Cursos</h2>
      <p><strong>Elige el camino que mejor se adapte a ti</strong></p>

      {courses.map((course) => (
        <Tarjeta key={course.title} {...course} />
      ))}
    </main>
  )
}

export default CourseList