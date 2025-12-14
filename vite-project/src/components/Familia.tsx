type Zapatos = {
    marca: string;
    talla: number;
    color: string;
    precio: number;
    trenzas?: string;
};

function Zapatosdescripcion({ 
    marca,
    talla,
    color,
    precio,
    trenzas,
}: Zapatos) {
    return(
        <div>
            <h2>Descripción de los Zapatos</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Talla: {talla}</li>
                <li>Color: {color}</li>
                <li>Precio: ${precio}</li>
                {trenzas && <li>Trenzas: {trenzas}</li>}
            </ul>
        </div>
    )
}

export default Zapatosdescripcion; 