import './App.css';
import Testimonio from './componentes/Testimonio'
import './hojas-de-estilo/Testimonio.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es un png algo grande, mas </h1>
        <Testimonio 
          nombre='1'
          pais='2'
          imagen='a'
          cargo='3'
          empresa='4'
          testimonio='aaaa'        
        />
        <Testimonio 
          nombre='a'
          pais='b'
          imagen='b'
          cargo='c'
          empresa='d'
          testimonio='11111'        
        />
        <Testimonio 
          nombre='no'
          pais='si'
          imagen='c'
          cargo='1'
          empresa='9'
          testimonio='D.:'        
        />
      </div>
    </div>
  );
}

export default App;
