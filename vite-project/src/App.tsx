import './App.css'
import Zapatosdescripcion from './components/Familia'

function App() {
  const Zapatosinfo = {
    marca: "Nike",
    talla: 45,
    color: "Azul",
    precio: 145,
    trenzas: "",
  }
  return (
  <Zapatosdescripcion
    marca={Zapatosinfo.marca}
    talla={Zapatosinfo.talla}
    color={Zapatosinfo.color}
    precio={Zapatosinfo.precio}
    trenzas={Zapatosinfo.trenzas}
  />
);
}



export default App;
