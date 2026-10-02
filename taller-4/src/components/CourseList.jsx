import Tarjeta from './Tarjeta'

function CourseList({ courses }) {
  return (
    <main id="our_courses" className="view cursos">
      <h2>Nuestros Cursos</h2>
      <p><strong>Elige el camino que mejor se adapte a ti</strong></p>

      <div className="tarjetas-container">
        {courses.map((course) => (
          <Tarjeta key={course.title} {...course} />
        ))}
      </div>
    </main>
  )
}

export default CourseList