import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {

  const testimoniosData = [
    {
      nombre: 'Shawn Wang',
      pais: 'Singapur',
      imagen: 'shawn',
      cargo: 'Ingeniero de software',
      empresa: 'Amazon',
      testimonio: 'Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante cientos de horas de lecciones gratuitas. En un año tenía un trabajo de seis cifras como ingeniero de software.'
    },
    {
      nombre: 'Sara Chima',
      pais: 'Nigeria',
      imagen: 'sarah',
      cargo: 'Ingeniero de software',
      empresa: 'ChatDesk',
      testimonio: 'Esto fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble.'
    },
    {
      nombre: 'Emma Bostian',
      pais: 'Suecia',
      imagen: 'emma',
      cargo: 'Ingeniero de software',
      empresa: 'Spotify',
      testimonio: 'Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero este curso fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en el curso me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
    }
  ];

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre nosotros:</h1>
        {testimoniosData.map((testimonio, index) => (
          <Testimonio key={index} {...testimonio} />
        ))}

      </div>
    </div>
  );
}

export default App;
