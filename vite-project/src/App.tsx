import './App.css'
import Miembros from './components/Familia'

function App() {
  const datosMiembros = {
        nombre: "Carlos",
        apellido: "Perez",
        edad: 45,
        cedula: "123456789",
        telefonos: ["555-1234", "555-5678"],
        familia: ["Ana", "Luis", "Sofia"],
    };
  return (
    <div className="App">
      <Miembros 
        nombre={datosMiembros.nombre}
        apellido={datosMiembros.apellido}
        edad={datosMiembros.edad}
        cedula={datosMiembros.cedula}
        telefonos={datosMiembros.telefonos}
        familia={datosMiembros.familia}
      />
    </div>
  )
}

export default App;
