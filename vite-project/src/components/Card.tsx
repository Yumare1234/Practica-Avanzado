import { useState } from "react";


const Card = () => {
const [card, setCard] = useState({
    name: "",
    descripcion: "",
    attack: "",
    defense: "",
    type: "",
    image: "",
});

return (
<div>
    <input
    type="text"
    placeholder="Nombre"
    className="border border-blue-800"
    value={card.name}
    onChange={(e) => setCard({ ...card, name: e.target.value})}
/>
    <input
    type="text"
    placeholder="Nombre"
    className="border border-blue-800"
    value={card.descripcion}
    onChange={(e) => setCard({ ...card, descripcion: e.target.value})}
/>
    <input
    type="text"
    placeholder="Nombre"
    className="border border-blue-800"
    value={card.attack}
    onChange={(e) => setCard({ ...card, attack: e.target.value})}
/>
    <input
    type="text"
    placeholder="Nombre"
    className="border border-blue-800"
    value={card.defense}
    onChange={(e) => setCard({ ...card, defense: e.target.value})}
/>
    <input
    type="text"
    placeholder="Nombre"
    className="border border-blue-800"
    value={card.type}
    onChange={(e) => setCard({ ...card, type: e.target.value})}
/>
    <input
    type="text"
    placeholder="Nombre"
    className="border border-blue-800"
    value={card.image}
    onChange={(e) => setCard({ ...card, image: e.target.value})}
/>


<button className="bg-indigo-700 hover:bg-indigo-50 text-white font-bold py-2 px-4 rounded">
    Validar
    on
</button>
</div>)
};

export default Card;