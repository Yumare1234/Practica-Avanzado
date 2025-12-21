import { useState } from "react";
import { Modal } from "./Modal";

type Persona = {
nombre: string;
apellido: string;
edad: number;
cedula: string; 
telefonos?: string[]; 
familia: string[];
};

function Familia ({nombre, apellido, edad, cedula, telefonos, familia}: any) {
    const [mostrarModal, setMostrarModal] = useState(false);
    const alternarModal = () => setMostrarModal(!mostrarModal);

    return (
    <div> nombre:{nombre} apellido:{apellido}
    <div>
        edad:{edad} cedula:{cedula} 
    </div>
    <button onClick={alternarModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1  px-4 rounded-lg shadow-md transition duration-300 mt-2"> Mostrar Modal
    </button>
        <Modal
        isOpen={mostrarModal}
        onClose={alternarModal}
        title={nombre}>




        </Modal>
        
    </div>
    );
} 


export default Familia;