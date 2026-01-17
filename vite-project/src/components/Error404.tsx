import { useState } from "react"


const Error404 = () => {
    const [Error, setErrors] = useState({
        name: "",
        descripcion: "",
        attack: "",
        defense: "",
        type: "",
        image: "",
    });

return
{Error.name && <p className="text-red-500">{Error.name}</p>}
{Error.descripcion && <p className="text-red-500">{Error.descripcion}</p>}
{Error.attack && <p className="text-red-500">{Error.attack}</p>}
{Error.defense && <p className="text-red-500">{Error.defense}</p>}
{Error.type && <p className="text-red-500">{Error.type}</p>}
{Error.image && <p className="text-red-500">{Error.image}</p>}

}