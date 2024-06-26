import './App.css';
import Testimonio from './componentes/Testimonio'
import './hojas-de-estilo/Testimonio.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es un texto hecho sin creatividad </h1>
        <Testimonio 
          nombre='Ana González'
          pais='España'
          imagen='a'//imagen prueba
          cargo='Desarrolladora Web'
          empresa='Tech Solutions'
          testimonio='FreeCodeCamp me ha permitido adquirir habilidades que nunca imaginé. Gracias a su metodología práctica, ahora puedo construir sitios web y aplicaciones con confianza. ¡Es la mejor inversión que he hecho en mi carrera!'         
        />
        <Testimonio 
          nombre='Carlos Méndez'
          pais='México'
          imagen='b'//imagen prueba
          cargo='Ingeniero de Software'
          empresa='Innovatech'
          testimonio='Lo que más me gusta de FreeCodeCamp es la comunidad. No solo aprendí a programar, sino que también encontré un grupo de apoyo increíble. Cada desafío me motivó a seguir adelante y ahora trabajo en una empresa que valora mis habilidades.'              
        />
        <Testimonio 
          nombre='María Fernanda Silva'
          pais='Argentina'
          imagen='c'//imagen prueba
          cargo='Especialista en Datos'
          empresa='DataCorp'
          testimonio='FreeCodeCamp me abrió las puertas al mundo de la ciencia de datos. Con sus cursos gratuitos y bien estructurados, logré transformar mi carrera y ahora analizo grandes volúmenes de datos para tomar decisiones estratégicas en mi empresa.'              
        />
      </div>
    </div>
  );
}

export default App;
