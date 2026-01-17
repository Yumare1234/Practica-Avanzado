import './App.css'
import Card from './components/Card';
import { useState } from 'react';

function App() {

  const [card, setCard] = useState({ name: '', descripcion: '', attack: 0, defense: 0, type: '', image: '' });
  const [errors, setErrors] = useState({});

const ValidarCard = (): boolean => {
  let flag = true;
  let nameError = "";
  let descripcionError = "";
  let attackError = "";
  let defenseError = "";
  let typeError = "";
  let imageError = "";

  if (!card.name || card.name.length < 3) {
    nameError = "El nombre debe tener al menos 3 caracteres";
    flag = false;
  }

  if (!card.descripcion) {
    descripcionError = "La descripción es obligatoria";
    flag = false;
  }

  if (!card.attack || isNaN(card.attack) || Number(card.attack) < 0) {
    attackError = "El ataque debe ser un número positivo";
    flag = false;
  }

  if (!card.defense || isNaN(card.defense) || Number(card.defense) < 0) {
    defenseError = "La defensa debe ser un número positivo";
    flag = false;
  }

  if (!card.type) {
    typeError = "El tipo es obligatorio";
    flag = false;
  }

  if (!card.image) {
    imageError = "La URL de la imagen es obligatoria";
    flag = false;
  }

  // Consolidar todos los errores en un solo objeto
  setErrors({
    name: nameError,
    descripcion: descripcionError,
    attack: attackError,
    defense: defenseError,
    type: typeError,
    image: imageError,
  });
}

  return flag;
};
export default App;
